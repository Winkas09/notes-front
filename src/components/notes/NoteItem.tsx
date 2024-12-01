const NoteItem = ({ note }) => {
  return (
    <div className="flex justify-center items-center p-20 m-20">
      <div className="p-14 m-8 w-[600px] border rounded-md bg-gray-400">
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="text-lg">{note.body}</p>
      </div>
    </div>
  );
};

export default NoteItem;
