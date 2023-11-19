import { Link } from "react-router-dom";
import { NavArea, InputArea, UserArea, Logo, PaddinArea } from "./NavBarStyle";
import { useState } from "react";
import SideBar from "../home/Home";

const NavBar = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };
  return (
    <>
      <NavArea>
        <Logo>
          <button onClick={toggleSideBar}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <Link to="/">
            <h1>NomeSite</h1>
          </Link>
        </Logo>
        <InputArea>
          <input type="text" placeholder="Pesquise" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </InputArea>
        <UserArea>
          <h2>
            <Link to="/login">
              <i className="fa-solid fa-user"></i>
            </Link>
          </h2>
          <h2>
            <Link>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </h2>
        </UserArea>
      </NavArea>
      {sideBarVisible && <SideBar />}
      <PaddinArea />
    </>
  );
};

export default NavBar;
