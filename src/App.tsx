import { useRef } from "react";
import Body, { BodyRef } from "./body.tsx";

function App() {
  const bodyRef = useRef<BodyRef>(null);


  return (
    <div className="bg-black flex p-4">
      {/* <SideBar bodyRef={bodyRef} activeSection={activeSection} /> */}
      <Body ref={bodyRef}/>
    </div>
  );
}

export default App;
