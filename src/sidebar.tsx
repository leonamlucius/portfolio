import "./App.css";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BodyRef } from "./body.tsx";
import { useState, useEffect } from "react";

const menuItems = [
  { id: "principal", name: "principal", icon: <FaInfoCircle /> },
  { id: "projetos", name: "projetos", icon: <FaBriefcase /> },
  { id: "contatos", name: "contatos", icon: <BsFillTelephoneFill /> },
];

interface SideBarProps {
  bodyRef: React.RefObject<BodyRef>;
  activeSection: string;
}

const name = "leonamlucius";

function sideBar({ bodyRef, activeSection }: SideBarProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const emoticons = [
    ";)",
    ":0",
    ";(",
    "B-)",
    ">:)",
    ":D",
    ":'(",
    ":P",
    "O.O",
    ">:(",
    "<3",
    ">:o",
    ":3",
    "T_T",
    "^-^",
    "O/",
    "\\o",
    "o.O",
    ">:o",
    ":|",
    ":]",
    ":[",
    ":>",
    ":<",
  ];
  const [emojiIndex, setEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % name.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeSection !== "principal") return;
    const interval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % emoticons.length);
    }, 800);
    return () => clearInterval(interval);
  }, [activeSection]);

  const clickToprincipal = () => {
    bodyRef.current?.scrollToPrincipal();
  };
  const handleItemClick = (itemId: string) => {
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
      <div className="bg-white text-white w-70 h-auto flex flex-col items-start justify-between p-2.5 box-border gap-2 font-semibold rounded-3xl">
        <div className="flex flex-col items-start gap-2 w-full">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`font-robot tracking-wider  sidebar-item flex items-center gap-3 p-2 font-noraml justify-center w-full rounded-3xl transition hover:-translate-y-1 cursor-pointer  
            ${
              activeSection === item.id
                ? "bg-transparent text-black  italic border-2 border-[#76757A] border-dotted"
                : "bg-[#1B1B1D]"
            }`}
              onClick={() => handleItemClick(item.id)}
            >
              <span>{item.name}</span>
            </li>
          ))}
        </div>

        <div className="w-full">
            <hr className="w-full border-t-2 border-[#1B1B1D] border-dotted " />

            <div className="w-full flex items-center justify-center gap-2 p-5 box-border">
              {activeSection !== "principal" ? (
                <p className="font-bitcount text-black w-full text-[24px] box-border antialiased font-normal whitespace-nowrap">
                  {name.split("").map((letra, index) => (
                    <span
                      key={index}
                      className={`inline-block font-bitcount text-[24px] transition-all duration-200 hover: cursor-pointer ${
                        activeIndex === index ? "scale-90" : "text-black"
                      }`}
                      onClick={clickToprincipal}
                    >
                      {activeIndex === index
                        ? letra.toUpperCase()
                        : letra.toLowerCase()}
                    </span>
                  ))}
                </p>
              ) : (
                <span className="font-bitcount text-black text-[24px] transition-all duration-300">
                  {emoticons[emojiIndex]}
                </span>
              )}
            </div>
        </div>
      </div>
    </>
  );
}

export default sideBar;
