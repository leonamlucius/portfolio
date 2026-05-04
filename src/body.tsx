import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import "./App.css";
import Principal from "./principal.tsx";
import Projetos from "./projetos.tsx";
import Contatos from "./contatos.tsx";

export interface BodyRef {
  scrollToPrincipal: () => void;
  scrollToProjetos: () => void;
  scrollToContatos: () => void;
}

interface BodyProps {
  onSectionChange?: (section: string) => void;
}

const Body = forwardRef<BodyRef, BodyProps>(({ onSectionChange }, ref) => {
  const targetPrincipal = useRef<HTMLDivElement>(null);
  const targetProjetos = useRef<HTMLDivElement>(null);
  const targetContatos = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!onSectionChange) return;

    const sections = [
      { ref: targetPrincipal, id: "principal" },
      { ref: targetProjetos, id: "projetos" },
      { ref: targetContatos, id: "contatos" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target,
            );
            if (section) onSectionChange(section.id);
          }
        });
      },
      { root: scrollContainerRef.current, threshold: 0.3 },
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <>
      <div
        ref={scrollContainerRef}
        className=" w-full items-center justify-start flex flex-col p-1 h-screen overflow-y-auto gap-1"
      >
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
