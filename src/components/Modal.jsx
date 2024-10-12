import GlowButton from "./GlowButton";

const Modal = ({
  modalHeader,
  modalCancel,
  modalSave,
  modalInputValue,
  modalInputValueChange,
}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      modalSave(); // Call the save function
    }
  };

  return (
    <div className="absolute z-50 h-full inset-0 grid place-items-center bg-black/75">
      <div className="min-w-fit flex flex-col gap-8 bg-stone-900 p-8 rounded-lg center w-1/3">
        <h1 className="text-2xl text-purple-300 text-center sm:text-left">
          {modalHeader}
        </h1>

        <input
          type="text"
          className="bg-stone-700 rounded p-2 outline-none"
          onChange={modalInputValueChange}
          onKeyDown={handleKeyDown} // Add the keydown event handler
          value={modalInputValue}
        />

        <div className="flex justify-between mt-8 gap-8">
          <GlowButton btnText={"Cancel"} handleClick={modalCancel} />
          <GlowButton btnText={"Save"} handleClick={modalSave} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
