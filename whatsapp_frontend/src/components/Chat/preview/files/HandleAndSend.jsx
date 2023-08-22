import { useSelector, useDispatch } from "react-redux";
import { getImagesToFiles } from "../../../../utils/file";
import Add from "./Add";
import { SendIcon } from "../../../../svg";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { uploadFiles } from "../../../../utils/upload";

export default function HandleAndSend({
  activeIndex,
  setActiveIndex,
  message,
}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { files, activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    // upload files first
    const uploaded_files = await uploadFiles(files);
    console.log(uploaded_files);
    setLoading(false);
  };
  return (
    <div className="w-[97%] flex items-center justify-between mt-2 border-t dark:border-dark_border_2">
      {/*Empty*/}
      <span></span>
      {/*List files*/}
      <div className="flex items-center gap-x-2">
        {files.map((file, i) => (
          <div
            key={i}
            className={`relative w-14 h-14 border dark:border-white mt-2 rounded-md overflow-hidden cursor-pointer
            ${activeIndex === i ? "border-[3px] !border-green_1" : ""}
            `}
            onClick={() => setActiveIndex(i)}
          >
            {file.type === "IMAGE" ? (
              <img
                src={file.fileData}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : file.type === "VIDEO" ? (
              <video src={file.fileData}></video>
            ) : (
              <img
                src={getImagesToFiles(file.type)}
                alt=""
                className="w-8 h-10 mt-1.5 ml-2.5"
              />
            )}
          </div>
        ))}
        {/* Add another file */}
        <Add />
      </div>
      {/*Send button*/}
      <div
        className="bg-green_1 w-16 h-16 mt-2 rounded-full flex items-center justify-center cursor-pointer"
        onClick={(e) => sendMessageHandler(e)}
      >
        {loading ? (
          <ClipLoader color="#E9EDEF" size={25} />
        ) : (
          <SendIcon className="fill-white" />
        )}
      </div>
    </div>
  );
}
