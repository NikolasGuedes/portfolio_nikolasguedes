import "./index.css";
import HeaderPage from "./components/HeaderPage";
import MainSection from "./components/MainSection";
import SkillsSection from "./components/SkillsSection";
import SocialSection from "./components/SocialSection";
import ProjectsSection from "./components/ProjectsSection";
import { CursorProvider } from "@/components/ui/CursorProvider";
import Elipse_01 from "../src/img/Ellipse_01.png";
import Elipse_02 from "../src/img/Ellipse_02.png";
import Aurora from "./components/ui/Aurora/Aurora";
import { motion } from "framer-motion";

function App() {
  return (
    <>
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, smooth: true, delay: 0.5 }}
        className="-z-10 absolute bottom-[35em] right-[35em] h-[13em] w-[23em] rounded-full bg-gradient-to-br from-[var(--CorPrimaria)] via-[var(--CorTerciaria)] to-[var(--CorPrimaria)] opacity-[0.3] blur-3xl"
      ></motion.div>

      <div className="-z-10 fixed top-0 left-0 w-full h-full bg-clip-padding backdrop-filter bg-black backdrop-blur-lg bg-opacity-50 "></div>
      <CursorProvider>
        <div className="3xl:container 3xl:mx-auto">
          <header>
            <HeaderPage />
          </header>
          <section>
            <SocialSection />
          </section>
          <main id="HOME">
            <MainSection />
          </main>
          <section id="SKILLS">
            <SkillsSection />
          </section>
          <section id="PROJECTS">
            <ProjectsSection />
          </section>
        </div>
      </CursorProvider>
    </>
  );
}

export default App;
