const Note = ({
  noteText,
  notechecked,
  handleChecked,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div
      className={`flex justify-between px-2 py-4 transition-colors duration-150 cursor-pointer ${
        notechecked ? "bg-stone-800" : "hover:bg-stone-800"
      }`}
      onClick={handleChecked} // This is the click handler for checking/unchecking the note
    >
      <p className={`text-xl ${notechecked && "line-through"}`}>{noteText}</p>
      <div className="flex gap-4">
        {/* Prevent triggering handleChecked when clicking Edit */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from propagating to the parent
            handleEdit(); // Call the edit handler
          }}
          className="text-indigo-300 hover:text-indigo-500"
        >
          Edit
        </button>

        {/* Prevent triggering handleChecked when clicking Delete */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click event from propagating to the parent
            handleDelete(); // Call the delete handler
          }}
          className="text-red-300 hover:text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
