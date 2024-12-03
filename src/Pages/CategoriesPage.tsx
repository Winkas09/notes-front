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

  return (
    <div className="p-4 bg-gray-300 dark:bg-gray-600 min-h-screen">
      <button
        className="mb-4 p-2 mt-6 bg-gray-500 text-white rounded hover:bg-gray-700 dark:bg-gray-300 dark:text-black font-bold dark:hover:bg-red-300"
        onClick={() => navigate("/create-category")}
      >
        Create category
      </button>
      <CategoryList categories={data?.categories || []} isLoading={isLoading} />
    </div>
  );
};

export default CategoriesPage;
