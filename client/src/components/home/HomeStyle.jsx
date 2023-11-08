import styled from "styled-components";

export const HomeArea = styled.div`
  display: grid;
  grid-template-columns: 13% 1fr;
  background-color: #141414;
`;

export const HomeInfo = styled.div`
  padding: 20px 0;
  padding-right: 20px;

  h2 {
    padding: 5px;
    text-align: center;
    color: #fff;
  }

  hr {
    border: 1px solid #505050;
  }
`;
