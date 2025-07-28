import Section from "../Section";
import CodeBlock from "../CodeBlock";

const navbarCode = `import { useState } from "react";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Blog", "Contact"];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🚀 Brand</h1>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul className="hidden md:flex gap-6">
          {links.map(link => (
            <li key={link}>
              <a href={\`#\${link.toLowerCase()}\`} className="hover:text-blue-400">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden mt-4 space-y-2">
          {links.map(link => (
            <li key={link}>
              <a href={\`#\${link.toLowerCase()}\`} className="block px-4 py-2 hover:bg-gray-800 rounded">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;`;

import { useState } from "react";

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Blog", "Contact"];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">🚀 Brand</h1>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden mt-4 space-y-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 hover:bg-gray-800 rounded"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const ResponsiveNavbarExample = () => (
  <Section id="responsive-navbar" title="Responsive Navbar Component">
    <p className="mb-4">
      A classic responsive navigation bar with burger toggle on mobile.
      TailwindCSS handles layout, and React's `useState` manages the mobile menu
      state.
    </p>
    <div className="mt-6 mb-4">
      <p className="font-semibold mb-2">
        <strong>📱 ResponsiveNavbar</strong>
      </p>
      <CodeBlock code={navbarCode} />
      <br />
      <ResponsiveNavbar />
    </div>
  </Section>
);

export default ResponsiveNavbarExample;
