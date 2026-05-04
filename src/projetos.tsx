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
      name: "Projeto 2",
      description: "Descrição do projeto 2",
      link: "",
    },
    {
      name: "Projeto 3",
      description: "Descrição do projeto 3",
      link: "",
    },
    {
      name: "Projeto 4",
      description: "Descrição do projeto 4",
      link: "",
    },
    {
      name: "Projeto 5",
      description: "Descrição do projeto 5",
      link: "",
    },
    {
      name: "Projeto 6",
      description: "Descrição do projeto 6",
      link: "",
    },
  ];
  return (
    <>
      <div className="bg-white w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl">
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921]">
          <FaCircle />
        </div>

        <div className="w-full h-50 flex items-end  justify-between p-1.5 ">
          <div className="font-bitcount  w-full text-6xl box-border antialiased  hover:text-[65px] transition-all duration-300 cursor-pointer">
            Projetos
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full p-5 box-border">
          {projetos.map((projeto) => (
            <div className="bg-[#1B1B1D] text-white h-80 p-7 rounded-3xl flex flex-col gap-3 overflow-clip hover: cursor-pointer relative">
              <h2 className="font-bitcount text-2xl">{projeto.name}</h2>
              <p className="font-robot text-base h-40 overflow-hidden">
                {projeto.description}
              </p>
              <a
                href={projeto.link}
                className="text-[#D71921] font-robot text-sm hover:underline"
              >
                Ver Projeto
              </a>
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
