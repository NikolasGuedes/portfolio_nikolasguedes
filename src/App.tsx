import "./index.css";
import HeaderPage from "./components/HeaderPage";
import MainSection from "./components/MainSection";
import SkillsSection from "./components/SkillsSection";
import SocialSection from "./components/SocialSection";
import { CursorProvider } from "@/components/ui/CursorProvider";
function App() {
 
  return (
    <>
     <CursorProvider>
      <div className="3xl:container 3xl:mx-auto">
        <header>
          <HeaderPage />
        </header>
        <section>
          <SocialSection />
        </section>
        <main>
          <MainSection />
        </main>
        <section>
          <SkillsSection />
        </section>
      </div>
      </CursorProvider>
    </>
  );
}

export default App;
