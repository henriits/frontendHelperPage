import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6">
    <ul className="space-y-4">
      <li>
        <Link to="/react">React Setup</Link>
      </li>
      <li>
        <Link to="/tailwind">Tailwind CSS</Link>
      </li>
      <li>
        <Link to="/zustand">Zustand</Link>
      </li>
      <li>
        <Link to="/hooks">Hooks</Link>
      </li>
      <li>
        <Link to="/arraymethods">Array Methods</Link>
      </li>
      <li>
        <Link to="/customhooks">Custom Hooks</Link>
      </li>
      <li>
        <Link to="/reactrouter">React Router</Link>
      </li>
      {/* Add more links */}
    </ul>
  </nav>
);

export default Sidebar;
