import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/api";

const NotesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchNotes,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-32 m-40">
        <div
          className="spinner-border animate-bounce w-40 h-40 border-8 rounded-full flex justify-center items-center"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {data?.notes.map((note) => (
        <div
          className="p-14 m-6 w-[200px] border rounded-md bg-gray-400 justify-center align-middle"
          key={note.id}
        >
          {note.title}
        </div>
      ))}
    </div>
  );
};

export default NotesPage;
