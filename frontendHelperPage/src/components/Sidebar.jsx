import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 overflow-y-auto">
    <ul className="space-y-6">
      {/* React Ecosystem */}
      <li>
        <p className="font-semibold">⚛️ React</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/react">React Setup</Link>
          </li>
          <li>
            <Link to="/reactrouter">React Router</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/customhooks">Custom Hooks</Link>
          </li>
        </ul>
      </li>

      {/* Styling */}
      <li>
        <p className="font-semibold">🎨 Styling</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/tailwind">Tailwind CSS</Link>
          </li>
          <li>
            <Link to="/animations">Animations</Link>
          </li>
        </ul>
      </li>

      {/* State */}
      <li>
        <p className="font-semibold">🧠 State Management</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/zustand">Zustand</Link>
          </li>
          <li>
            <Link to="/statemanagementcomparison">Comparison</Link>
          </li>
        </ul>
      </li>

      {/* Data */}
      <li>
        <p className="font-semibold">📦 Data & Query</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/reactquery">React Query</Link>
          </li>
          <li>
            <Link to="/arraymethods">Array Methods</Link>
          </li>
        </ul>
      </li>

      {/* Testing */}
      <li>
        <p className="font-semibold">🧪 Testing</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/testing">Testing Setup</Link>
          </li>
        </ul>
      </li>

      {/* Auth */}
      <li>
        <p className="font-semibold">🔐 Authentication</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/auth">Auth Overview</Link>
          </li>
        </ul>
      </li>

      {/* HTML */}
      <li>
        <p className="font-semibold">🧱 HTML Reference</p>
        <ul className="pl-4 space-y-2">
          <li>
            <Link to="/htmlreference">HTML Tags</Link>
          </li>
          <li>
            <Link to="/htmlforminputs">Form Inputs</Link>
          </li>
          <li>
            <Link to="/validationexample">Validation</Link>
          </li>
          <li>
            <Link to="/accesibleform">Accessibility</Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
