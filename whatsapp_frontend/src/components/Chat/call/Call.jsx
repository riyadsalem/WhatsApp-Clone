import { Ringing } from "./";
export default function Call({ call, setCall, callAccepted }) {
  const { receiveingCall } = call;

  return (
    <div>
      {receiveingCall && !callAccepted && (
        <Ringing call={call} setCall={setCall} />
      )}
    </div>
  );
}
