import "./App.css";
import { FaCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import qrCodeGit from "./assets/images/github.jpg";
import qrCodeLink from "./assets/images/linkedin.jpg";

function Contatos() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full min-h-screen  justify-start items-center flex flex-col rounded-3xl">
        <div className="w-full flex items-start pt-3 pl-3 text-[#D71921]">
          <FaCircle />
        </div>

        <div className="w-full h-auto flex items-end  justify-start p-1.5 antialiased">
          <div className="transition-all tracking-wider font-normal font-domine w-auto text-6xl  pt-4 box-border antialiased hover:scale-[1.02] hover:bg-[#1B1B1D] hover:text-white hover:shadow-[-6px_6px_0px_0px_#D71921] hover:z-10 relative">
            contatos
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 w-full p-1.5 mt-5">
          <div
            className="flex items-center justify-space gap-7  w-full"
            id="divIcons"
          >
            <FaLinkedin className="text-6xl text-black" />
            <a
              className=" w-[205px] no-underline font-robot tracking-wider text-black text-3xl font-normal italic transition-all hover:underline hover:decoration-dotted"
              href="https://www.linkedin.com/in/leonamlucius/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <img
              src={qrCodeLink}
              alt="GitHub"
              className="w-33 h-33 object-cover object-center"
              loading="lazy"
              style={{ imageRendering: "auto" }}
            />
          </div>

          <div
            className="flex items-center justify-start gap-7  w-full"
            id="divIcons"
          >
            <FaSquareGithub className="text-6xl text-black" />
            <a
              className="w-[205px] no-underline font-robot tracking-wider text-black text-3xl font-normal italic transition-all hover:underline hover:decoration-dotted"
              href="https://github.com/leonamlucius"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <img
              src={qrCodeGit}
              alt="GitHub"
              className="w-33 h-33 object-cover object-center"
              loading="lazy"
              style={{ imageRendering: "auto" }}
            />
          </div>

          <div
            className="flex items-center justify-start gap-7   w-full"
            id="divIcons"
          >
            <MdAlternateEmail className="text-6xl text-black" />
            <a
              className="w-[205px] no-underline font-robot tracking-wider text-black text-3xl font-normal italic transition-all hover:underline hover:decoration-dotted"
              href="mailto:leonam253@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contatos;
