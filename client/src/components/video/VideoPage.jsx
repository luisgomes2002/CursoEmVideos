import { Link, useParams } from "react-router-dom";
import { Comments, TextBtn, VideoArea, VideoPageBack } from "./VideoPageStyle";
import { useEffect, useState } from "react";
import InfoContents from "../companyDate/Date";
import ReactPlayer from "react-player";
import { EachVideo, VideoInfo, Videos } from "./VideosWatchStyle";

const VideoPage = () => {
  const infoCompany = useParams();
  const [video, setVideo] = useState({});
  const [company, setCompany] = useState({});

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const findCompany = () => {
    const companyFound = InfoContents.find((item) => item.id == infoCompany.id);
    setCompany(companyFound);
    const videoFound = companyFound.videos.find(
      (item) => item.id == infoCompany.videoId,
    );
    setVideo(videoFound);
  };

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  useEffect(() => {
    findCompany();
  }, [infoCompany.id]);

  return (
    <VideoPageBack>
      <VideoArea>
        <h1>{video.name}</h1>
        <ReactPlayer
          url={video.url}
          controls={true}
          width="100%"
          height="90%"
        />
      </VideoArea>
      <Videos>
        <Comments>
          <h2>Comentários: {comments != 0 ? comments.length : "Nenhum"}</h2>
          {comments.map((comment, index) => (
            <p key={index}>
              <h3>Usuário:</h3>
              {comment}
            </p>
          ))}
          <TextBtn>
            <textarea
              rows="4"
              cols="50"
              placeholder="Adicione um comentário..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <button onClick={addComment}>Adicionar Comentário</button>
          </TextBtn>
        </Comments>
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
    </VideoPageBack>
  );
};

export default VideoPage;
