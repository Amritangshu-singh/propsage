import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="nav-links">

      <li>
        <NavLink to="/buy">Buy</NavLink>
      </li>

      <li>
        <NavLink to="/rent">Rent</NavLink>
      </li>

      <li>
        <NavLink to="/new-launches">New Launches</NavLink>
      </li>

      <li>
        <NavLink to="/projects">Projects</NavLink>
      </li>

      <li>
        <NavLink to="/builders">Builders</NavLink>
      </li>

      <li>
        <NavLink to="/localities">Localities</NavLink>
      </li>

    </ul>
  );
}

export default NavLinks;