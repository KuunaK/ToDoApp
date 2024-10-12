import GlowButton from "./GlowButton";
import { Plus } from "lucide-react";
import SearchInput from "./SearchInput";
import NoteContainer from "./NoteContainer";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const btnIcon = (
  <Plus
    className="inline-block group-hover:scale-125 transition-all duration-150 group-hover:animate-pulse"
    color="#d8b4fe"
    size={20}
  />
);

const Hero = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [modalInputValue, setModalInputValue] = useState("");
  const [noteData, setNoteData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("all"); // State for filter option

  useEffect(() => {
    const storedData = localStorage.getItem("noteData");

    if (storedData) {
      setNoteData(JSON.parse(storedData));
    }
  }, []);

  const handleCancel = () => {
    setOpenCreateModal(!openCreateModal);
    setModalInputValue("");
  };

  const handleSave = () => {
    let existingNotes = JSON.parse(localStorage.getItem("noteData"));

    if (!Array.isArray(existingNotes)) {
      existingNotes = [];
    }

    const newNote = {
      id: existingNotes.length + 1,
      noteText: modalInputValue,
      checked: false,
    };

    const updatedNotes = [...existingNotes, newNote];

    localStorage.setItem("noteData", JSON.stringify(updatedNotes));
    setNoteData(updatedNotes);
    setOpenCreateModal(!openCreateModal);
    setModalInputValue("");
  };

  const handleUpdateValue = (e) => {
    setModalInputValue(e.target.value);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (option) => {
    setFilterOption(option); // Update filter option state
  };

  return (
    <div className="z-10 w-full p-4 mt-12">
      {openCreateModal && (
        <Modal
          modalHeader={"Create ToDo"}
          modalCancel={handleCancel}
          modalSave={handleSave}
          modalInputValue={modalInputValue}
          modalInputValueChange={handleUpdateValue}
        />
      )}

      <div className="max-w-7xl mx-auto text-purple">
        <div className="flex flex-col gap-8 sm:flex-row items-center justify-around">
          <GlowButton
            btnText={"Create new ToDo"}
            handleClick={() => setOpenCreateModal(!openCreateModal)}
          />
          {/* Pass handleSearch and handleFilterChange to SearchInput */}
          <SearchInput
            handleSearch={handleSearch}
            handleFilterChange={handleFilterChange}
          />
        </div>

        {/* Pass noteData, searchTerm, and filterOption to NoteContainer */}
        <NoteContainer
          noteData={noteData}
          searchTerm={searchTerm}
          filterOption={filterOption}
        />
      </div>
    </div>
  );
};

export default Hero;
