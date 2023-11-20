import { Link } from "react-router-dom";
import { NavArea, InputArea, UserArea, Logo, PaddinArea } from "./NavBarStyle";
import { useState } from "react";
import { HomeArea, HomeInfo } from "./SideBarStyle";

const NavBar = () => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSideBar = () => {
    setSideBarVisible(false);
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
            <Link to="/buy">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </h2>
        </UserArea>
      </NavArea>
      {sideBarVisible && (
        <HomeArea>
          <HomeInfo>
            <Link to="/" onClick={closeSideBar}>
              <button>
                <i className="fa-solid fa-house"></i> Início
              </button>
            </Link>
            <Link to="/perfil" onClick={closeSideBar}>
              <button>
                <i className="fa-regular fa-user"></i> <p>Perfil</p>
              </button>
            </Link>
            <Link to="/perfil/seuscursos" onClick={closeSideBar}>
              <button>
                <i className="fa-solid fa-layer-group"></i> Seus Cursos
              </button>
            </Link>
            <Link to="/perfil/cursos" onClick={closeSideBar}>
              <button>
                <i className="fa-solid fa-book"></i> Biblioteca
              </button>
            </Link>
          </HomeInfo>
        </HomeArea>
      )}
      <PaddinArea />
    </>
  );
};

export default NavBar;
