import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "../api/api";
import NoteItem from "../components/notes/NoteItem";
import { noteImgUrl } from "../utils/utils";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  console.log("Note data:", data);

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

  if (error) {
    return <div>Error loading note</div>;
  }

  const note = data.note;

  return (
    <div
      style={{
        backgroundImage: `url(${noteImgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <button
        className="m-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        onClick={() => navigate("/notes")}
      >
        Back to Notes
      </button>
      <NoteItem note={note} />
    </div>
  );
};

export default NotePage;
