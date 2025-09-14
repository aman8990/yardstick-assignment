'use client';

import { useState } from 'react';
import Menu from '../Menu/Menu';

function AddNoteButton({ noNewNotes, hasPremium }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowMenu(true)}
        disabled={noNewNotes && !hasPremium}
        className={`bg-gray-800 p-3 rounded-md font-semibold ${
          noNewNotes && !hasPremium ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        Add Note
      </button>

      <Menu setShowMenu={setShowMenu} showMenu={showMenu} add={true} />
    </div>
  );
}

export default AddNoteButton;
