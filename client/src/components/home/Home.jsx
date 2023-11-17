import { Link } from "react-router-dom";
import { HomeArea, HomeInfo } from "./HomeStyle";
import HomeVideos from "./HomeVideos";

const Home = () => {
  return (
    <HomeArea>
      <HomeInfo>
        <Link to="/">
          <button>
            <i className="fa-solid fa-house"></i> Início
          </button>
        </Link>
        <hr />
        <Link to="/perfil">
          <button>
            <i className="fa-regular fa-user"></i> <p>Perfil</p>
          </button>
        </Link>
        <Link to="">
          <button>
            <i className="fa-solid fa-layer-group"></i> Seus Cursos
          </button>
        </Link>
        <Link to="">
          <button>
            <i className="fa-solid fa-book"></i> Biblioteca
          </button>
        </Link>
        <hr />
        <Link to="">
          <button>
            <i className="fa-regular fa-user"></i> <p>??????</p>
          </button>
        </Link>
        <Link to="">
          <button>
            <i className="fa-regular fa-user"></i> <p>??????</p>
          </button>
        </Link>
        <Link to="">
          <button>
            <i className="fa-regular fa-user"></i> <p>??????</p>
          </button>
        </Link>
      </HomeInfo>
      <HomeVideos />
    </HomeArea>
  );
};

export default Home;
