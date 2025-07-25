import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block transition ${
        isActive
          ? "text-blue-400 font-semibold"
          : "text-white hover:text-blue-300"
      }`
    }
  >
    {children}
  </NavLink>
);

export default SidebarLink;
