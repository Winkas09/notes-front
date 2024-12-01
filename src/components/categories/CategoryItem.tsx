import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchNotesByCategoryId } from "../../api/api";
import NotesList from "../notes/NotesList";

const CategoryItem = ({ categoryId }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", categoryId],
    queryFn: () => fetchNotesByCategoryId(categoryId),
  });

  console.log("🚀 ~ CategoryItem ~ categoryId:", categoryId);

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
    return <div>Error loading notes</div>;
  }

  return (
    <div>
      <button
        className="m-4 p-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        onClick={() => navigate("/categories")}
      >
        Back to Categories
      </button>
      <NotesList notes={data?.notes} />
    </div>
  );
};

export default CategoryItem;
