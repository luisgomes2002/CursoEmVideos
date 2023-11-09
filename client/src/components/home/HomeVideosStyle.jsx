import styled from "styled-components";

export const VideosArea = styled.section`
  background-color: #141414;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  a {
    text-decoration: none;
  }

  p {
    color: #fff;
  }
`;

export const Video = styled.div`
  margin: 30px 10px 0 10px;
  cursor: pointer;
  height: 300px;

  img {
    background-color: #fff;
    border-radius: 20px;
    height: 174px;
    width: 310px;
    margin-bottom: 2%;
    transition: 0.2s ease-in;
  }

  img:hover {
    border-radius: 0%;
    transition: 0.2s ease-in;
  }

  h2 {
    padding-top: 5px;
    font-size: 14px;
    color: #717171;
  }

  p {
    font-size: 15px;
  }
`;

export const VideoInfo = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr;
  padding: 5px 10px 0 10px;

  img {
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }

  img:hover {
    border-radius: 50%;
  }
`;

export const VideoText = styled.div`
  padding: 0 40px 0 0;
`;

export const VideoAndBanner = styled.div``;

export const Banner = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  img {
    width: 1200px;
    height: 400px;
    background-color: #fff;
  }
`;
