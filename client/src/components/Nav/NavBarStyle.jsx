import styled from "styled-components";

export const NavArea = styled.div`
  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px 10px 50px;

  h1 {
    color: #fff;
  }

  a {
    text-decoration: none;
  }
`;

export const InputArea = styled.div`
  input {
    width: 500px;
    height: 40px;
    background-color: #0f0f0f;
    border-radius: 25px;
    border: 1px solid #3d3d3d;
    padding-left: 20px;
    color: #fff;
  }

  button {
    margin: 10px;
    background-color: #252424;
    border: none;
    color: #fff;
    border-radius: 50%;
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
  }

  button:hover {
    background-color: #3d3d3d;
  }
`;

export const UserArea = styled.div`
  display: flex;

  h2 {
    color: #fff;
    padding: 0 10px;
    font-size: 20px;
  }
`;
