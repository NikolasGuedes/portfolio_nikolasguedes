import Foto_Perfil from "../img/Foto_Perfil.png";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function AboutSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  useEffect(() => {}, [isInView1]);

  return (
    <section
      ref={ref1}
      className="mt-5 w-full h-screen 3xl:h-screen container mx-auto px-10 md:px-20  flex max-sm:justify-center max-sm:gap-y-10 justify-between items-center flex-col md:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6"
      >
        <p className="px-4 py-2 border-2 self-start border-[var(--CorPrimaria)] rounded-3xl mb-4">
          About me
        </p>
        <p className="text-lg md:text-xl leading-relaxed font-thin text-start">
          My name is <span className="font-bold">Nikolas Guedes</span> I've
          worked as a game developer and UI Designer, currently focused on
          improving my skills related to programming and creating captivating
          and intuitive interfaces.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 100 }}
        transition={{ duration: 1 }}
        className="w-full md:w-[35%] lg:w-[30%] h-[30rem] border-2 border-[var(--CorPrimaria)] rounded-3xl flex flex-col items-center justify-evenly p-8 "
      >
        <div className="relative z-10 flex flex-col items-center justify-evenly h-full w-full">
          <img
            src={Foto_Perfil}
            alt="Foto Perfil"
            className="w-36 h-36 md:w-52 md:h-52 rounded-full"
          />
          <div className="text-center">
            <p className="text-white text-sm">Based in:</p>
            <p className="font-semibold text-sm px-4 py-2 border border-white rounded-3xl mt-2">
              São Paulo, Brazil
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
