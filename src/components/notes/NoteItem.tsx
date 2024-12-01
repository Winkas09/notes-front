import { useMutation } from "@tanstack/react-query";
import { deleteNote } from "../../api/api";
import { useNavigate } from "react-router-dom";

const NoteItem = ({ note }) => {
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

  return (
    <div className="flex justify-center items-center p-20 m-20">
      <div className="p-14 m-8 w-[600px] border rounded-md bg-gray-400">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="text-lg">{note.body}</p>
        <button
          onClick={deleteHandler}
          className="p-4 m-4 bg-red-500 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
