import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ImageSwiper } from "@/components/ui/image-swiper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { useCursor } from "@/components/ui/CursorProvider";
import UNITY from "../img/icones_skills/unity.png";
import C_SHARP from "../img/icones_skills/csharp.png";
import HTML from "../img/icones_skills/html.png";
import JAVASCRIPT from "../img/icones_skills/js.png";
import FIGMA from "../img/icones_skills/figma.png";
import SASS from "../img/icones_skills/sass.png";
import ANGULAR from "../img/icones_skills/angular.png";
import CSHARP from "../img/icones_skills/csharp.png";
import REACT from "../img/icones_skills/reactjs.png";
import TAILWIND from "../img/icones_skills/tailwind.png";
import TYPESCRIPT from "../img/icones_skills/typescript.png";
import CSS from "../img/icones_skills/css.png";
import OLI_01 from "../img/projects/OLI/01.jpg";
import OLI_02 from "../img/projects/OLI/02.jpg";
import OLI_03 from "../img/projects/OLI/03.jpg";
import OLI_04 from "../img/projects/OLI/04.jpg";
import PORT_01 from "../img/projects/PORTIFOLIO_WEBSITE/01.png";
import PORT_02 from "../img/projects/PORTIFOLIO_WEBSITE/02.png";
import PORT_03 from "../img/projects/PORTIFOLIO_WEBSITE/03.png";
import TAR_01 from "../img/projects/TAREFINHAS/01.jpg";
import TAR_02 from "../img/projects/TAREFINHAS/02.jpg";
import TAR_03 from "../img/projects/TAREFINHAS/03.jpg";
import TAR_04 from "../img/projects/TAREFINHAS/04.jpg";
import TARV2_01 from "../img/projects/TAREFINHAS_V2/01.png";
import TARV2_02 from "../img/projects/TAREFINHAS_V2/02.png";
import TARV2_03 from "../img/projects/TAREFINHAS_V2/03.png";
import TARV2_04 from "../img/projects/TAREFINHAS_V2/04.png";
import JOK_01 from "../img/projects/JOKENPOKEMON/01.png";
import JOK_02 from "../img/projects/JOKENPOKEMON/02.png";
import JOK_03 from "../img/projects/JOKENPOKEMON/03.png";
import JOK_04 from "../img/projects/JOKENPOKEMON/04.png";
import NKS_01 from "../img/projects/NKSTUDIO/01.png";
import NKS_02 from "../img/projects/NKSTUDIO/02.png";
import NKS_03 from "../img/projects/NKSTUDIO/03.png";
import NKS_04 from "../img/projects/NKSTUDIO/04.png";
import ALG_01 from "../img/projects/ALGORITHMEXER/01.png";
import ALG_02 from "../img/projects/ALGORITHMEXER/02.png";
import ALG_03 from "../img/projects/ALGORITHMEXER/03.png";
import ALG_04 from "../img/projects/ALGORITHMEXER/04.png";
import SEVENDAYS_01 from "../img/projects/7DAYS/01.png";
import SEVENDAYS_02 from "../img/projects/7DAYS/02.png";

function ProjectsSection() {
  const { setCursorVariant } = useCursor();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (isInView1) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [isInView1]);

  const OLI = [OLI_01, OLI_02, OLI_03, OLI_04];
  const TAREFINHAS = [TAR_01, TAR_02, TAR_03, TAR_04];
  const PORTFOLIO = [PORT_01, PORT_02, PORT_03];
  const JOKENPOKEMON = [JOK_01, JOK_02, JOK_03, JOK_04];
  const NKSTUDIO = [NKS_01, NKS_02, NKS_03, NKS_04];
  const ALGORITHMEXER = [ALG_01, ALG_02, ALG_03, ALG_04];
  const TAREFINHASV2 = [TARV2_01, TARV2_02, TARV2_03, TARV2_04];
  const SEVENDAYS = [SEVENDAYS_01, SEVENDAYS_02];

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
          className="px-4 py-2 border self-start border-[var(--CorPrimaria)] rounded-3xl"
        >
          Some of my projects:
        </motion.p>
      </div>
      <motion.div
        key={key + 2}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-around flex-row flex-wrap gap-x-4 gap-y-8 w-full h-full"
      >
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={OLI} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              OLI
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={UNITY}
                alt="logo UNITY"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={C_SHARP}
                alt="logo CSHARP"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={FIGMA}
                alt="logo FIGMA"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              Game that I made inspired by other titles like "LIMBO" and
              "INSIDE". The game is available on STEAM for free!
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://store.steampowered.com/app/1794530/OLI/?l=english"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover bg-[var(--CorPrimaria)] rounded-3xl "
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={PORTFOLIO} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              PORTFOLIO SITE
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={REACT}
                alt="logo UNITY"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={TAILWIND}
                alt="logo CSHARP"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={TYPESCRIPT}
                alt="logo FIGMA"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              my portfolio website, using a framework and Motion for animations.
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://nikolasguedes.github.io/portfolio_nikolasguedes/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl "
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={TAREFINHAS} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              TAREFINHAS
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={HTML}
                alt="logo HTML"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={CSS}
                alt="logo CSS"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={JAVASCRIPT}
                alt="logo JAVASCRIPT"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
            A TO-DO list web application with vibrant colors and a minimalist design, using local storage to save tasks.
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://tarefinhas-navy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl "
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={TAREFINHASV2} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              TAREFINHAS V2
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={ANGULAR}
                alt="logo HTML"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={SASS}
                alt="logo CSS"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={CSHARP}
                alt="logo JAVASCRIPT"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              An updated version of my TO-DO application, now using a framework
              and an API.
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://github.com/NikolasGuedes/TarefinhasV2"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl "
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={JOKENPOKEMON} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              JO KEN PÔ KEMON
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={HTML}
                alt="logo HTML"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={CSS}
                alt="logo CSS"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={JAVASCRIPT}
                alt="logo JAVASCRIPT"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              A website where you can choose a pokemon and play a
              rock-paper-scissors game against the computer, final score
              available in the end.
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://nikolasguedes.github.io/Site_jokenpo_kemon/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl "
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={NKSTUDIO} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              NKSTUDIO WEBSITE
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={HTML}
                alt="logo HTML"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={CSS}
                alt="logo CSS"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={JAVASCRIPT}
                alt="logo JAVASCRIPT"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              A made this website to test my skills and showcase my projects
              related an games.
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://site-nkstudiogames.vercel.app/index.html#home"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl "
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper
              className="h-64 rounded-t-3xl "
              images={ALGORITHMEXER}
            />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              ALGORITHM EXER
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={HTML}
                alt="logo HTML"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={CSS}
                alt="logo CSS"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={JAVASCRIPT}
                alt="logo JAVASCRIPT"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              website to show the results of the algorithm exercise list at my
              university (USCS).
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://nikolasguedes.github.io/ExerciciosAlgoritmosUSCS/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl  text-center"
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
        <Card className="w-[370px] h-[580px] border bg-[var(--CorPrimaria)] rounded-3xl  flex flex-col">
          <CardContent className="p-0 flex-shrink-0">
            <ImageSwiper className="h-64 rounded-t-3xl " images={SEVENDAYS} />
          </CardContent>
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-2xl font-semibold text-white">
              7-DAYS-OF-CODE
            </CardTitle>
          </CardHeader>
          <CardDescription className="flex-grow">
            <div className="w-full flex items-center justify-start gap-x-4 px-6">
              <img
                src={HTML}
                alt="logo HTML"
                className="flex items-center w-fit h-[2em]"
              />
              <img
                src={CSS}
                alt="logo CSS"
                className="flex items-center w-fit h-[2em]"
              />
            </div>

            <p className="py-4 text-white text-justify leading-6 px-6">
              Result of challenge 7 days of code by Alura, where I made a
              website landing page for a fictional company.
            </p>
          </CardDescription>
          <CardFooter className="flex-shrink-0 flex flex-col justify-center items-center w-full h-[3em]">
            <a
              href="https://site-desafio-7-days-of-code.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-4 py-2 w-[60%] hover:w-[80%] transition-all duration-300 border border-white mb-10 text-white hover:text-[var(--CorPrimaria)] hover:bg-white bg-[var(--CorPrimaria)] rounded-3xl  text-center"
            >
              Project Link
            </a>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}

export default ProjectsSection;
