import "./App.css";
import { FaInfoCircle } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const menuItems = [
  { id: "principal", name: "Principal", icon: <FaInfoCircle /> },
  { id: "projetos", name: "Projetos", icon: <FaBriefcase /> },
  { id: "contatos", name: "Contatos", icon: <BsFillTelephoneFill /> },
];

function sideBar() {
  const [activeItem, setActiveItem] = useState("principal");

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };
  return (
    <>
      <div className="bg-gray-900 text-white w-60 flex flex-col items-start justify-start p-2.5 box-border gap-2">
        {menuItems.map(
          (item) => (
            item.id === "pricicpal" ? handleItemClick(item.id) : "",
            (
              <li
                key={item.id}
                className={`sidebar-item flex items-center gap-5 p-2 justify-start w-full rounded-md hover:bg-gray-700 cursor-pointer active:bg-gray-100
        ${
          activeItem === item.id
            ? "bg-gray-200 text-amber-700"
            : "bg-gray-800 hover:bg-gray-700"
        }`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.icon}
                <span>{item.name}</span>
              </li>
            )
          )
        )}
      </div>
    </>
  );
}

export default sideBar;
