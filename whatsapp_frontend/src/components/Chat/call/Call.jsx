import { Ringing, Header, CallArea, CallAcions } from "./";
import { useState } from "react";

export default function Call({
  call,
  setCall,
  callAccepted,
  myVideo,
  stream,
  userVideo,
}) {
  const { receiveingCall, name, picture } = call;
  const [showActions, setShowActions] = useState(false);

  return (
    <>
      <div
        className={`fixed top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg ${
          receiveingCall && !callAccepted ? "hidden" : ""
        }`}
        onMouseOver={() => setShowActions(true)}
        onMouseOut={() => setShowActions(false)}
      >
        {/* Container */}
        <div>
          <div>
            {/* Header */}
            <Header />
            {/* Call area */}
            <CallArea name={name} />
            {/* Call actions */}
            {showActions ? <CallAcions /> : null}
          </div>
          {/* Video Streams */}
          <div>
            {/* User Video */}
            <div>
              <video
                ref={userVideo}
                playsInline
                muted
                autoPlay
                className={"largeVideoCall"}
              ></video>
            </div>

            {/* My Video */}
            <div>
              <video
                ref={myVideo}
                playsInline
                muted
                autoPlay
                className={`SmallVideoCall ${
                  showActions ? "moveVideoCall" : ""
                }`}
              ></video>
            </div>
          </div>
        </div>
      </div>

      {receiveingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} />
      )}
    </>
  );
}
