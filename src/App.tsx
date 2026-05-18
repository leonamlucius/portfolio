import { useRef } from "react";
import Body, { BodyRef } from "./body.tsx";

function App() {
  const bodyRef = useRef<BodyRef>(null);

  return (
    <div className="bg-[#3e403d] flex p-1 sm:p-2 md:p-3 min-h-screen">
      {/* <SideBar bodyRef={bodyRef} activeSection={activeSection} /> */}
      <Body ref={bodyRef} />
    </div>
  );
}

export default App;
