import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ReactSetupSection from "./components/sections/ReactSetupSection";
import TailwindSetupSection from "./components/sections/TailwindSetupSection";
import ZustandSetupSection from "./components/sections/ZustandSetupSection";
import HooksReferenceSection from "./components/sections/HooksRefecenceSection";
import ArrayMethodsSection from "./components/sections/ArrayMethodsSection";
import CustomHooksSection from "./components/sections/CustomHookSection";
import ReactRouterSection from "./components/sections/ReactRouterSection";
import TestingSetupSection from "./components/sections/TestingSetupSection";
import ReactQuerySection from "./components/sections/ReactQuerySection";
import AnimationsSection from "./components/sections/AnimationsSection";
import AuthSection from "./components/sections/AuthSection";
import StateManagementComparison from "./components/sections/StateManagementComparison";
import HTMLTagsReferenceSection from "./components/sections/HtmlTagsRefereceSection";

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
            <Route path="/customhooks" element={<CustomHooksSection />} />
            <Route path="/reactrouter" element={<ReactRouterSection />} />
            <Route path="/testing" element={<TestingSetupSection />} />
            <Route path="/reactquery" element={<ReactQuerySection />} />
            <Route path="/animations" element={<AnimationsSection />} />
            <Route path="/auth" element={<AuthSection />} />
            <Route
              path="/htmlreference"
              element={<HTMLTagsReferenceSection />}
            />
            <Route
              path="/statemanagementcomparison"
              element={<StateManagementComparison />}
            />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
