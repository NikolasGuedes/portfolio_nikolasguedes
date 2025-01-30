import Logo_NK from "../img/NK_logo.png";

function HeaderPage() {
  return (
    <div className="z-50 absolute w-full px-20 max-lg:px-8 3xl:container 3xl:mx-auto py-2 bg-transparent">
      <nav className="flex flex-row items-center w-full justify-between gap-10">
      <img
          src={Logo_NK}
          alt="logo exata"
          className="flex items-center size-min"
        />
        <ul className="flex flex-row items-center gap-10 max-lg:hidden">
          <li>
            <button
              className="font-normal text-xl tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              className="font-normal text-xl tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              SKILLS
            </button>
          </li>
          <li>
            <button
              className="font-normal text-xl tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0  
      after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              className="font-normal text-xl tracking-wide relative after:absolute after:bottom-0 after:left-0 after:h-[7px] after:w-full after:origin-bottom-right after:scale-x-0 
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
