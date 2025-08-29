import { HouseIcon, InfoIcon } from "lucide-react";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="bg-[var(--color-surface)] p-2 flex gap-2 items-center justify-between">
      <Link to='/'><img
        className="items-start"
        src="https://placehold.co/32"
        alt="Link Educa logo"
      />
      </Link>
      <div className="">
        <ul className="flex gap-2">
          <li className="text-[var(--color-text)]">
            <Link className="flex gap-1" to="/">
              <HouseIcon /> Inicio
            </Link>
          </li>
          <li className="text-[var(--color-text)]">
            <Link className="flex gap-1" to="/sobre">
              <InfoIcon /> Sobre
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
