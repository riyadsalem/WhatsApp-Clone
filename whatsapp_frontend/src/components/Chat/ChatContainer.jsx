import { useEffect, useMemo } from "react";
import ChatHeader from "./header/ChatHeader";
import ChatMessages from "./messages/ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { getConversationMessages } from "../../features/chatSlice";
import ChatActions from "./actions/ChatActions";
import { checkOnlineStatus } from "../../utils/chat";

export default function ChatContainer({ onlineUsers, typing }) {
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
  }, [activeConversation]);

  return (
    <div className="relative w-full h-full border-l dark:border-l-dark_border_2 select-none overflow-hidden ">
      {/* Container */}
      <div>
        {/*Chat header*/}
        <ChatHeader
          online={checkOnlineStatus(
            onlineUsers,
            user,
            activeConversation.users
          )}
        />
        {/*Chat messages*/}
        <ChatMessages typing={typing} />
        {/* Chat Actions */}
        <ChatActions />
      </div>
    </div>
  );
}
