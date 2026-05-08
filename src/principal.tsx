import { useRef, useState } from "react";
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
import meuIcone from "./assets/images/victory-svgrepo-com.svg";
import divider from "./assets/images/divider.svg";
import fotoPerfil from "./assets/images/[t×6s]_[1e06b1f3-b8bf-4c4a-a389-857e1b6e85cd]_2026-05-08_16-14-47.png";

function Principal() {
  const targetPrincipal = useRef<HTMLDivElement>(null);
  const [showIcon, setShowIcon] = useState(false);
  const [blackDivRef, blackDivInView] = useInView(0.5);

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
        className="bg-[#FFFFFF] w-full justify-start items-center flex flex-col rounded-3xl"
      >
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921] ">
          <FaCircle />
        </div>

        <div className="w-full h-auto flex items-center  justify-start p-1.5 antialiased ">
          <TypeAnimation
            sequence={["leonamlucius", 400, () => setShowIcon(true)]}
            wrapper="div"
            speed={30}
            className="transition-all tracking-wider font-normal font-domine w-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-4 box-border antialiased hover:scale-[1.02] hover:bg-[#1B1B1D] hover:text-white hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative"
            repeat={0}
            cursor={false}
          />
          <img
            src={meuIcone}
            className={`w-8 h-8 transition-all duration-100 ${showIcon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          />
        </div>

        <div className="relative w-full h-auto flex flex-col  box-border  text-xl pt-6 gap-10 md:flex-row items-center justify-start p-3 md:gap-25">
          <p className="transition-all duration-200 ease-out font-domine m-0 tracking-wider w-full md:w-[60%] text-justify text-base md:text-xl h-auto hover:scale-[1.02] hover:bg-[#1B1B1D] hover:text-white hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative">
            Formado em Análise e Desenvolvimento de Sistemas, tenho experiência
            em desenvolvimento de software, com foco em JavaScript, TypeScript,
            React, Angular, porém, com experiência em Spring(Java) e
            FastAPI(Python). Sou apaixonado por criar soluções eficientes e
            inovadoras, sempre buscando aprimorar minhas habilidades e
            contribuir para projetos desafiadores. Tenho experiência no ramo de
            comércio exterior, porém, sempre busco desenvolver soluções para
            todos os segmentos, com foco em qualidade e eficiência. Estou sempre
            aberto a novas oportunidades e desafios, buscando crescer
            profissionalmente e contribuir para o sucesso de projetos e equipes.
          </p>

          <div className="hidden md:flex self-stretch w-10 overflow-hidden items-center justify-center">
            <div
              className="w-[2000px] h-10 shrink-0 invert brightness-190"
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
            className="flex align-center justify-center md:hidden w-full h-10 invert brightness-190"
            style={{
              backgroundImage: `url(${divider})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "auto 100%",
            }}
          />

          <div
            ref={blackDivRef}
            className={`w-[300px] h-[300px] flex items-center justify-center border-2 border-dotted overflow-clip transition-all duration-200 hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative ${blackDivInView ? "shadow-[-6px_6px_0px_0px_#D71921] z-10" : ""}`}
          >
            <img
              src={fotoPerfil}
              alt="Foto de perfil"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full h-auto flex flex-col  justify-start  items-start p-1.5  box-border antialiased font-robot text-xl">
          <div className="transition-all tracking-wider font-normal font-domine w-auto flex justify-start text-4xl  box-border antialiased">
            <TypeAnimation
              sequence={["minhas stacks", 5500]}
              wrapper="div"
              speed={30}
              className="tracking-wider font-normal font-domine w-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-4 box-border antialiased hover:scale-[1.02] hover:bg-[#1B1B1D] hover:text-white hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative"
              repeat={0}
              cursor={false}
            />
          </div>

          <div
            className="w-full h-auto gap-3 flex items-start justify-start antialiased font-robot text-xl indent-3 pt-6"
            id="divIcons"
          >
            <SiJavascript className="text-4xl text-[#1B1B1D] hover:text-yellow-400 hover: " />
            <SiTypescript className="text-4xl text-[#1B1B1D] hover:text-blue-600" />
            <SiReact className="text-4xl text-[#1B1B1D] hover:text-cyan-400" />
            <SiSpring className="text-4xl text-[#1B1B1D] hover:text-green-600" />
            <SiPython className="text-4xl text-[#1B1B1D] hover:text-yellow-500" />
            <SiMysql className="text-4xl text-[#1B1B1D] hover:text-blue-500" />
            <SiFastapi className="text-4xl text-[#1B1B1D] hover:text-green-500" />
            <SiAngular className="text-4xl text-[#1B1B1D] hover:text-red-600 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;
