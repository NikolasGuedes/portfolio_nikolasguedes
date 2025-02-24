import Github_Icon from "../img/github_icon.png";
import Linkdin_Icon from "../img/linkdin_icon.png";
import Instagran_Icon from "../img/instagram_icon.png";

function SocialSection() {
  return (
    <div
      className="z-50 fixed bottom-0 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 
 w-[15%] left-1/2 transform -translate-x-1/2 border border-white flex justify-center rounded-full container px-4 py-2 mx-auto mb-6"
    >
      <nav className="flex flex-row items-center w-full justify-center gap-12">
        <img
          src={Github_Icon}
          alt="Github Icon"
          className="flex items-center size-[2em] cursor-pointer"
        />
        <img
          src={Linkdin_Icon}
          alt="LinkedIn Icon"
          className="flex items-center size-[2em] cursor-pointer"
        />
        <img
          src={Instagran_Icon}
          alt="Instagram Icon"
          className="flex items-center size-[2em] cursor-pointer"
        />
      </nav>
    </div>
  );
}

export default SocialSection;
