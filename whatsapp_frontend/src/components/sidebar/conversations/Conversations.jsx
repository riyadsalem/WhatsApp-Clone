import { useSelector } from "react-redux";
import Conversation from "./Conversation";

export default function Conversations() {
  const { conversations } = useSelector((state) => state.chat);
  return (
    <div className="convos scrollbar">
      <ul>
        {conversations &&
          conversations.map((convo, i) => {
            return <Conversation key={convo._id} convo={convo} />;
          })}
      </ul>
    </div>
  );
}
