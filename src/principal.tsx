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
  SiFastapi
} from "react-icons/si";
import fotoPerfil from "./assets/images/0d64989794b1a4c9d89bff571d3d5842.jpg";

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
        }}
      );

      
    });

    icon.addEventListener("mouseout", () => {
      icon.classList.remove("text-[45px]");

      icons?.forEach((otherIcon) => {
        if (otherIcon != icon) {
          otherIcon.classList.remove("opacity-50");
        }}
      );
    });
  });
  return (
    <>
      <div
        ref={targetPrincipal}
        className="bg-gray-200 w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl"
      >
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921] ">
          <FaCircle />
        </div>

        <div className="w-full h-50 flex items-end  justify-between p-1.5">
          <div className="font-robot font-extrabold w-full text-6xl pl-3 pt-4 box-border antialiased  hover:text-[65px] transition-all duration-300 cursor-pointer">
            leonamlucius
          </div>

          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="w-48 h-48  object-cover mr-4"
          />
        </div>

        <div className="w-full h-auto flex items-start justify-start p-3 box-border antialiased font-robot text-xl indent-3 pt-6 hover:text-[20.5px] transition-all duration-300 cursor-pointer">
          Formado em Análise e Desenvolvimento de Sistemas, tenho experiência em
          desenvolvimento de software, com foco em JavaScript, TypeScript, React, porém,
          com experiência em Spring(Java) e FastAPI(Python). Sou apaixonado por criar soluções eficientes e
          inovadoras, sempre buscando aprimorar minhas habilidades e contribuir
          para projetos desafiadores.
        </div>

        <div className="w-full h-auto flex flex-col items-center justify-start p-3 box-border antialiased font-robot text-xl">
          <div className="font-robot font-extrabold w-full text-3xl box-border antialiased">
            Minhas stacks
          </div>

          <div className="w-full h-auto gap-2 flex items-start justify-start antialiased font-robot text-xl indent-3 pt-6" id="divIcons">
            <SiJavascript className="text-4xl text-yellow-400" />
            <SiTypescript className="text-4xl text-blue-600" />
            <SiReact className="text-4xl text-cyan-400" />
            <SiSpring className="text-4xl text-green-600" />
            <SiPython className="text-4xl text-yellow-500" />
            <SiMysql className="text-4xl text-blue-500" />
            <SiFastapi className="text-4xl text-green-500" />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;
