import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/api";
import NotesList from "../components/notes/NotesList";

const NotesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  return <NotesList notes={data?.notes || []} isLoading={isLoading} />;
};

export default NotesPage;
