'use client';

import { IoMdClose } from 'react-icons/io';
import AddUpdateNoteForm from './AddUpdateNoteForm';
import { useState } from 'react';

function Menu({
  setShowMenu,
  showMenu,
  add = false,
  update = false,
  showUpdateMenu,
  setShowUpdateMenu,
  title,
  content,
  id,
}) {
  const closeMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowUpdateMenu(false);
    }
  };

  return (
    <div
      className={`z-20 fixed top-0 right-0 rounded-md h-full bg-gray-500 w-[40%] transform transition-transform duration-300 ease-in-out ${
        showMenu || showUpdateMenu ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between bg-gray-800 py-4 items-center px-5 text-white font-semibold">
        <h1>{add ? 'Add Note' : 'Update Note'}</h1>
        <IoMdClose
          size={20}
          className="cursor-pointer"
          onClick={() => closeMenu()}
        />
      </div>

      <AddUpdateNoteForm
        setShowMenu={setShowMenu}
        setShowUpdateMenu={setShowUpdateMenu}
        add={add}
        update={update}
        noteId={id}
        noteTitle={title}
        noteContent={content}
        resetTrigger={showMenu || showUpdateMenu}
      />
    </div>
  );
}

export default Menu;
