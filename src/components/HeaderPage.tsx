import Logo_NK from "../img/NK_logo.png";
import { useCursor } from "@/components/ui/CursorProvider";
import { motion } from "motion/react";

function HeaderPage() {
  const { setCursorVariant } = useCursor();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      
      // Track navigation events
      if (window.Analytics) {
        window.Analytics.trackEvent('Navegação', 'Clique', `Seção ${sectionId}`);
      }
    }
  };

  const handleLogoClick = () => {
    // Track logo click
    if (window.Analytics) {
      window.Analytics.trackEvent('Navegação', 'Clique', 'Logo Home');
    }
    scrollToSection("HOME");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="z-50 fixed bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 
      w-full max-lg:w-fit left-1/2 transform -translate-x-1/2 border-2 border-[var(--CorPrimaria)] flex justify-center rounded-full container px-8 py-2 mt-6 mx-auto"
    >
      <nav className="flex flex-row items-center w-full justify-between gap-10">
        <img
          onClick={handleLogoClick}
          onMouseEnter={() => setCursorVariant("sm")}
          onMouseLeave={() => setCursorVariant("default")}
          src={Logo_NK}
          alt="logo exata"
          className="flex items-center w-fit h-[2em] cursor-pointer relative after:absolute after:bottom-0 after:left-0 
        after:h-[3px] bg-transparent after:w-full after:origin-bottom-right after:scale-x-0 
        after:bg-white after:transition-transform after:duration-300 
        after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
        hover:after:origin-bottom-left hover:after:scale-x-100"
        />
        <ul className="flex flex-row items-center gap-10 max-lg:hidden">
          {["ABOUT", "SKILLS", "PROJECTS"].map((text) => (
            <li key={text}>
              <button
                onClick={() => scrollToSection(text)}
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
                className="font-thin text-md tracking-wide relative after:absolute after:bottom-0 after:left-0 
                after:h-[3px] bg-transparent after:w-full after:origin-bottom-right after:scale-x-0 
                after:bg-white after:transition-transform after:duration-300 
                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] 
                hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}

export default HeaderPage;
