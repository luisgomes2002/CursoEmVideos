import { Link } from "react-router-dom";
import { HomeArea, HomeInfo } from "./SideBarStyle";

const Home = () => {
  return (
    <HomeArea>
      <HomeInfo>
        <Link to="/">
          <button>
            <i className="fa-solid fa-house"></i> Início
          </button>
        </Link>
        <Link to="/perfil">
          <button>
            <i className="fa-regular fa-user"></i> <p>Perfil</p>
          </button>
        </Link>
        <Link to="/perfil/seuscursos">
          <button>
            <i className="fa-solid fa-layer-group"></i> Seus Cursos
          </button>
        </Link>
        <Link to="/perfil/cursos">
          <button>
            <i className="fa-solid fa-book"></i> Biblioteca
          </button>
        </Link>
      </HomeInfo>
    </HomeArea>
  );
};

export default Home;
