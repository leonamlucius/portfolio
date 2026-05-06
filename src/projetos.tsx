import "./App.css";
import { FaCircle } from "react-icons/fa";

import imageOmsys from "./assets/images/Captura de tela 2026-05-04 163229.png";
function Projetos() {
  const projetos = [
    {
      name: "OMSYS",
      description:
        "Painel administrativo com mais de 40 módulos funcionais, incluindo: controle de processos logísticos (cabotagem e rodoviário), emissão de CTes e notas fiscais, faturamentos, fluxo de caixa, contas bancárias, gestão de propostas comerciais, prospecção de clientes, jurídico, controladoria, organograma de equipe, biblioteca de documentos, ouvidoria interna, mural de comunicados e módulo de treinamentos.",
      link: imageOmsys,
    },
    {
      name: "",
      description: "",
      link: "",
    },
    {
      name: "",
      description: "",
      link: "",
    },
    {
      name: "",
      description: "",
      link: "",
    },
    {
      name: "",
      description: "",
      link: "",
    },
    {
      name: "",
      description: "",
      link: "",
    },
  ];
  return (
    <>
      <div className="bg-[#FFFFFF] w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl overflow-clip">
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921]">
          <FaCircle />
        </div>

        <div className="w-full h-auto flex items-end  justify-start p-1.5 antialiased">
          <div className="transition-all tracking-wider font-normal font-domine w-auto text-4xl sm:text-5xl md:text-6xl pt-4 box-border antialiased hover:scale-[1.02] hover:bg-[#1B1B1D] hover:text-white hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative">
            projetos
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-5 box-border">
          {projetos.map((projeto) => (
            <div className="bg-[#000000] text-white h-80 p-7 flex flex-col gap-3 overflow-clip cursor-pointer transition-all duration-200 hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative">
              <h2 className="font-robot tracking-wider italic text-2xl font-light">
                {projeto.name}
              </h2>
              <p className="font-robot text-base h-40 overflow-hidden">
                {projeto.description}
              </p>
              {projeto.link && (
                <a
                  href={projeto.link}
                  className="text-[#D71921] font-robot text-sm hover:underline"
                >
                  Ver Projeto
                </a>
              )}
              {projeto.link && (
                <img
                  src={projeto.link}
                  alt={projeto.name}
                  className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-20"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projetos;
