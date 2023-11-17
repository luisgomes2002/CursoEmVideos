import {
  ButtonAlterar,
  ButtonDelete,
  ButtonsArea,
  InputArea,
  UserArea,
  UserInfoArea,
} from "./PerfilStyle";
import InfoContents from "../components/companyDate/Date";
import { useEffect, useState } from "react";

const Perfil = () => {
  const [userInfo, setUserInfo] = useState({});

  const selectUser = () => {
    const userFind = InfoContents[0];
    setUserInfo(userFind);
  };

  useEffect(() => {
    selectUser();
  }, [userInfo]);

  return (
    <UserArea>
      <UserInfoArea>
        <img src={userInfo.user && userInfo.user.img} alt="" />
        <h1>{userInfo.user && userInfo.user.name}</h1>
        <h2>{userInfo.user && userInfo.user.idade}</h2>
        <h2>{userInfo.user && userInfo.user.email}</h2>
        <InputArea>
          <h1>Alterar</h1>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="idade" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Senha" />
          <ButtonsArea>
            <ButtonAlterar>
              <button>Alterar</button>
            </ButtonAlterar>
            <ButtonDelete>
              <button>Delete</button>
            </ButtonDelete>
          </ButtonsArea>
        </InputArea>
      </UserInfoArea>
    </UserArea>
  );
};

export default Perfil;
