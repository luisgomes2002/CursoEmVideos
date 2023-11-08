import { NavArea, InputArea, UserArea } from "./NavBarStyle";

const NavBar = () => {
  return (
    <>
      <NavArea>
        <h1>NomeSite</h1>
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
