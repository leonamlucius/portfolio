import { useRef } from "react";
import { FaCircle } from "react-icons/fa";
import "./App.css";
import fotoPerfil from "./assets/images/0d64989794b1a4c9d89bff571d3d5842.jpg";

function Principal() {
  const targetPrincipal = useRef<HTMLDivElement>(null);
  return (
    <>
      <div
        ref={targetPrincipal}
        className="bg-gray-200 w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl"
      >
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921] ">
          <FaCircle />
        </div>

        <div className="w-full h-50 flex items-end  justify-between p-1.5 ">
          <div className="font-robot font-extrabold w-full text-6xl pl-3 pt-4 box-border antialiased">
            leonamlucius
          </div>

          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="w-48 h-48  object-cover mr-4"
          />
        </div>

        <div className="w-full h-90 flex items-start justify-start p-3 box-border antialiased font-robot text-xl indent-3 pt-6">
          Formado em Análise e Desenvolvimento de Sistemas, tenho experiência em desenvolvimento de software, com foco em JavaScript, TypeScript, React e Spring(JAVA) . Sou apaixonado por criar soluções eficientes e inovadoras, sempre buscando aprimorar minhas habilidades e contribuir para projetos desafiadores.
        </div>
      </div>
    </>
  );
}

export default Principal;
