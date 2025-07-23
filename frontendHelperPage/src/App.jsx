import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import HTMLFormInputsReferenceSection from "./components/sections/HtmlFormInputsReferanceSection";
import ValidationExamplesSection from "./components/sections/ValidationExamplesSection";
import AccessibleFormPatternsSection from "./components/sections/AccessibleFormPatternsSection";
import ResponsiveSidebar from "./components/ResponsiveSidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <ResponsiveSidebar />
        <main className="ml-0 md:ml-64 w-full px-4 py-6 max-w-screen-xl mx-auto">
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
              path="/validationexample"
              element={<ValidationExamplesSection />}
            />
            <Route
              path="/accesibleform"
              element={<AccessibleFormPatternsSection />}
            />
            <Route
              path="/htmlforminputs"
              element={<HTMLFormInputsReferenceSection />}
            />
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
