import { FooterArea, FooterText } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterArea>
      <div>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-github"></i>
        <FooterText>
          <h1>NOME DO SITE ・ © 2023. nome do site</h1>
        </FooterText>
      </div>
    </FooterArea>
  );
};

export default Footer;
