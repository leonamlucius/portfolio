import "./App.css";
import { FaCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

function Contatos() {
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl">
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921]">
          <FaCircle />
        </div>

        <div className="w-full h-50 flex items-end  justify-between p-1.5 ">
          <div className="font-robot font-extrabold w-full text-6xl pl-3 pt-4 box-border antialiased  hover:text-[65px] transition-all duration-300 cursor-pointer">
            Contatos
          </div>

          

        </div>

        <div className="flex flex-col items-start gap-3 w-full p-1.5 mt-5">
            <div className="flex items-center justify-start gap-3  w-full" id="divIcons">
              <FaLinkedin className="text-4xl text-blue-600" />
              <a href="https://www.linkedin.com/in/leonamlucius/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div className="flex items-center justify-start gap-3  w-full" id="divIcons">
              <FaSquareGithub className="text-4xl text-gray-800" />
              <a href="https://github.com/leonamlucius" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>


            <div className="flex items-center justify-start gap-3   w-full" id="divIcons">
              <MdAlternateEmail className="text-4xl text-red-600" />
              <a  href="mailto:leonam253@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>

          </div>
      </div>
    </>
  );
}

export default Contatos;
