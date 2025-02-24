import Foto_Perfil from "../img/foto_perfil.png";
import Elipse_01 from "../img/Ellipse_01.png";
import Elipse_02 from "../img/Ellipse_02.png";
import Aurora from "./ui/Aurora/Aurora";

function MainSection() {
  return (
    <section className="bg-[var(--Cinzabase)] w-full h-screen container mx-auto px-0 py-36">
      <div className="-z-10 fixed top-0 left-0 w-full h-full">
        <img
          src={Elipse_01}
          alt="Elipse 01"
          className="fixed -top-96 -left-64 w-[1200px] h-[1200px]"
        />
        <img
          src={Elipse_02}
          alt="Elipse 02"
          className="fixed -bottom-72 -right-60 w-[1200px] h-[1200px]"
        />
        <Aurora
          colorStops={["#1D00FF", "#6A00FF", "#1D00FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <div className="-z-10 fixed top-0 left-0 w-full h-full bg-black/50"> </div>

      <div className="flex flex-row items-center justify-start w-full h-full">
        <div className="flex flex-col w-[30%] h-full border border-white rounded-3xl justify-start items-center bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
          <div className="w-full h-[5em] bg-white rounded-t-2xl flex flex-col items-center justify-center px-5">
            <p className="text-black text-2xl">Nikolas Guedes</p>
          </div>
          <img
            src={Foto_Perfil}
            alt="Foto Perfil"
            className="flex items-center top-10 left-10 size-40 cursor-pointer"
          />
          <p>teste</p>
        </div>
        <div className="flex flex-row items-center justify-center h-full w-[70%]">
          <p>teste</p>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
