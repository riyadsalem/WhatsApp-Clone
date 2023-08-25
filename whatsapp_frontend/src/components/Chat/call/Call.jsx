import { Ringing, Header, CallArea } from "./";
export default function Call({ call, setCall, callAccepted }) {
  const { receiveingCall } = call;

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-1/2 -translate-y-1/2 w-[350px] h-[550px] z-10 rounded-2xl overflow-hidden callbg">
        {/* Container */}
        <div>
          <div>
            {/* Header */}
            <Header />
            {/* Call area */}
            <CallArea name="riyad salem" />
          </div>
        </div>
      </div>

      {receiveingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} />
      )}
    </>
  );
}
