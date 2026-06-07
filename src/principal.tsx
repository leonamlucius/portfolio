import { useRef, useState, useEffect } from "react";
import { useInView } from "./hooks/useInView";
import { FaCircle } from "react-icons/fa";
import "./App.css";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSpring,
  SiPython,
  SiMysql,
  SiFastapi,
  SiAngular,
} from "react-icons/si";
// import fotoPerfil from "./assets/images/tuff-baby-ai-baby.gif";
import { TypeAnimation } from "react-type-animation";
import MeuIcone from "./assets/images/victory-svgrepo-com.svg?react";
import divider from "./assets/images/divider.png";
import fotoPerfil from "./assets/images/crt.png";
import { RiTailwindCssFill } from "react-icons/ri";

interface PrincipalProps {
  onTitleVisibilityChange?: (visible: boolean) => void;
  onStacksVisibilityChange?: (visible: boolean, aboveViewport: boolean) => void;
  lang?: "pt" | "en";
}
function Principal({
  onTitleVisibilityChange,
  onStacksVisibilityChange,
  lang = "pt",
}: PrincipalProps) {
  const targetPrincipal = useRef<HTMLDivElement>(null);
  const [showIcon, setShowIcon] = useState(false);
  const [blackDivRef] = useInView(0.5);
  const targetTitle = useRef<HTMLDivElement>(null);
  const targetStacks = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetTitle.current || !onTitleVisibilityChange) return;
    const observer = new IntersectionObserver(
      ([entry]) => onTitleVisibilityChange(entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(targetTitle.current);
    return () => observer.disconnect();
  }, [onTitleVisibilityChange]);

  useEffect(() => {
    if (!targetStacks.current || !onStacksVisibilityChange) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        onStacksVisibilityChange(
          entry.isIntersecting,
          entry.boundingClientRect.bottom < 0,
        ),
      { threshold: 0 },
    );
    observer.observe(targetStacks.current);
    return () => observer.disconnect();
  }, [onStacksVisibilityChange]);

  const divIcons = document.getElementById("divIcons");

  const icons = divIcons?.querySelectorAll("svg");

  icons?.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.classList.add("transition-all");
      icon.classList.add("text-[45px]");

      icons?.forEach((otherIcon) => {
        if (otherIcon != icon) {
          otherIcon.classList.add("opacity-50");
        }
      });
    });

    icon.addEventListener("mouseout", () => {
      icon.classList.remove("text-[45px]");

      icons?.forEach((otherIcon) => {
        if (otherIcon != icon) {
          otherIcon.classList.remove("opacity-50");
        }
      });
    });
  });
  return (
    <>
      <div
        ref={targetPrincipal}
        className="bg-[#3e403d] w-full justify-start items-center flex flex-col rounded-3xl"
      >
        <div className="w-full flex items-start pt-3 pl-3 text-[#82fb7e] ">
          <FaCircle />
        </div>

        <div
          ref={targetTitle}
          className="w-full h-auto flex items-center  justify-start p-1.5 antialiased "
        >
          <TypeAnimation
            sequence={["leonamlucius", 400, () => setShowIcon(true)]}
            wrapper="div"
            speed={30}
            className="border-b-2 border-solid border-[#82fb7e] transition-all font-editorial-new-ultralight w-auto text-5xl sm:text-5xl md:text-6xl lg:text-7xl pt-4 box-border antialiased hover:scale-[1.02]"
            repeat={0}
            cursor={false}
          />
          <MeuIcone
            fill="#82fb7e"
            className={`w-8 h-8 transition-all duration-100 ${showIcon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          />
        </div>

        <div className="w-full h-auto flex flex-col-reverse  box-border text-xl  gap-1 md:flex-row items-center justify-start p-2 md:gap-4">
          <p className="font-light slide-in-left transition-all duration-200 ease-out font-domine m-0 w-full md:w-[70%] text-justify text-base md:text-xl h-auto">
            {lang === "pt"
              ? "Formado em Análise e Desenvolvimento de Sistemas, tenho experiência em desenvolvimento de software, com foco em JavaScript, TypeScript, React, Angular, porém, com experiência em Spring(Java) e FastAPI(Python). Sou apaixonado por criar soluções eficientes e inovadoras, sempre buscando aprimorar minhas habilidades e contribuir para projetos desafiadores. Tenho experiência no ramo de comércio exterior, porém, sempre busco desenvolver soluções para todos os segmentos, com foco em qualidade e eficiência. Estou sempre aberto a novas oportunidades e desafios, buscando crescer profissionalmente e contribuir para o sucesso de projetos e equipes."
              : "Graduated in Systems Analysis and Development, I have experience in software development with a focus on JavaScript, TypeScript, React, and Angular, as well as Spring (Java) and FastAPI (Python). I'm passionate about building efficient and innovative solutions, always looking to sharpen my skills and contribute to challenging projects. I have a background in foreign trade, but I'm always seeking to develop solutions across all industries, with a focus on quality and efficiency. I'm always open to new opportunities and challenges, aiming to grow professionally and contribute to the success of projects and teams."}
          </p>

          <div className="hidden md:flex self-stretch w-10 overflow-hidden items-center justify-center">
            <div
              className="w-[2000px] h-10 shrink-0"
              style={{
                backgroundImage: `url(${divider})`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 100%",
                transform: "rotate(90deg)",
              }}
            />
          </div>

          {/* visível só no mobile (flex-col) */}
          <div
            className="flex align-center justify-center md:hidden w-full h-10"
            style={{
              backgroundImage: `url(${divider})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
          />

          <div
            ref={blackDivRef}
            className={`w-[300px] h-[300px] flex items-center justify-center overflow-clip transition-all`}
          >
            <img
              src={fotoPerfil}
              alt={lang === "pt" ? "Foto de perfil" : "Profile picture"}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div
          ref={targetStacks}
          className="w-full h-auto flex flex-col  justify-start  items-start p-1.5  box-border antialiased font-robot text-xl"
        >
          <div className="transition-all font-normal w-auto flex justify-start text-4xl  box-border antialiased">
            <TypeAnimation
              sequence={[lang === "pt" ? "minhas stacks" : "my stacks", 5500]}
              wrapper="div"
              speed={30}
              className="border-b-2 border-solid border-[#82fb7e] transition-all font-normal font-editorial-new-ultralight w-auto text-5xl sm:text-5xl md:text-7xl lg:text-7xl pt-2 box-border antialiased hover:scale-[1.02]"
              repeat={0}
              cursor={false}
            />
          </div>

          <div
            className=" slide-in-left w-full h-auto gap-3 flex items-start justify-start antialiased font-robot text-xl indent-3 pt-6"
            id="divIcons"
          >
            <SiJavascript className="text-4xl text-[#82fb7e] hover:text-yellow-400 hover:cursor-none " title="JavaScript" />
            <SiTypescript className="text-4xl text-[#82fb7e] hover:text-blue-600 hover:cursor-none" title="TypeScript" />
            <RiTailwindCssFill className="text-4xl text-[#82fb7e] hover:text-sky-400 hover:cursor-none" title="Tailwind CSS" />
            <SiReact className="text-4xl text-[#82fb7e] hover:text-cyan-400 hover:cursor-none" title="React" />
            <SiSpring className="text-4xl text-[#82fb7e] hover:text-green-600 hover:cursor-none" title="Spring" />
            <SiPython className="text-4xl text-[#82fb7e] hover:text-yellow-500 hover:cursor-none" title="Python" />
            <SiMysql className="text-4xl text-[#82fb7e] hover:text-blue-500 hover:cursor-none" title="MySQL" />
            <SiFastapi className="text-4xl text-[#82fb7e] hover:text-green-500 hover:cursor-none" title="FastAPI" />
            <SiAngular className="text-4xl text-[#82fb7e] hover:text-red-600 hover:cursor-none" title="Angular" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;
