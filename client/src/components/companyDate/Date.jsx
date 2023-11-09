import img from "../../assets/BackgroundImg.png";

const InfoContents = [
  {
    id: 1,
    img: img,
    name: "Nome do criador do curso",
    text: "Falar um pouco sobre o curso",
    views: "100",
    postDate: "3 dias atrás",
    videos: [
      {
        id: 1,
        img: img,
        name: "Algum tilulo aqui",
        text: "Descricao do video",
        url: "https://www.youtube.com/embed/4V-qXYhvT7E",
      },
      {
        id: 2,
        img: img,
        name: "Algum tilulo aqui Pt.2",
        text: "Descricao do video",
        url: "https://www.youtube.com/embed/4V-qXYhvT7E",
      },
    ],
  },
];

export default InfoContents;
