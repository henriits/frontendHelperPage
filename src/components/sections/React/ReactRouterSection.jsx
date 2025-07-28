import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  install: `npm install react-router-dom`,

  basicRoutes: `// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);`,

  nestedRoutes: `// routes with nesting
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>`,

  navLinks: `// Navigation.jsx
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>
<NavLink to="/dashboard" className={
({ isActive }) => isActive ? "font-bold" : ""}>Dashboard</NavLink>`,

  protectedRoute: `// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) return <Navigate to="/login" />;
  return children;
};

// Usage
<Route path="/private" element={
  <ProtectedRoute isAuth={user}>
    <PrivatePage />
  </ProtectedRoute>
} />`,

  scrollReset: `// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};`,
};

const ReactRouterSection = () => (
  <Section id="router" title="React Router Setup">
    <p className="mb-4">
      Get started with <code>react-router-dom</code> for client-side routing in
      React. From basic routes to nested paths and authentication guards:
    </p>
    {Object.entries(examples).map(([key, code]) => (
      <div key={key} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🗺️ {key}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default ReactRouterSection;
