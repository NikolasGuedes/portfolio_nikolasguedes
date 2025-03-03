import Foto_Perfil from "../img/foto_perfil.png";
import { MorphingText } from "./ui/morphing-text";
import { useCursor } from "@/components/ui/CursorProvider";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const texts = [
  "UI/UX DESIGNER",
  "GAME DEVELOPER",
  "WEB DEVELOPER",
  "FRONT-END DEVELOPER",
];

function MainSection() {
  const { setCursorVariant } = useCursor();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView1) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [isInView1]);

  return (
    <section ref={ref1} className="w-full h-screen 3xl:h-[80rem] container mx-auto px-0 py-28">
      <div className="flex flex-row items-start justify-between w-full h-full gap-x-2">
        {isInView1 && (
          <>
            <motion.div
              key={key}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="flex flex-col w-[30%] h-full border border-white rounded-3xl justify-start items-center bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0"
            >
              <div className="flex flex-col justify-between py-8 items-center w-full h-full">
                <div className="flex flex-col justify-center gap-y-2 items-center w-full h-full">
                  <p className="font-black text-xl">NIKOLAS GUEDES</p>
                  <img
                    src={Foto_Perfil}
                    alt="Foto Perfil"
                    className="flex items-center w-fit h-[12em] cursor-pointer py-2"
                  />
                  <p className="px-4 py-2 border border-white rounded-3xl">
                    front-end developer
                  </p>
                </div>
                <div className="flex flex-col justify-center gap-y-4 items-center w-[80%] h-full">
                  <p className="mt-4 self-start">Based in:</p>
                  <p className="self-start">SÃO PAULO - BRAZIL</p>
                </div>
                <div className="flex flex-col justify-center gap-y-2 items-center w-full h-full">
                  <p
                    onMouseEnter={() => setCursorVariant("sm")}
                    onMouseLeave={() => setCursorVariant("default")}
                    className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border mt-2 bg-white text-black border-white rounded-3xl cursor-pointer"
                  >
                    Contact Me!
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col w-[70%] px-10 h-full gap-y-8 justify-between items-center">
              <div className="flex flex-col justify-start gap-y-4 items-center w-full h-full">
                <motion.div
                  key={key + 1}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col gap-y-4 items-start w-full h-min "
                >
                  <div className="flex flex-row justify-start gap-x-4 items-center w-full h-fit">
                    <motion.p
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="px-4 py-2 border self-start border-white rounded-3xl"
                    >
                      Hello everyone!
                    </motion.p>
                    <motion.p
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                      className="px-4 py-2 border self-start border-white rounded-3xl"
                    >
                      I refer myself as a:
                    </motion.p>
                  </div>
                  <MorphingText texts={texts} />
                </motion.div>
              </div>
              <div className="flex flex-col justify-start mt-24 gap-y-4 items-center w-full h-full">
                <div className="flex flex-col gap-y-4 items-start w-full h-min ">
                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="px-4 py-2 border self-start border-white rounded-3xl"
                  >
                    About Me
                  </motion.p>
                  <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-justify tracking-wide leading-9"
                  >
                    I've worked as a game developer and UI Designer, currently
                    focused on improving my skills related to programming and
                    creating captivating and intuitive interfaces.{" "}
                  </motion.p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default MainSection;
