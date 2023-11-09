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

const HomeVideos = () => {
  return (
    <VideoAndBanner>
      <Banner>
        <img src="" alt="banner" />
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
