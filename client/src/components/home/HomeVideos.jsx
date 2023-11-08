import { VideosArea, Video, VideoInfo, VideoText } from "./HomeVideosStyle";
import img from "../../assets/BackgroundImg.png";
import { TextLimit } from "../../textLimit/TextLimit";

const HomeVideos = () => {
  const InfoContents = [
    {
      id: 1,
      img: img,
      name: "Informe",
      text: " Na seção a seguir, você encontrará não apenas o básico do japonês, mas também um guia completo para estudar de forma independente, sem depender de cursos.",
      views: "100",
      postDate: "3 dias atrás",
    },
    {
      id: 2,
      img: img,
      name: "Informe",
      text: "Porém, caso você sinta a necessidade de adquirir um curso ou tenha recursos disponíveis, mais adiante compartilharei alguns cursos que conheço, juntamente com os respectivos links do criador.",
      views: "10",
      postDate: "1 minuto atrás",
    },
    {
      id: 3,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
    {
      id: 4,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
    {
      id: 5,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
    {
      id: 6,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
    {
      id: 7,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
    {
      id: 8,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
    {
      id: 9,
      img: img,
      name: "Informe",
      text: "Apenas para relembrar, este site não tem como objetivo principal ensinar o japonês, mas sim orientar o estudante. Vamos começar!",
      views: "10 mil",
      postDate: "1 mês atrás",
    },
  ];

  return (
    <VideosArea>
      {InfoContents.map((info) => {
        return (
          <Video key={info.id}>
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
        );
      })}
    </VideosArea>
  );
};

export default HomeVideos;
