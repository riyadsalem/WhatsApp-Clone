import { useState } from "react";
import { ReturnIcon } from "../../../../svg";
import { MultipleSelect, UnderlineInput } from "./";

export default function CreateGroup({ setShowCreateGroup }) {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSearch = async (e) => {};

  return (
    <div className="createGroupAnimation relative flex0030 h-full z-40">
      {/* Container */}
      <div className="mt-5">
        {/* Return/Close button */}
        <button
          className="btn w-6 h-6 border"
          onClick={() => setShowCreateGroup(false)}
        >
          <ReturnIcon className="fill-white" />
        </button>
        {/* Group name input */}
        <UnderlineInput name={name} setName={setName} />
        {/* Multiple select */}
        <MultipleSelect
          searchResults={searchResults}
          setSelectedUsers={setSelectedUsers}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
}
