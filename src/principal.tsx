import { useRef } from "react";
import "./App.css";

function Principal() {

    const targetPrincipal = useRef<HTMLDivElement>(null);
  return <>

  

    <div ref={targetPrincipal} className="bg-gray-200 w-full min-h-screen  justify-center items-center flex rounded-3xl">
      Principal
    </div>
  </>;
}

export default Principal;
