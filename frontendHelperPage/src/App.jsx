import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ReactSetupSection from "./components/sections/ReactSetupSection";
import TailwindSetupSection from "./components/sections/TailwindSetupSection";
import ZustandSetupSection from "./components/sections/ZustandSetupSection";
import HooksReferenceSection from "./components/sections/HooksRefecenceSection";
import ArrayMethodsSection from "./components/sections/ArrayMethodsSection";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/react" element={<ReactSetupSection />} />
            <Route path="/tailwind" element={<TailwindSetupSection />} />
            <Route path="/zustand" element={<ZustandSetupSection />} />
            <Route path="/hooks" element={<HooksReferenceSection />} />
            <Route path="/arraymethods" element={<ArrayMethodsSection />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
