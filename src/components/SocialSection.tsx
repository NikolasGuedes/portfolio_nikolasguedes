import Github_Icon from "../img/github_icon.png";
import Linkdin_Icon from "../img/linkdin_icon.png";
import Instagran_Icon from "../img/instagram_icon.png";
import { useCursor } from "@/components/ui/CursorProvider";
import { motion } from "motion/react";

function SocialSection() {
  const { setCursorVariant } = useCursor();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2,  delay: 0.3 }}
      className="z-40 fixed bottom-0 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 
      w-fit left-1/2 transform -translate-x-1/2 border border-white flex justify-center rounded-full container px-4 py-2 mx-auto mb-6"
    >
      <nav className="flex flex-row items-center w-full justify-center gap-12">
        {[Github_Icon, Linkdin_Icon, Instagran_Icon].map((icon, index) => (
          <motion.img
        key={index}
        src={icon}
        alt="Social Icon"
        className="flex items-center w-fit h-[2em] cursor-pointer"
        onMouseEnter={() => setCursorVariant("sm")}
        onMouseLeave={() => setCursorVariant("default")}
        whileHover={{ y: -5 }}
          />
        ))}
      </nav>
    </motion.div>
  );
}

export default SocialSection;
