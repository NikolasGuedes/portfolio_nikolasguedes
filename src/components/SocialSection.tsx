import Github_Icon from "../img/github_icon.png";
import Linkdin_Icon from "../img/linkdin_icon.png";
import Instagran_Icon from "../img/instagram_icon.png";
import { useCursor } from "@/components/ui/CursorProvider";
import { motion } from "motion/react";

function SocialSection() {
  const { setCursorVariant } = useCursor();

  const handleSocialClick = (socialName: string, link: string) => {
    // Track social media clicks
    if (window.Analytics) {
      window.Analytics.trackEvent('Social Media', 'Clique', socialName);
    }
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2,  delay: 0.3 }}
      className="z-40 fixed bottom-0 bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 
      w-fit max-lg:w-[70%] left-1/2 transform -translate-x-1/2 border-2 border-[var(--CorPrimaria)] flex justify-center rounded-full container px-4 py-2 mx-auto mb-6"
    >
      <nav className="flex flex-row items-center w-full justify-center gap-12">
        {[
          { icon: Github_Icon, link: "https://github.com/NikolasGuedes", name: "GitHub" },
          { icon: Linkdin_Icon, link: "https://www.linkedin.com/in/nikolas-guedes-da-silva-6497541a1/", name: "LinkedIn" },
          { icon: Instagran_Icon, link: "https://www.instagram.com/guedes_nk/", name: "Instagram" }
        ].map((item, index) => (
          <div key={index} onClick={() => handleSocialClick(item.name, item.link)}>
            <motion.img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="flex items-center w-fit h-[2em] cursor-pointer"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              whileHover={{ y: -5 }}
            />
          </div>
        ))}
      </nav>
    </motion.div>
  );
}

export default SocialSection;
