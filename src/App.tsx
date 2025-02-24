import "./index.css";
import HeaderPage from "./components/HeaderPage";
import MainSection from "./components/MainSection";
import SkillsSection from "./components/SkillsSection";
import SocialSection from "./components/SocialSection";
function App() {
  return (
    <>
      <div className="3xl:container 3xl:mx-auto">
        <header>
          <HeaderPage />
        </header>
        <SocialSection />
        <main>
          <MainSection />
        </main>
        <SkillsSection />
      </div>
    </>
  );
}

export default App;
