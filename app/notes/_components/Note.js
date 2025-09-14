'use client';

import { IoMdTrash } from 'react-icons/io';
import { HiPencil } from 'react-icons/hi';
import { useState } from 'react';
import SpinnerMini from '@/app/_components/SpinnerMini';
import { deleteNote } from '@/app/_actions/notes';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Menu from '@/app/_components/Menu/Menu';

function Note({ note }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showUpdateMenu, setShowUpdateMenu] = useState(false);

  const router = useRouter();

  const handleDelete = async (id) => {
    setIsDeleting(true);
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await deleteNote(id);

    if (res?.error) {
      toast.dismiss();
      toast.error(res?.error || 'Error in deleting note');
    }
    if (res?.success) {
      toast.dismiss();
      toast.success('Note deleted successfully');
    }

    setIsDeleting(false);
    router.refresh();
  };

  return (
    <div className="bg-gray-800 p-6 rounded-md">
      <div className="flex gap-5">
        <div
          className="border-2 rounded-md p-1 cursor-pointer"
          onClick={() => handleDelete(note?.id)}
        >
          {isDeleting ? (
            <SpinnerMini size={25} />
          ) : (
            <IoMdTrash size={25} color="red" />
          )}
        </div>
        <div className="border-2 rounded-md p-1  cursor-pointer">
          <HiPencil
            size={25}
            color="white"
            onClick={() => setShowUpdateMenu(true)}
          />
        </div>
      </div>

      <h1 className="text-center text-xl font-semibold mb-2">
        Title : {note?.title}
      </h1>
      <p>{note?.content}</p>

      <Menu
        showUpdateMenu={showUpdateMenu}
        setShowUpdateMenu={setShowUpdateMenu}
        update={true}
        title={note?.title}
        content={note?.content}
        id={note?.id}
      />
    </div>
  );
}

export default Note;
