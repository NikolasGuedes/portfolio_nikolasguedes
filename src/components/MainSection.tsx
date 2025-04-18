import { WordRotate } from "./ui/word-rotate";
import { useInView } from "framer-motion";
import { useRef } from "react";

const texts = [
  "UI/UX DESIGNER",
  "GAME DEVELOPER",
  "WEB DEVELOPER",
  "FRONT-END DEVELOPER",
];

function MainSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  return (
    <section
      ref={ref1}
      className="w-full h-screen 3xl:h-[80rem] container mx-auto px-0 py-28"
    >
      <div className="flex flex-row items-center justify-center w-full h-full gap-x-2">
        {isInView1 && (
          <div className="flex flex-col w-full px-10 h-full  justify-between items-center">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex flex-row justify-center items-center max-sm:w-[80%] h-fit bg-white rounded-t-3xl">
                <p className="self-center max-sm:text-sm text-center text-black text-lg max-sm:px-0 px-10 py-2">
                  Hello Everyone! I'm a:
                </p>
              </div>
              <div className="px-4 py-2 border self-center font-bold border-white rounded-3xl w-[60%] max-sm:w-full">
                <WordRotate
                  words={texts}
                  className="max-sm:text-sm"
                  duration={2500}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MainSection;
