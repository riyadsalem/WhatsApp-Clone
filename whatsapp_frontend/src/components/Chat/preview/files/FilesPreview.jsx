import { useState } from "react";
import { FileViewer, HandleAndSend, Header, Input } from "./";

export default function FilesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      {/*Container*/}
      <div className="w-full flex flex-col items-center">
        {/*Header*/}
        <Header activeIndex={activeIndex} />
        {/*Viewing selected file*/}
        <FileViewer activeIndex={activeIndex} />
        <div className="w-full flex flex-col items-center">
          {/*Message Input*/}
          <Input />
          {/*Send and manipulate files*/}
          <HandleAndSend />
        </div>
      </div>
    </div>
  );
}
