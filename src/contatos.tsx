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
      <div className="bg-[#3e403d] w-full  justify-start items-center flex flex-col rounded-3xl">
        <div className="w-full flex items-start pt-3 pl-3 text-[#82fb7e]">
          <FaCircle />
        </div>

        <div className="w-full h-auto flex items-end  justify-start p-1.5 antialiased">
          <div className="transition-all font-normal font-editorial-new-ultralight w-auto text-5xl sm:text-5xl md:text-6xl pt-2 box-border antialiased hover:scale-[1.02] hover:shadow-[-3px_3px_0px_0px_#82fb7e] hover:z-10 relative">
            contatos
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-3 w-full p-1.5 mt-5">
          <div
            className="h-auto w-full flex items-center justify-space gap-7 md:h-40"
            id="divIcons"
          >
            <FaLinkedin className="text-4xl md:text-6xl text-[#82fb7e]" />
            <a
              className="w-auto no-underline font-robot tracking-wider text-[#82fb7e] text-xl md:text-3xl font-normal italic transition-all hover:underline hover:decoration-dotted"
              href="https://www.linkedin.com/in/leonamlucius/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <img
              src={qrCodeLink}
              alt="GitHub"
              className="hidden sm:block w-24 h-24 md:w-33 md:h-33 object-cover object-center"
              loading="lazy"
              style={{ imageRendering: "auto" }}
            />
          </div>

          <div
            className="h-auto w-full flex items-center justify-space gap-7 md:h-40"
            id="divIcons"
          >
            <FaSquareGithub className="text-4xl md:text-6xl text-[#82fb7e]" />
            <a
              className="w-auto no-underline font-robot tracking-wider text-[#82fb7e] text-xl md:text-3xl font-normal italic transition-all hover:underline hover:decoration-dotted"
              href="https://github.com/leonamlucius"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <img
              src={qrCodeGit}
              alt="GitHub"
              className="hidden sm:block w-24 h-24 md:w-33 md:h-33 object-cover object-center"
              loading="lazy"
              style={{ imageRendering: "auto" }}
            />
          </div>

          <div
            className="h-auto w-full flex items-center justify-space gap-7 md:h-40"
            id="divIcons"
          >
            <MdAlternateEmail className="text-4xl md:text-6xl text-[#82fb7e]" />
            <a
              className="w-auto no-underline font-robot tracking-wider text-[#82fb7e] text-xl md:text-3xl font-normal italic transition-all hover:underline hover:decoration-dotted"
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
