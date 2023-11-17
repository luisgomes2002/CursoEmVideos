import styled from "styled-components";

export const UserArea = styled.div`
  padding: 70px 100px 0 100px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 10%;
`;

export const UserInfoArea = styled.div`
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    padding-bottom: 15px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 15px;
    color: #414141;
  }
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;

  input {
    width: 400px;
    height: 40px;
    margin: 10px 0;
    padding-left: 20px;
  }
`;

export const ButtonsArea = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export const ButtonAlterar = styled.div`
  button {
    background-color: black;
    color: #fff;
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
  }
`;

export const ButtonDelete = styled.div`
  button {
    background-color: red;
    color: #fff;
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
  }
`;
