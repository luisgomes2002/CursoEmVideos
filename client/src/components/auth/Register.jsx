import { Link } from "react-router-dom";
import { AuthentionArea } from "./AuthenticationStyle";

const signup = () => {
  return (
    <AuthentionArea>
      <h2>Registrar</h2>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Senha" />
      <input type="text" placeholder="Confirmar Senha" />
      <div>
        <Link to="/login">Entrar ・ </Link>
        <Link to="/forgot">Esqueceu a senha?</Link>
      </div>
    </AuthentionArea>
  );
};

export default signup;
