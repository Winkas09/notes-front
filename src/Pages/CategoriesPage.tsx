import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/api";
import CategoryList from "../components/categories/CategoryList";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
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
      <button
        className="mb-4 p-2 mt-6 bg-gray-500 text-white rounded hover:bg-gray-700"
        onClick={() => navigate("/create-category")}
      >
        Create category
      </button>
      <CategoryList categories={data?.categories} />
    </div>
  );
};

export default CategoriesPage;
