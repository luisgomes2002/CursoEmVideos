import {
  BackGroundCourse,
  Banner,
  Videos,
  BannerInfo,
  EachVideo,
  VideoInfo,
} from "./VideosWatchStyle";
import InfoContents from "../companyDate/Date";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const VideosWatch = () => {
  const infoCompany = useParams();
  const [company, setCompany] = useState({});

  const findCompany = () => {
    const companyFound = InfoContents.find((item) => item.id == infoCompany.id);
    setCompany(companyFound);
  };

  useEffect(() => {
    findCompany();
  }, [infoCompany.id]);

  return (
    <BackGroundCourse>
      <Banner>
        <BannerInfo>
          {company ? (
            <>
              <Link to="/">
                <i className="fa-solid fa-arrow-left"></i> Voltar
              </Link>
              <h1>{company.name}</h1>
              <h2>{company.text}</h2>
              <button>Continuar assistindo</button>
            </>
          ) : (
            <p>Nada encontrado</p>
          )}
        </BannerInfo>
      </Banner>
      <Videos>
        <h1>Videos: {company.videos ? company.videos.length : "Nenhum"}</h1>
        {company.videos ? (
          company.videos.map((itens) => {
            return (
              <Link
                to={`/${company.name}/${company.id}/${itens.name}/${itens.id}`}
                key={itens.id}
              >
                <EachVideo>
                  <img src={itens.img} alt="" />
                  <VideoInfo>
                    <h1>{itens.name}</h1>
                    <p>{itens.text}</p>
                  </VideoInfo>
                </EachVideo>
              </Link>
            );
          })
        ) : (
          <h1>Sem videos</h1>
        )}
      </Videos>
    </BackGroundCourse>
  );
};

export default VideosWatch;
