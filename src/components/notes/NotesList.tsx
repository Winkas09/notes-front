import { useNavigate } from "react-router-dom";
import NoteSkeleton from "../../utils/NoteSkeleton";

const NotesList = ({ notes, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex flex-wrap">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <NoteSkeleton key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap">
      {notes.map((note) => (
        <div
          className="p-14 m-6 w-[200px] border rounded-md bg-gray-400 justify-center align-middle cursor-pointer hover:bg-gray-500 transition duration-300"
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
