import { useState } from "react";
import "./App.css";
import { FaCircle } from "react-icons/fa";
import { useInView } from "./hooks/useInView";

import imageOmsys from "./assets/images/Captura de tela 2026-05-04 163229.png";
import imageAnote from "./assets/images/Captura de tela 2026-05-15 122816.png";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

type Projeto = {
  name: string;
  description: string;
  link: string;
  stacks: React.ReactElement[];
};
function ProjetoModal({
  projeto,
  onClose,
}: {
  projeto: Projeto;
  onClose: () => void;
}) {
  console.log(projeto);
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-2 w-11/12 md:w-1/2 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-end ">
          <button
            onClick={onClose}
            className="text-2xl text-[#D71921] transition-all hover:cursor-pointer hover:scale-110"
          >
            <FaRegWindowClose />
          </button>
        </div>
        <h2 className="font-robot tracking-wider italic text-2xl font-light">
          {projeto.name}
        </h2>

        {projeto.link && (
          <img
            src={projeto.link}
            alt={projeto.name}
            className="w-full mt-4 object-cover max-h-64"
          />
        )}

        <p className="font-robot text-sm mt-4">{projeto.description}</p>
      </div>
    </div>
  );
}
function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const [cardRef, cardInView] = useInView(0.3);
  const [modalAberto, setModalAberto] = useState(false);
  return (
    <>
      {modalAberto && (
        <ProjetoModal projeto={projeto} onClose={() => setModalAberto(false)} />
      )}
      <div
        ref={cardRef}
        className={`bg-[#82fb7e] text-white h-80 p-7 flex flex-col gap-3 overflow-clip cursor-pointer transition-all duration-200 hover:shadow-[-3px_3px_0px_0px_#82fb7e] hover:z-10 relative ${cardInView ? "shadow-[-3px_3px_0px_0px_#82fb7e] z-10" : ""}`}
      >
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
            onClick={(e) => {
              e.preventDefault();
              setModalAberto(true);
            }}
          >
            Ver Projeto
          </a>
        )}
        {projeto.link && (
          <img
            src={projeto.link}
            alt={projeto.name}
            className="absolute w-full h-full object-cover object-center top-0 left-0 opacity-20 pointer-events-none"
          />
        )}
        <div className="w-ful flex items-center justify-end gap-2 mt-auto">
          {projeto.stacks.map((stack, index) => (
            <span key={index} className="text-2xl">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function Projetos() {
  const projetos = [
    {
      name: "OMSYS",
      description:
        "Painel administrativo com mais de 40 módulos funcionais, incluindo: controle de processos logísticos (cabotagem e rodoviário), emissão de CTes e notas fiscais, faturamentos, fluxo de caixa, contas bancárias, gestão de propostas comerciais, prospecção de clientes, jurídico, controladoria, organograma de equipe, biblioteca de documentos, ouvidoria interna, mural de comunicados e módulo de treinamentos.",
      link: imageOmsys,
      stacks: [<SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
    },
    {
      name: "anote.",
      description:
        "(Em desenvolvimento) Aplicação de anotações e organização pessoal, com funcionalidades como criação de notas, organização por pastas, marcação de favoritos, compartilhamento de notas e sincronização em tempo real entre dispositivos.",
      link: imageAnote,
      stacks: [<FaAngular />],
    },
  ];
  return (
    <>
      <div className="bg-[#FFFFFF] w-full  justify-start items-center flex flex-col rounded-3xl overflow-clip">
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921]">
          <FaCircle />
        </div>

        <div className="w-full h-auto flex items-end  justify-start p-1.5 antialiased">
          <div className="transition-all font-normal font-editorial-new-ultralight w-auto text-5xl sm:text-5xl md:text-6xl pt-2 box-border antialiased hover:scale-[1.02] hover:bg-[#1B1B1D] hover:text-white hover:shadow-[-3px_3px_0px_0px_#82fb7e] hover:z-10 relative">
            projetos
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-5 box-border">
          {projetos.map((projeto, index) => (
            <ProjetoCard key={index} projeto={projeto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projetos;
