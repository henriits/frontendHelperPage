import { NavLink } from "react-router-dom";
import SidebarSection from "./SidebarSection";

const Sidebar = () => (
  <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 overflow-y-auto">
    <ul className="space-y-6">
      <SidebarSection label="⚛️ React">
        <li>
          <NavLink to="/react">React Setup</NavLink>
        </li>
        <li>
          <NavLink to="/reactrouter">React Router</NavLink>
        </li>
        <li>
          <NavLink to="/hooks">Hooks</NavLink>
        </li>
        <li>
          <NavLink to="/customhooks">Custom Hooks</NavLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🎨 Styling">
        <li>
          <NavLink to="/tailwind">Tailwind CSS</NavLink>
        </li>
        <li>
          <NavLink to="/animations">Animations</NavLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🧠 State Management">
        <li>
          <NavLink to="/zustand">Zustand</NavLink>
        </li>
        <li>
          <NavLink to="/statemanagementcomparison">Comparison</NavLink>
        </li>
      </SidebarSection>

      <SidebarSection label="📦 Data & Query">
        <li>
          <NavLink to="/reactquery">React Query</NavLink>
        </li>
        <li>
          <NavLink to="/arraymethods">Array Methods</NavLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🧪 Testing">
        <li>
          <NavLink to="/testing">Testing Setup</NavLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🔐 Authentication">
        <li>
          <NavLink to="/auth">Auth Overview</NavLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🧱 HTML Reference">
        <li>
          <NavLink to="/htmlreference">HTML Tags</NavLink>
        </li>
        <li>
          <NavLink to="/htmlforminputs">Form Inputs</NavLink>
        </li>
        <li>
          <NavLink to="/validationexample">Validation</NavLink>
        </li>
        <li>
          <NavLink to="/accesibleform">Accessibility</NavLink>
        </li>
      </SidebarSection>
    </ul>
  </nav>
);

export default Sidebar;
