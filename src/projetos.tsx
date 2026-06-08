import { useRef, useState, useEffect } from "react";
import "./App.css";
import { FaCircle } from "react-icons/fa";
import { useInView } from "./hooks/useInView";

import imageOmsys from "./assets/images/Captura de tela 2026-05-04 163229.png";
import imageAnote from "./assets/images/Captura de tela 2026-06-07 195950.png";
import imageMono from "./assets/images/Captura de tela 2026-06-08 144638.png";
import { SiJavascript } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";

interface ProjetosProps {
  onTitleVisibilityChange?: (visible: boolean) => void;
  onProjetosVisibilityChange?: (
    visible: boolean,
    aboveViewport: boolean,
  ) => void;
  lang?: "pt" | "en";
}
type Projeto = {
  name: string;
  description: string;
  link: string;
  stacks: React.ReactElement[];
  url: string;
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
      className="fixed inset-0 bg-[#3e403d] flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#3e403d] p-2 w-11/12 md:w-1/2 lg:w-1/3"
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

        {projeto.url && (
          <a
            href={projeto.url}
            className="font-robot text-sm mt-4 inline-block underline"
          >
            ACESSE
          </a>
        )}
      </div>
    </div>
  );
}
function ProjetoCard({
  projeto,
  lang = "pt",
}: {
  projeto: Projeto;
  lang?: "pt" | "en";
}) {
  const [cardRef, cardInView] = useInView(0.3);
  const [modalAberto, setModalAberto] = useState(false);
  return (
    <>
      {modalAberto && (
        <ProjetoModal projeto={projeto} onClose={() => setModalAberto(false)} />
      )}
      <div
        ref={cardRef}
        className={`text-[#82fb7e] h-80 p-7 flex flex-col gap-3 overflow-clip cursor-pointer transition-all duration-200 hover:shadow-[-3px_3px_0px_0px_#82fb7e] hover:z-10 relative ${cardInView ? "shadow-[-3px_3px_0px_0px_#82fb7e] z-10" : ""}`}
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
            className="font-robot text-sm hover:underline"
            onClick={(e) => {
              e.preventDefault();
              setModalAberto(true);
            }}
          >
            {lang === "pt" ? "Ver Projeto" : "View Project"}
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

function Projetos({ lang = "pt", onProjetosVisibilityChange }: ProjetosProps) {
  const targetProjetos = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetProjetos.current || !onProjetosVisibilityChange) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        onProjetosVisibilityChange(
          entry.isIntersecting,
          entry.boundingClientRect.bottom < 0,
        ),
      { threshold: 0 },
    );
    observer.observe(targetProjetos.current);
    return () => observer.disconnect();
  }, [onProjetosVisibilityChange]);
  const projetos: Projeto[] = [
    {
      name: "Painel Operacional/ERP Comex",
      description:
        lang === "pt"
          ? "Painel administrativo com mais de 40 módulos funcionais, incluindo: controle de processos logísticos (cabotagem e rodoviário), emissão de CTes e notas fiscais, faturamentos, fluxo de caixa, contas bancárias, gestão de propostas comerciais, prospecção de clientes, jurídico, controladoria, organograma de equipe, biblioteca de documentos, ouvidoria interna, mural de comunicados e módulo de treinamentos."
          : "Administrative panel with over 40 functional modules, including: logistics process control (cabotage and road freight), CTe and invoice issuance, billing, cash flow, bank accounts, commercial proposal management, customer prospecting, legal, controllership, team org chart, document library, internal ombudsman, announcements board, and training module.",
      link: imageOmsys,
      stacks: [<SiJavascript />, <FaHtml5 />, <FaCss3Alt />],
      url: "",
    },
    {
      name: "anote.",
      description:
        lang === "pt"
          ? "Aplicação de anotações e organização pessoal, com funcionalidades como criação de notas, organização por pastas, marcação de favoritos, compartilhamento de notas e sincronização em tempo real entre dispositivos."
          : "Note-taking and personal organization app, featuring note creation, folder organization, favorites, note sharing, and real-time synchronization across devices.",
      link: imageAnote,
      stacks: [<FaAngular />,<FaCss3Alt /> ,<SiSpring />],
      url: "https://anoto-seven.vercel.app/login",
    },
    {
      name: "Mono",
      description:
        lang === "pt"
          ? "(Em desenvolvimento) Chat bot IA para perguntas, repostas e curiosidades sobre o mundo "
          : "(In development) AI chat bot for questions, answers, and curiosities about the world.",
      link: imageMono,
      stacks: [<FaAngular />,<FaCss3Alt />],
      url: "",
    }
  ];
  return (
    <>
      <div className="bg-transparent w-full  justify-start items-center flex flex-col rounded-3xl overflow-clip">
        <div className="w-full flex items-start pt-3 pl-3 text-[#82fb7e] ">
          <FaCircle />
        </div>

        <div
          ref={targetProjetos}
          className="w-full h-auto flex items-end  justify-start p-1.5 antialiased"
        >
          <div className="border-b-2 border-solid border-[#82fb7e] transition-all font-normal font-editorial-new-ultralight w-auto text-5xl sm:text-5xl md:text-6xl pt-2 box-border antialiased hover:scale-[1.02]">
            {lang === "pt" ? "projetos" : "projects"}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-5 box-border">
          {projetos.map((projeto, index) => (
            <ProjetoCard key={index} projeto={projeto} lang={lang} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projetos;
