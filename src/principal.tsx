import { useRef } from "react";
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
import fotoPerfil from "./assets/images/IMG_20260424_083949.jpg";
import { TypeAnimation } from "react-type-animation";

function Principal() {
  const targetPrincipal = useRef<HTMLDivElement>(null);

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
        className="bg-white w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl"
      >
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921] ">
          <FaCircle />
        </div>

        <div className="w-full h-50 flex items-end  justify-between p-1.5 antialiased ">
          <TypeAnimation
            sequence={["leonamlucius", 5500]}
            wrapper="div"
            speed={30}
            className="font-bitcount w-full text-6xl pl-3 pt-4 box-border antialiased hover:text-[63px] transition-all duration-200 cursor-pointer"
            repeat={0}
            
          />

          <div className="w-44 h-44 rounded-full overflow-hidden shadow-lg aspect-square flex items-center justify-center">
            <img
              src={fotoPerfil}
              alt="Foto de Perfil"
              className="min-w-full min-h-full object-cover object-center"
              loading="lazy"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>

        <div className="w-full h-auto flex items-start justify-start p-3 box-border antialiased font-robot text-xl indent-3 pt-6 hover:text-[20.5px] transition-all duration-300 cursor-pointer">
          <p className="m-0 font-semibold">
            Formado em Análise e Desenvolvimento de Sistemas, tenho experiência
            em desenvolvimento de software, com foco em JavaScript, TypeScript,
            React, porém, com experiência em Spring(Java) e FastAPI(Python). Sou
            apaixonado por criar soluções eficientes e inovadoras, sempre
            buscando aprimorar minhas habilidades e contribuir para projetos
            desafiadores. Tenho experiência no ramo de comércio exterior, porém,
            sempre busco desenvolver soluções paraa todos os segmentos, com foco
            em qualidade e eficiência. Estou sempre aberto a novas oportunidades
            e desafios, buscando crescer profissionalmente e contribuir para o
            sucesso de projetos e equipes.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col items-center justify-start p-3 box-border antialiased font-robot text-xl">
          <div className="font-bitcount font-normal w-full text-3xl box-border antialiased">
            Minhas stacks
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
