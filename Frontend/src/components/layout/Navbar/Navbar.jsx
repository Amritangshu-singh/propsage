import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";
import MobileMenu from "./MobileMenu";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <Logo />

        <nav className="desktop-nav">
          <NavLinks />
        </nav>

        <div className="navbar-actions">
          <SearchBar />
          <AuthButton />
        </div>

        <MobileMenu />

      </div>

    </header>
  );
}

export default Navbar;