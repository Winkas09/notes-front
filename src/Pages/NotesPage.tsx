import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/api";
import NotesList from "../components/notes/NotesList";

const NotesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["notes"],
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
    <div className="p-8 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NotesList notes={data?.notes} />
    </div>
  );
};

export default NotesPage;
