import "./index.css";
import HeaderPage from "./components/HeaderPage";
import MainSection from "./components/MainSection";
function App() {
  return (
    <>
      <div className="3xl:container 3xl:mx-auto">
        <HeaderPage />
        <MainSection />
      </div>
    </>
  );
}

export default App;
