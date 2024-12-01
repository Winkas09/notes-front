import { useNavigate } from "react-router-dom";

const NotesList = ({ notes }) => {
  const navigate = useNavigate();

  return (
    <div>
      {notes.map((note) => (
        <div
          className="p-14 m-6 w-[200px] border rounded-md bg-gray-400 justify-center align-middle"
          key={note._id}
          onClick={() => navigate(`/note/${note._id}`)}
        >
          {note.title}
        </div>
      ))}
    </div>
  );
};

export default NotesList;
