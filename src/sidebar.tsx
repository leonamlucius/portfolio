import "./App.css";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";
import { BodyRef } from "./body.tsx";

const menuItems = [
  { id: "principal", name: "principal", icon: <FaInfoCircle /> },
  { id: "projetos", name: "projetos", icon: <FaBriefcase /> },
  { id: "contatos", name: "contatos", icon: <BsFillTelephoneFill /> },
];

interface SideBarProps {
  bodyRef: React.RefObject<BodyRef>;
}

function sideBar({ bodyRef }: SideBarProps) {
  const [activeItem, setActiveItem] = useState("principal");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    
    // Fazer scroll para o elemento correspondente
    switch (itemId) {
      case "principal":
        bodyRef.current?.scrollToPrincipal();
        break;
      case "projetos":
        bodyRef.current?.scrollToProjetos();
        break;
      case "contatos":
        bodyRef.current?.scrollToContatos();
        break;
    }
  };

  return (
    <>
      <div className="bg-white text-white w-60 h-auto flex flex-col items-start justify-start p-2.5 box-border gap-2 font-semibold rounded-3xl">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`font-robot tracking-wider  sidebar-item flex items-center gap-3 p-2 font-noraml justify-center w-full rounded-3xl transition hover:-translate-y-1 cursor-pointer  
            ${
              activeItem === item.id
                ? "bg-gray-300 text-black  italic"
                : "bg-[#1B1B1D]"
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <span>{item.name}</span>
          </li>
        ))}
      </div>
    </>
  );
}

export default sideBar;