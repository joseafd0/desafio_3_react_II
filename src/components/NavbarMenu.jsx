import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Navbar>
      <Navbar.Brand
        className="d-flex justify-content-between px-5"
        variant="light"
        style={{ background: "gray" }}
      >
        <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Poké_Ball_icon.svg/1024px-Poké_Ball_icon.svg.png" alt="Logo" />
      </Navbar.Brand>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "me-3 active" : "me-3")}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/pokemones"
        >
          {" "}
          Pokemones{" "}
        </NavLink>
      </div>
    </Navbar>
  );
};

export default NavbarMenu;
