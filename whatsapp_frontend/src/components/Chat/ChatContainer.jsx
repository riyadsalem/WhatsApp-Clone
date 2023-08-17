import { useEffect, useMemo } from "react";
import ChatHeader from "./header/ChatHeader";
import ChatMessages from "./messages/ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { getConversationMessages } from "../../features/chatSlice";

export default function ChatContainer() {
  const dispatch = useDispatch();
  const { activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  const values = useMemo(() => {
    return {
      token,
      convo_id: activeConversation?._id,
    };
  }, [activeConversation, token]);

  useEffect(() => {
    if (activeConversation?._id) {
      dispatch(getConversationMessages(values));
    }
  }, [activeConversation, dispatch, values]);

  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden ">
      {/* Container */}
      <div>
        {/*Chat header*/}
        <ChatHeader />
        {/*Chat messages*/}
        <ChatMessages />
      </div>
    </div>
  );
}
