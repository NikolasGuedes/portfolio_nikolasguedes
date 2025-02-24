import Logo_NK from "../img/NK_logo.png";

function HeaderPage() {
  return (
    <div
      className="z-50 fixed bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 
 w-full left-1/2 transform -translate-x-1/2 border border-white flex justify-center rounded-full container px-8 py-2 mt-6 mx-auto"
    >
      <nav className="flex flex-row items-center w-full justify-between gap-10">
        <img
          src={Logo_NK}
          alt="logo exata"
          className="flex items-center size-min"
        />
        <ul className="flex flex-row items-center gap-10 max-lg:hidden">
          <li>
            <button
              className="font-thin text-md tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              className="font-thin text-md tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              SKILLS
            </button>
          </li>
          <li>
            <button
              className="font-thin text-md tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              className="font-thin text-md tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0 
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderPage;
