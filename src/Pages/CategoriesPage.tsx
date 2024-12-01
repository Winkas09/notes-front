import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/api";
import CategoryList from "../components/categories/CategoryList";

const CategoriesPage = () => {
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

  return <CategoryList categories={data?.categories} />;
};

export default CategoriesPage;
