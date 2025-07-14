const Sidebar = () => (
  <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6">
    <ul className="space-y-4">
      <li>
        <a href="#react">React Setup</a>
      </li>
      <li>
        <a href="#tailwind">Tailwind</a>
      </li>
      <li>
        <a href="#zustand">Zustand</a>
      </li>
      <li>
        <a href="#reactdeep">React Deep Dive</a>
      </li>
      <li>
        <a href="#arrays">Array Methods</a>
      </li>
      <li>
        <a href="#checklists">Checklists</a>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
