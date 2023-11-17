import {
  VideosArea,
  Video,
  VideoInfo,
  VideoText,
  VideoAndBanner,
  Banner,
} from "./HomeVideosStyle";
import { TextLimit } from "../../textLimit/TextLimit";
import { Link } from "react-router-dom";
import InfoContents from "../companyDate/Date";
import { useEffect, useState } from "react";
import img from "../../assets/BackgroundImg.png";
import img2 from "../../assets/test.jpg";

const HomeVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const slides = [img, img2];

  return (
    <VideoAndBanner>
      <Banner>
        <button onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img src={slides[currentIndex]} alt="" />
        <button onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </Banner>
      <VideosArea>
        {InfoContents.map((info) => {
          return (
            <Link to={`/${info.name}/${info.id}`} key={info.id}>
              <Video>
                <img src={info.img} alt="img" />
                <VideoInfo>
                  <img src="" alt="" />
                  <VideoText>
                    <TextLimit text={info.text} limit={60} />
                    <h2>{info.name}</h2>
                    <h2>
                      {info.views} views ・ {info.postDate}
                    </h2>
                  </VideoText>
                </VideoInfo>
              </Video>
            </Link>
          );
        })}
      </VideosArea>
    </VideoAndBanner>
  );
};

export default HomeVideos;
