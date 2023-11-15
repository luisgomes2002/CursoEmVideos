import { Link } from "react-router-dom";
import { AuthentionArea } from "./AuthenticationStyle";

const signin = () => {
  return (
    <AuthentionArea>
      <h2>Entrar</h2>
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Senha" />
      <div>
        <Link to="/register">Registrar ・ </Link>
        <Link to="/forgot">Esqueceu a senha?</Link>
      </div>
    </AuthentionArea>
  );
};

export default signin;
