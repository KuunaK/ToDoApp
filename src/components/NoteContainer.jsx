import { useState, useEffect } from "react";
import Note from "./Note";
import Modal from "./Modal";
import nothingToDoImg from "../images/image2-faded.png";

const NoteContainer = ({ noteData, searchTerm, filterOption }) => {
  const [allNoteData, setAllNoteData] = useState(noteData);
  const [openModal, setOpenModal] = useState(false);
  const [editingNoteIndex, setEditingNoteIndex] = useState(null);
  const [modalInputValue, setModalInputValue] = useState("");

  useEffect(() => {
    setAllNoteData(noteData);
  }, [noteData]);

  const handleChecked = (noteIndex) => {
    setAllNoteData((prevNotes) =>
      prevNotes.map((note, index) => {
        if (index === noteIndex) {
          return { ...note, checked: !note.checked };
        }
        return note;
      })
    );
  };

  const handleEdit = (noteIndex) => {
    setEditingNoteIndex(noteIndex);
    setModalInputValue(allNoteData[noteIndex].noteText);
    setOpenModal(true);
  };

  const handleSaveEdit = () => {
    const updatedNotes = allNoteData.map((note, index) =>
      index === editingNoteIndex ? { ...note, noteText: modalInputValue } : note
    );

    setAllNoteData(updatedNotes);
    localStorage.setItem("noteData", JSON.stringify(updatedNotes));
    setOpenModal(false);
    setEditingNoteIndex(null);
    setModalInputValue("");
  };

  const handleDelete = (noteIndex) => {
    const updatedNotes = allNoteData.filter((_, index) => index !== noteIndex);
    setAllNoteData(updatedNotes);
    localStorage.setItem("noteData", JSON.stringify(updatedNotes));
  };

  // Filter notes based on searchTerm and filterOption
  const filteredNotes = allNoteData
    .filter((note) =>
      note.noteText.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((note) => {
      if (filterOption === "done") return note.checked;
      if (filterOption === "in-progress") return !note.checked;
      return true; // "all"
    });

  return (
    <>
      {openModal && (
        <Modal
          modalHeader={"Edit Note"}
          modalCancel={() => setOpenModal(false)}
          modalSave={handleSaveEdit}
          modalInputValue={modalInputValue}
          modalInputValueChange={(e) => setModalInputValue(e.target.value)}
        />
      )}
      <div className="mt-10  max-w-5xl mx-auto p-8 divide-y divide-purple-500/25">
        {filteredNotes.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            {filteredNotes.map((note, noteIndex) => (
              <Note
                key={noteIndex}
                noteText={note.noteText}
                notechecked={note.checked}
                handleChecked={() => handleChecked(noteIndex)}
                handleEdit={() => handleEdit(noteIndex)}
                handleDelete={() => handleDelete(noteIndex)}
              />
            ))}
          </div>
        ) : (
          <div className=" grid place-items-center sm:h-80 w-full">
            <h1
              className="text-stone-900 text-4xl sm:text-6xl tracking-widest"
              style={{ textShadow: "0 0 3px #d8b4fe" }}
            >
              Nothing to do...
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default NoteContainer;
