import React from "react";

function NavbarComponent() {
  return (
    <nav className="bg-blue-200 rounded-sm py-2">
      <ul className="flex justify-around">
        <li>
          <a
            href={`/`}
            className="font-semibold text-lg hover:text-white hover:bg-blue-400 px-2 rounded-sm"
          >
            Crud
          </a>
        </li>
        <li>
          <a
            href={`/counter`}
            className="font-semibold text-lg hover:text-white hover:bg-blue-400 px-2 rounded-sm"
          >
            Counter
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
