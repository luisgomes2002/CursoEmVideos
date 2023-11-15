import { Link } from "react-router-dom";
import { AuthentionArea } from "./AuthenticationStyle";

const signin = () => {
  return (
    <AuthentionArea>
      <h2>Recuperar a senha</h2>
      <p>Coloque seu e-mail para trocar a senha:</p>
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Confirme o E-mail" />
      <div>
        <Link to="/login">Entrar ・ </Link>
        <Link to="/register">Registrar</Link>
      </div>
    </AuthentionArea>
  );
};

export default signin;
