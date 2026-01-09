import { useRef } from "react";
import Body, { BodyRef } from "./body.tsx";
import SideBar from "./sidebar.tsx";

function App() {
  const bodyRef = useRef<BodyRef>(null);

  return (
    <div className="bg-gray-800 flex">
      <SideBar bodyRef={bodyRef} />
      <Body ref={bodyRef} />
    </div>
  );
}

export default App;
