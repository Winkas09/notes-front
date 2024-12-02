import { useMutation } from "@tanstack/react-query";
import { deleteNote } from "../../api/api";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ note, category }) => {
  const navigate = useNavigate();

  const { mutate: removeNote } = useMutation({
    mutationFn: deleteNote,
    mutationKey: ["deleteNote"],
  });

  const deleteHandler = () => {
    removeNote(note._id, {
      onSuccess: () => {
        navigate("/notes");
      },
    });
  };

  const editHandler = () => {
    navigate(`/edit-note/${note._id}`);
  };

  return (
    <div className="flex justify-center items-center p-20 m-20">
      <div className="p-14 m-8 w-[600px] border rounded-md bg-gray-400">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="text-lg">{note.body}</p>
        {category && (
          <p className="text-md text-gray-700">Category: {category.title}</p>
        )}
        <div className="flex space-x-4">
          <button
            onClick={deleteHandler}
            className="p-4 m-4 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
          <button
            onClick={editHandler}
            className="p-4 m-4 bg-blue-500 text-white rounded-md"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
