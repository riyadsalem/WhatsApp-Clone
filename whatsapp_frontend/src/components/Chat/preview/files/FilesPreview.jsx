import { FileViewer, HandleAndSend, Header, Input } from "./";

export default function FilesPreview() {
  return (
    <div className="relative py-2 w-full flex items-center justify-center">
      {/*Container*/}
      <div className="w-full flex flex-col items-center">
        {/*Header*/}
        <Header />
        {/*Viewing selected file*/}
        <FileViewer />
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
