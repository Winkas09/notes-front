import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../api/api";

const NotesPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchNotes,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.notes.map((note) => (
        <div
          className="p-16 m-2 w-[200px] h-max-[200px] border rounded-md bg-red-600 justify-center align-middle"
          key={note.id}
        >
          {note.title}
        </div>
      ))}
    </div>
  );
};

export default NotesPage;
