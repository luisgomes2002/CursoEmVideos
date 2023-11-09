import styled from "styled-components";

export const BackGroundCourse = styled.div`
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const Banner = styled.div`
  margin: 10px 100px;
  width: 1200px;
  height: 500px;
  background-color: #191c1f;
  border-radius: 25px;
`;

export const BannerInfo = styled.div`
  margin: 150px 0 100px 50px;

  a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  h1 {
    color: #fff;
    margin: 10px 0;
    font-size: 50px;
  }
  h2 {
    color: #fff;
    margin: 10px 400px 10px 0;
    font-size: 18px;
  }

  button {
    background-color: #fff;
    border: none;
    width: 200px;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const Videos = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  width: 63%;

  h1 {
    color: #fff;
    font-size: 40px;
  }

  p {
    color: #fff;
  }
`;

export const EachVideo = styled.div`
  background-color: #191c1f;
  padding: 10px;
  border-radius: 25px;
  display: flex;
  margin: 20px 0;

  img {
    width: 250px;
    border-radius: 25px;
  }

  h1 {
    color: #fff;
    font-size: 20px;
  }
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;

  p {
    margin: 20px;
  }
`;
