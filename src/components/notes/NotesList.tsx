import { useNavigate } from "react-router-dom";
import NoteSkeleton from "../../utils/NoteSkeleton";
import { Note } from "../../types/types";

interface NotesListProps {
  notes: Array<Note>;
  isLoading: boolean;
}

const NotesList: React.FC<NotesListProps> = ({ notes, isLoading }) => {
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
          className="p-14 m-6 w-auto border rounded-md bg-gray-400 justify-center align-middle cursor-pointer font-bold transition duration-300 transform hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-1"
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
