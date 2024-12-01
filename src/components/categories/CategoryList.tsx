import { useNavigate } from "react-router-dom";

const CategoryList = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div>
      {categories.map((category) => (
        <div
          className="p-14 m-6 w-[200px] border rounded-md bg-gray-400 justify-center align-middle cursor-pointer"
          key={category._id}
          onClick={() => navigate(`/category/${category._id}`)}
        >
          {category.title}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
