import { Conversations } from "./conversations";
import SidebarHeader from "./header/SidebarHeader";
import Notifications from "./notifications";
import { Search } from "./search";
import { useState } from "react";

export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      {/*Sidebar Header*/}
      <SidebarHeader />

      {/*Notifications */}
      <Notifications />

      {/* Search */}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />

      {/*Conversations*/}
      <Conversations />
    </div>
  );
}
