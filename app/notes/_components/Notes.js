import Note from './Note';

function Notes({ notes }) {
  return (
    <div className="grid grid-cols-3 gap-5 px-5 py-10">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default Notes;
