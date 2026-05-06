import { useRef, useState } from "react";
import Body, { BodyRef } from "./body.tsx";
import SideBar from "./sidebar.tsx";

function App() {
  const bodyRef = useRef<BodyRef>(null);
  const [activeSection, setActiveSection] = useState("principal");

  return (
    <div className="bg-black flex p-4">
      {/* <SideBar bodyRef={bodyRef} activeSection={activeSection} /> */}
      <Body ref={bodyRef} onSectionChange={setActiveSection} />
    </div>
  );
}

export default App;
