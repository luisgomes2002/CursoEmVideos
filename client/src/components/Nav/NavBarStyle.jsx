import styled from "styled-components";

export const NavArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  background-color: #0f0f0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px 10px 50px;

  i {
    color: #fff;
  }

  h1 {
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const PaddinArea = styled.div`
  padding-bottom: 4%;
`;

export const Logo = styled.div`
  display: flex;

  button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    padding: 0 10px;
    cursor: pointer;
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
