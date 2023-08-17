import { Attachments, EmojiPickerApp, Input } from "./index";
import { SendIcon } from "../../../svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../features/chatSlice";
import { ClipLoader } from "react-spinners";

export default function ChatActions() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const { activeConversation, status } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token,
  };

  const SendMessageHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessage(values));
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => SendMessageHandler(e)}
      className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 px-4 select-none"
    >
      {/* Container */}
      <div className="w-full flex items-center gap-x-2">
        {/*Emojis and attachpments*/}
        <ul className="flex gap-x-2">
          <EmojiPickerApp />
          <Attachments />
        </ul>
        {/* Input */}
        <Input message={message} setMessage={setMessage} />
        {/* Send button */}
        <button type="submit" className="btn">
          {status === "loading" ? (
            <ClipLoader color="#E9EDEF" size={25} />
          ) : (
            <SendIcon className="dark:fill-dark_svg_1" />
          )}
        </button>
      </div>
    </form>
  );
}
