import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchNotesByCategoryId } from "../../api/api";
import NotesList from "../notes/NotesList";

const CategoryItem = () => {
  const { categoryId } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes", categoryId],
    queryFn: () => fetchNotesByCategoryId(categoryId),
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

  if (error) {
    return <div>Error loading notes</div>;
  }

  return <NotesList notes={data?.notes} />;
};

export default CategoryItem;
