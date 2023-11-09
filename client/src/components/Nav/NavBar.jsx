import { Link } from "react-router-dom";
import { NavArea, InputArea, UserArea } from "./NavBarStyle";

const NavBar = () => {
  return (
    <>
      <NavArea>
        <Link to="/">
          <h1>NomeSite</h1>
        </Link>
        <InputArea>
          <input type="text" placeholder="Pesquise" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </InputArea>
        <UserArea>
          <h2>
            <i className="fa-solid fa-user"></i>
          </h2>
          <h2>
            <i className="fa-solid fa-cart-shopping"></i>
          </h2>
        </UserArea>
      </NavArea>
    </>
  );
};

export default NavBar;
