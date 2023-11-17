import styled from "styled-components";

export const HomeArea = styled.div`
  display: grid;
  grid-template-columns: 13% 1fr;
  background-color: #141414;
`;

export const HomeInfo = styled.div`
  padding: 20px 0;
  padding-right: 20px;

  a {
    text-decoration: none;
  }

  button {
    margin: 10px 20px;
    width: 200px;
    height: 40px;
    text-align: center;
    background-color: #141414;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
  }

  i {
    padding: 25px;
  }

  button:hover {
    background-color: #4d4a4a;
  }
`;
