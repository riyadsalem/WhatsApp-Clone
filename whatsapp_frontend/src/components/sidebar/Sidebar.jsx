import SidebarHeader from "./header/SidebarHeader";
import Notifications from "./notifications";

export default function Sidebar() {
  return (
    <div className="flex0030 max-w-[30%] h-full select-none">
      {/*Sidebar Header*/}
      <SidebarHeader />
      {/*Notifications */}
      <Notifications />
    </div>
  );
}
