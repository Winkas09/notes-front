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

  return <NotesList notes={data?.notes} />;
};

export default NotesPage;
