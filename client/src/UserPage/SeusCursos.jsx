import { AreaVideos, CadaVideo, SemVideos } from "./VideosStyle";
import InfoContents from "../components/companyDate/Date";
import { Link } from "react-router-dom";
import {
  Video,
  VideoInfo,
  VideoText,
} from "../components/home/HomeVideosStyle";
import { TextLimit } from "../textLimit/TextLimit";

const SeusCursos = () => {
  return (
    <AreaVideos>
      <h1>Seus Cursos Comprados, Total: {InfoContents.length}</h1>
      <CadaVideo>
        {InfoContents.length > 0 ? (
          InfoContents.map((itens) => {
            return (
              <Link to={`/${itens.name}/${itens.id}`} key={itens.id}>
                <Video>
                  <img src={itens.img} alt="img" />
                  <VideoInfo>
                    <img src="" alt="" />
                    <VideoText>
                      <TextLimit text={itens.text} limit={60} />
                      <h2>{itens.name}</h2>
                    </VideoText>
                  </VideoInfo>
                </Video>
              </Link>
            );
          })
        ) : (
          <SemVideos>
            <h1>Você ainda não comprou nenhum curso</h1>
            <img src="" alt="" />
          </SemVideos>
        )}
      </CadaVideo>
    </AreaVideos>
  );
};

export default SeusCursos;
