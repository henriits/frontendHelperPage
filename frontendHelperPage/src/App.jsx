import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ReactSetupSection from "./components/sections/ReactSetupSection";
import TailwindSetupSection from "./components/sections/TailwindSetupSection";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/react" element={<ReactSetupSection />} />
            <Route path="/tailwind" element={<TailwindSetupSection />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
