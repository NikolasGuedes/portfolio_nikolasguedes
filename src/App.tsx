import "./index.css";
import HeaderPage from "./components/HeaderPage";
import MainSection from "./components/MainSection";
import SkillsSection from "./components/SkillsSection";
function App() {
  return (
    <>
      <div className="3xl:container 3xl:mx-auto">
        <HeaderPage />
        <MainSection />
        <SkillsSection />
      </div>
    </>
  );
}

export default App;
