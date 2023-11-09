import styled from "styled-components";

export const VideoPageBack = styled.div`
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const VideoArea = styled.div`
  margin: 30px;
  width: 1300px;
  height: 750px;

  h1 {
    color: #fff;
    margin: 20px 0;
  }
`;

export const Comments = styled.div`
  h2 {
    color: #fff;
    font-size: 40px;
    margin: 10px 0;
  }

  p {
    color: #fff;
    margin: 10px 0;
    padding: 5px;
    background-color: #191c1f;
    border-radius: 15px;
  }
`;

export const TextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  textarea {
    width: 80%;
    background-color: #191c1f;
    border: 1px solid #191c1f;
    color: #fff;
  }

  button {
    background-color: #fff;
    border: none;
    width: 200px;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    margin: 20px;
  }
`;
