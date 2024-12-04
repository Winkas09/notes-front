import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote, toggleFavorite } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Modal from "../../utils/Modal";
import { useState } from "react";
import { Category, Note } from "../../types/types";

interface NoteItemProps {
  note: Note;
  category: Category;
  isFavorite: boolean;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, category, isFavorite }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: removeNote } = useMutation({
    mutationFn: deleteNote,
    mutationKey: ["deleteNote"],
  });

  const { mutate: toggleFav } = useMutation({
    mutationFn: toggleFavorite,
    mutationKey: ["toggleFavorite"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteHandler = () => {
    setIsModalOpen(true);
  };

  const confirmDeleteHandler = () => {
    removeNote(note._id, {
      onSuccess: () => {
        navigate("/notes");
      },
    });
    setIsModalOpen(false);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const toggleFavoriteHandler = () => {
    toggleFav({ noteId: note._id });
  };

  const editHandler = () => {
    navigate(`/edit-note/${note._id}`);
  };

  const backToFavoritesHandler = () => {
    navigate("/favorites");
  };

  return (
    <div className="flex justify-center items-center p-20 m-20">
      <div className="p-14 m-8 w-[600px] border rounded-md bg-gray-400">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-center p-2 m-2">
            {note.title}
          </h1>
          <button onClick={toggleFavoriteHandler} className="text-red-500">
            {isFavorite ? <FaHeart size={32} /> : <FaRegHeart size={32} />}
          </button>
        </div>
        <p className="text-lg p-4 m-2">{note.body}</p>
        {category && (
          <p className="text-md font-bold text-gray-700 p-2 m-2">
            Category: {category.title}
          </p>
        )}
        <div className="flex justify-around space-x-5">
          <button
            onClick={deleteHandler}
            className="flex-1 p-2 m-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Delete
          </button>
          <button
            onClick={editHandler}
            className="flex-1 p-2 m-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Edit
          </button>
          {isFavorite && (
            <button
              onClick={backToFavoritesHandler}
              className="flex-1 p-2 m-2 bg-green-500 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Back to Favorites
            </button>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        onConfirm={confirmDeleteHandler}
        message="Are you sure you want to delete this note?"
      />
    </div>
  );
};

export default NoteItem;
