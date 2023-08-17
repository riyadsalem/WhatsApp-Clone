import { CloseIcon, EmojiIcon } from "../../../svg";
import EmojiPicker from "emoji-picker-react";

export default function EmojiPickerApp({ showPicker, setShowPicker }) {
  return (
    <li className="w-full">
      <button
        className="btn"
        type="button"
        onClick={() => {
          setShowPicker((prev) => !prev);
        }}
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1" />
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1" />
        )}
      </button>
      {/*Emoji picker*/}
      {showPicker ? (
        <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px] w-full">
          <EmojiPicker theme="dark" />
        </div>
      ) : null}
    </li>
  );
}
