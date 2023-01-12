import { FooterComponent, ImgComponent } from "./Footer.styled";

function Footer() {
  return (
    <FooterComponent>
      <span>
        <a href="http://www.naver.com">
          <ImgComponent src={process.env.PUBLIC_URL + "/icon/github.svg"} />
        </a>
        <a href="http://www.naver.com">
          <ImgComponent src={process.env.PUBLIC_URL + "/icon/notion.svg"} />
        </a>
        <a href="http://www.naver.com">
          <ImgComponent src={process.env.PUBLIC_URL + "/icon/velog.svg"} />
        </a>
      </span>
    </FooterComponent>
  );
}

export default Footer;
