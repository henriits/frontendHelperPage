import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  install: `npm install react-router-dom`,

  basicRoutes: `// Basic routing (great for single-page apps)
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

  layoutRoutes: `// Shared layout pattern (header/sidebar stays static)
import { Outlet } from "react-router-dom";
const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>`,

  nestedRoutes: `// Nested routing for hierarchical views
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>`,

  protectedRoute: `// Authentication guard (used when protecting private pages)
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) return <Navigate to="/login" replace />;
  return children;
};

// Usage
<Route path="/admin" element={
  <ProtectedRoute isAuth={user}>
    <AdminPanel />
  </ProtectedRoute>
} />`,

  lazyLoading: `// Lazy loading for performance boost
import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));

<Suspense fallback={<Loading />}>
  <Route path="/about" element={<About />} />
</Suspense>`,

  navLinks: `// Navigation UI with active styling
import { Link, NavLink } from "react-router-dom";

<Link to="/about">About</Link>

<NavLink to="/dashboard" className={
  ({ isActive }) => isActive ? "font-bold underline" : ""
}>
  Dashboard
</NavLink>`,

  scrollReset: `// Scroll reset on route change (ideal for long pages)
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};`,

  errorBoundary: `// Catch errors in route rendering
<Route
  path="*"
  element={<ErrorPage />}
  errorElement={<GenericError />}
 />`,
};

const ReactRouterSection = () => (
  <Section id="router" title="React Router Deep Dive">
    <p className="mb-4">
      <strong>React Router</strong> handles client-side navigation in React
      apps. It supports nested views, layouts, lazy loading, and route guards.
      Here's a curated guide of common use cases:
    </p>
    {Object.entries(examples).map(([key, code]) => (
      <div key={key} className="mt-6 mb-4">
        <p className="font-semibold mb-2 capitalize">
          <strong>🧭 {key.replace(/([A-Z])/g, " $1").trim()}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default ReactRouterSection;
