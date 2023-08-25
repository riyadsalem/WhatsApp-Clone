import { Ringing, Header, CallArea, CallAcions } from "./";
import { useState } from "react";

export default function Call({
  call,
  setCall,
  callAccepted,
  myVideo,
  stream,
  userVideo,
  answerCall,
}) {
  const { receiveingCall, name, callEnded } = call;
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
            {callAccepted && !callEnded ? (
              <div>
                <video
                  ref={userVideo}
                  playsInline
                  muted
                  autoPlay
                  className={"largeVideoCall"}
                ></video>
              </div>
            ) : null}

            {/* My Video */}
            {stream ? (
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
            ) : null}
          </div>
        </div>
      </div>

      {receiveingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} answerCall={answerCall} />
      )}
    </>
  );
}
