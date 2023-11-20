import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    width: 200px;
    height: 60px;
    margin: 20px 200px;
    border-radius: 10px;
    border: none;
    background-color: #09b82f;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  button:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in;
  }
`;

export const UserInfo = styled.div`
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.267);
  margin: 20px;
  border-radius: 10px;

  h1 {
    margin: 20px;
    font-size: 30px;
    color: #202020;
  }

  input {
    margin: 20px;
    padding-left: 20px;
    height: 50px;
    width: 300px;
    display: flex;
  }

  h2 {
    margin: 60px 0 0 20px;
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 20px;
    margin: 20px;
  }
`;
