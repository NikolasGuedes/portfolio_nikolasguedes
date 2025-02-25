import Foto_Perfil from "../img/foto_perfil.png";
import Elipse_01 from "../img/Ellipse_01.png";
import Elipse_02 from "../img/Ellipse_02.png";
import Aurora from "./ui/Aurora/Aurora";
import { MorphingText } from "./ui/morphing-text";

const texts = [
  "UI/UX DESIGNER",
  "GAME DEVELOPER",
  "WEB DEVELOPER",
  "FRONT-END DEVELOPER",
];

function MainSection() {
  return (
    <section className="bg-[var(--Cinzabase)] w-full h-screen 3xl:h-[80rem] container mx-auto px-0 py-28">
      <div className="-z-10 fixed top-0 left-0 w-full h-full">
        <img
          src={Elipse_01}
          alt="Elipse 01"
          className="fixed -top-96 -left-96 w-[2000px] h-[2000px]"
        />
        <img
          src={Elipse_02}
          alt="Elipse 02"
          className="fixed -bottom-72 -right-60 w-[1500px] h-[1500px]"
        />
        <Aurora
          colorStops={["#1D00FF", "#6A00FF", "#1D00FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.7}
        />
      </div>

      <div className="-z-10 fixed top-0 left-0 w-full h-full bg-clip-padding backdrop-filter bg-black backdrop-blur-lg bg-opacity-50 ">
        {" "}
      </div>

      <div className="flex flex-row items-center justify-start w-full h-full gap-x-2">
        <div className="flex flex-col w-[30%] h-full border border-white rounded-3xl justify-start items-center bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <div className="w-full h-[5em] bg-white rounded-t-2xl flex flex-col items-center justify-center px-5">
            <p className="text-black font-black text-xl">NIKOLAS GUEDES</p>
          </div>
          <div className="flex flex-col justify-between p-4 items-center w-full h-full">
            <div className="flex flex-col justify-center gap-y-2 items-center w-full h-full">
              <img
                src={Foto_Perfil}
                alt="Foto Perfil"
                className="flex items-center w-fit h-[10em] cursor-pointer py-2"
              />
              <p className="px-4 py-2 border border-white rounded-3xl">
                front-end developer
              </p>
              <p className="px-4 mt-4 self-start">Based in:</p>
              <p className="px-4 self-start">SÃO PAULO - BRAZIL</p>
            </div>
            <div className="flex flex-col justify-center gap-y-2 items-center w-full h-full">
              <p className="px-4 py-2 mt-8 mb-4 border bg-white text-black border-white rounded-3xl">
                Contact Me!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[70%] px-10 h-full gap-y-8 justify-between items-center">
          <div className="flex flex-col justify-start gap-y-4 items-center w-full h-full">
            <div className="flex flex-col gap-y-4 items-start w-full h-min ">
              <p className="px-4 py-2 border self-start border-white rounded-3xl">
                I'm
              </p>
              <MorphingText texts={texts} />
            </div>
          </div>
          <div className="flex flex-col justify-start mt-24 gap-y-4 items-center w-full h-full">
            <div className="flex flex-col gap-y-4 items-start w-full h-min ">
              <p className="px-4 py-2 border self-start border-white rounded-3xl">
                About Me
              </p>
              <p className="text-justify tracking-wide leading-9">
                I've worked as a game developer and UI Designer, currently
                focused on improving my skills related to programming and
                creating captivating and intuitive interfaces.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
