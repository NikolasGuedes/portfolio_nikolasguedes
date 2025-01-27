import "./App.css";
import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/ui/retro-grid";

function App() {
  return (
    <>
      <div className="bg-black">
        <Button>Click me</Button>
        <div className="relative flex h-[100vh] w-[100vh] flex-col items-center justify-center overflow-hidden rounded-lg">
          <RetroGrid />
        </div>
      </div>
    </>
  );
}

export default App;
