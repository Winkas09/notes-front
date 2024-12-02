import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById, fetchCategories } from "../api/api";
import NoteItem from "../components/notes/NoteItem";
import { noteImgUrl } from "../utils/utils";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: noteData,
    isLoading: isNoteLoading,
    error: noteError,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  const {
    data: categoriesData,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isNoteLoading || isCategoriesLoading) {
    return (
      <div className="flex justify-center items-center p-32 m-40">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-500 rounded w-3/4 mb-4"></div>
          <div className="h-5 bg-gray-500 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (noteError || categoriesError) {
    return <div>Error loading note or categories</div>;
  }

  const note = noteData.note;
  const category = categoriesData.categories.find(
    (cat) => cat._id === note.categoryId
  );

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
      <NoteItem note={note} category={category} />
    </div>
  );
};

export default NotePage;
