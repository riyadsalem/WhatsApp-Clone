import Sidebar from "../components/sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { getConversations } from "../features/chatSlice";
import { useEffect } from "react";
import { WhatsappHome } from "../components/Chat";

export default function Home() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { activeConversation } = useSelector((state) => state.chat);
  console.log("activeConversation", activeConversation);

  //Get Conversations
  useEffect(() => {
    if (user?.token) {
      dispatch(getConversations(user.token));
    }
  }, [user]);

  return (
    <div className="h-screen dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/*container*/}
      <div className="container h-screen flex py-[19px]">
        <Sidebar />
        {activeConversation._id ? "Home" : <WhatsappHome />}
      </div>
    </div>
  );
}
