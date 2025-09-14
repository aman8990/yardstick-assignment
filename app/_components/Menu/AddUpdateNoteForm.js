'use client';

import { createNote, updateNote } from '@/app/_actions/notes';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import SpinnerMini from '../SpinnerMini';
import { useRouter } from 'next/navigation';

function AddUpdateNoteForm({
  setShowMenu,
  setShowUpdateMenu,
  add,
  update,
  noteId,
  noteTitle,
  noteContent,
  resetTrigger,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState(update ? noteTitle : '');
  const [content, setContent] = useState(update ? noteContent : '');
  const [error, setError] = useState('');

  const router = useRouter();
  const id = noteId;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!title || !content) {
      setError('Both fields are required.');
      setIsLoading(false);
      return;
    }

    // await new Promise((resolve) => setTimeout(resolve, 2000));

    let res;
    if (add) {
      res = await createNote(title, content);
    } else {
      res = await updateNote(id, title, content);
    }

    if (res?.error) {
      toast.dismiss();
      toast.error(
        res?.error ||
          `${update ? 'Error in updating note' : 'Error in creating note'}`
      );
    }
    if (res?.success) {
      toast.dismiss();
      toast.success(
        `${update ? 'Note updated successfully' : 'Note created successfully'}`
      );
    }

    setTitle('');
    setContent('');
    setError('');

    setIsLoading(false);
    if (add) {
      setShowMenu(false);
    } else {
      setShowUpdateMenu(false);
    }
    router.refresh();
  };

  useEffect(() => {
    if (!resetTrigger) {
      setTitle(update ? noteTitle : '');
      setContent(update ? noteContent : '');
      setError('');
    }
  }, [resetTrigger, update, noteTitle, noteContent]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 mt-10 px-5"
    >
      <div className="flex flex-col">
        <label>Title</label>
        <input
          type="text"
          name="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="border px-2 py-1 rounded-md bg-gray-200 text-black"
        />
      </div>

      <div className="flex flex-col">
        <label>Content</label>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
          className="border px-2 py-1 rounded-md bg-gray-200 text-black"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="bg-gray-800 font-semibold cursor-pointer text-white px-3 py-1 rounded-md flex justify-center"
      >
        {isLoading ? <SpinnerMini size={24} /> : 'Submit'}
      </button>
    </form>
  );
}

export default AddUpdateNoteForm;
