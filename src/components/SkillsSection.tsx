import HTML from "../img/icones_skills/html.png";
import JAVASCRIPT from "../img/icones_skills/js.png";
import FIGMA from "../img/icones_skills/figma.png";
import TAILWIND from "../img/icones_skills/tailwind.png";
import DJANGO from "../img/icones_skills/django.png";
import FRAMER from "../img/icones_skills/framer.png";
import REACT from "../img/icones_skills/reactjs.png";
import SASS from "../img/icones_skills/sass.png";
import PYTHON from "../img/icones_skills/python.png";
import UNITY from "../img/icones_skills/unity.png";
import C_SHARP from "../img/icones_skills/csharp.png"; 
import CSS from "../img/icones_skills/css.png";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function SkillsSection() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
    const [key, setKey] = useState(0);
  
    useEffect(() => {
      if (isInView1) {
        setKey((prevKey) => prevKey + 1);
      }
    }, [isInView1]);
  

  const skills = [
    { name: "HTML", img: HTML },
    { name: "JAVASCRIPT", img: JAVASCRIPT },
    { name: "FIGMA", img: FIGMA },
    { name: "TAILWIND", img: TAILWIND },
    { name: "UNITY", img: UNITY },
    { name: "DJANGO", img: DJANGO },
    { name: "FRAMER", img: FRAMER },
    { name: "REACT", img: REACT },
    { name: "SASS", img: SASS },
    { name: "PYTHON", img: PYTHON },
    { name: "CSS", img: CSS },
    { name: "C#", img: C_SHARP },
  ];

  return (
    <section
      ref={ref1}
      className="w-full h-fit 3xl:h-[80rem] container mx-auto px-0 py-36 mt-20 flex justify-start items-start flex-col"
    >
      <div className="flex w-full h-full 2xl:h-fit max-sm:justify-center items-start justify-start flex-row  max-sm:py-10 py-4">
        <motion.p
         key={key + 1}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="px-4 py-2 border self-start border-white rounded-3xl"
        >
          I have knowledge in:
        </motion.p>
      </div>
      <div className="flex items-center justify-evenly flex-row flex-wrap gap-4 w-full h-full">
        {skills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${isInView1}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="border flex flex-col items-center justify-evenly border-white rounded-3xl h-[15em] w-[15em]"
          >
            <p>{skill.name}</p>
            <img
              src={skill.img}
              alt={skill.name}
              className="flex items-center w-fit h-[6em]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
