import { useRef, forwardRef, useImperativeHandle } from "react";
import "./App.css";
import Principal from "./principal.tsx";
import Projetos from "./projetos.tsx";
import Contatos from "./contatos.tsx";

export interface BodyRef {
  scrollToPrincipal: () => void;
  scrollToProjetos: () => void;
  scrollToContatos: () => void;
}

const Body = forwardRef<BodyRef>((props, ref) => {
  const targetPrincipal = useRef<HTMLDivElement>(null);
  const targetProjetos = useRef<HTMLDivElement>(null);
  const targetContatos = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToPrincipal: () => {
      targetPrincipal.current?.scrollIntoView({ behavior: "smooth" });
    },
    scrollToProjetos: () => {
      targetProjetos.current?.scrollIntoView({ behavior: "smooth" });
    },
    scrollToContatos: () => {
      targetContatos.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <>
      <div className="bg-gray-800 w-full items-center justify-start flex flex-col p-1 h-screen overflow-y-auto gap-1">
        <div ref={targetPrincipal} className="w-full">
          <Principal />
        </div>
        <div ref={targetProjetos} className="w-full">
          <Projetos />
        </div>
        <div ref={targetContatos} className="w-full">
          <Contatos />
        </div>
      </div>
    </>
  );
});

export default Body;