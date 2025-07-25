// SidebarSection.jsx
import { useState } from "react";

const SidebarSection = ({ label, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <li>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left font-semibold flex items-center justify-between"
      >
        {label}
        <span>{open ? "▾" : "▸"}</span>
      </button>

      {open && <ul className="pl-4 mt-2 space-y-1">{children}</ul>}
    </li>
  );
};

export default SidebarSection;
