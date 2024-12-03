import FavoriteItem from "./FavoriteItem";

const FavoritesList = ({ favorites }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-wrap -mx-2">
        {favorites.map((favorite, index) => (
          <FavoriteItem key={favorite._id} favorite={favorite} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
