import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import "./App.css";
import Principal from "./principal.tsx";
import Projetos from "./projetos.tsx";
import Contatos from "./contatos.tsx";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import MeuIcone from "./assets/images/victory-svgrepo-com.svg?react";


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
  const [contatosInView, setContatosInView] = useState(false);
  const [tittleInView, setTitleInView] = useState(false);

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

  useEffect(() => {
    if (!targetContatos.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContatosInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(targetContatos.current);
    return () => observer.disconnect();
  }, []);

  const redirectToPage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={`z-50 bg-[#3e403d] fixed w-full h-13 top-0 pl-7 flex gap-2 right-0 items-center justify-start p-1.5 antialiased border-b border-solid border-[#82fb7e] transition-all ${tittleInView ? "bar-hide" : "bar-show"}`}>
        <p className={`transition-all font-editorial-new-ultralight w-auto text-3xl md:text-[29px] box-border antialiased hover:-skew-x-12 hover:cursor-pointer`} onClick={() => targetPrincipal.current?.scrollIntoView({ behavior: "smooth" })}>
          leonamlucius
        </p>

        <MeuIcone
            fill="#82fb7e"
            className={`w-6 h-6 transition-all mb-1`}
          />
      </div>

      <div
        className={`${contatosInView ? "socialIn" : "socialOut"} transition-all fixed text-[#3e403d] bg-[#82fb7e] flex flex-col md:flex-row items-center z-50 right-2.5 md:right-0 bottom-5 p-2 rounded-full gap-2`}
      >
        <FaLinkedin
          className="text-3xl md:text-4xl cursor-pointer hover:scale-125 transition-all"
          onClick={() =>
            redirectToPage("https://www.linkedin.com/in/leonamlucius/")
          }
        />
        <FaSquareGithub
          className="text-3xl md:text-4xl cursor-pointer hover:scale-125 transition-all"
          onClick={() => redirectToPage("https://github.com/leonamlucius")}
        />
        <MdAlternateEmail
          className="text-3xl md:text-4xl cursor-pointer hover:scale-125 transition-all"
          onClick={() => redirectToPage("mailto:leonam253@gmail.com")}
        />
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full items-center justify-start flex flex-col gap-5"
      >
        <div ref={targetPrincipal} className="w-full">
          <Principal onTitleVisibilityChange={setTitleInView}/>
        </div>
        <div ref={targetProjetos} className="w-full">
          <Projetos />
        </div>
        <div ref={targetContatos} className="w-full">
          <Contatos />
        </div>
      </div>
    </>
  );});

export default Body;
