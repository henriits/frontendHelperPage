import { NavLink } from "react-router-dom";
import SidebarSection from "./SidebarSection";
import SidebarLink from "./SidebarLink";

const Sidebar = () => (
  <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 overflow-y-auto">
    <ul className="space-y-6">
      <SidebarSection label="⚛️ React">
        <li>
          <SidebarLink to="/react">React Setup</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/reactrouter">React Router</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/hooks">Hooks</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/customhooks">Custom Hooks</SidebarLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🎨 Styling">
        <li>
          <SidebarLink to="/tailwind">Tailwind CSS</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/animations">Animations</SidebarLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🧠 State Management">
        <li>
          <SidebarLink to="/zustand">Zustand</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/statemanagementcomparison">Comparison</SidebarLink>
        </li>
      </SidebarSection>

      <SidebarSection label="📦 Data & Query">
        <li>
          <SidebarLink to="/reactquery">React Query</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/arraymethods">Array Methods</SidebarLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🧪 Testing">
        <li>
          <SidebarLink to="/testing">Testing Setup</SidebarLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🔐 Authentication">
        <li>
          <SidebarLink to="/auth">Auth Overview</SidebarLink>
        </li>
      </SidebarSection>

      <SidebarSection label="🧱 HTML Reference">
        <li>
          <SidebarLink to="/htmlreference">HTML Tags</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/htmlforminputs">Form Inputs</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/validationexample">Validation</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/accesibleform">Accessibility</SidebarLink>
        </li>
      </SidebarSection>
      <SidebarSection label="✅ Checklists">
        <li>
          <SidebarLink to="/best-practices">Best Practices</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/frontend-essentials">
            Frontend Essentials
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/app-checklist">App Checklist</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/audit-guide">Audit Guide</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/startup-checks">Startup Checks</SidebarLink>
        </li>
      </SidebarSection>
      <SidebarSection label="Pre built Components">
        <li>
          <SidebarLink to="/responsive-navbar-example">
            Responsive Navbar example
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/glassmorph-login">Glassmorph Login</SidebarLink>
        </li>
        <li>
          <SidebarLink to="/glassmorph-register">
            Glassmorph Register
          </SidebarLink>
        </li>
      </SidebarSection>
    </ul>
  </nav>
);

export default Sidebar;
