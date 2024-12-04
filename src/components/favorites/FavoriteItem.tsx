import { useNavigate } from "react-router-dom";
import { Favorite } from "../../types/types";

interface FavoriteItemProps {
  favorite: Favorite & { noteTitle?: string };
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ favorite }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/note/${favorite.noteId}`);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
      <div
        className="p-14 m-6 w-auto border rounded-md bg-gray-400 justify-center align-middle cursor-pointer font-bold transition duration-300 transform hover:bg-gray-600 dark:bg-gray-400 dark:hover:bg-gray-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-1"
        onClick={handleClick}
      >
        <p className="text-lg font-semibold text-gray-900 dark:text-black">
          {favorite.noteTitle}
        </p>
      </div>
    </div>
  );
};

export default FavoriteItem;
