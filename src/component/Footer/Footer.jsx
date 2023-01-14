import { FooterComponent, ImgComponent } from "./Footer.styled";

function Footer() {
  const git = () => {
    window.open("https://github.com/KKI147", "Github");
  };

  const notion = () => {
    window.open(
      "https://dune-freighter-a1b.notion.site/4afde4369e214c9e9ca3b272a28710a5?v=b153f13ec78b4874b0893e77e2c39c90",
      "Notion"
    );
  };
  const velog = () => {
    window.open("https://velog.io/@rla123dlf", "Velog");
  };

  return (
    <FooterComponent>
      <span>
        <ImgComponent
          onClick={git}
          src={process.env.PUBLIC_URL + "/icon/github.svg"}
        />
        <ImgComponent
          onClick={notion}
          src={process.env.PUBLIC_URL + "/icon/notion.svg"}
        />
        <ImgComponent
          onClick={velog}
          src={process.env.PUBLIC_URL + "/icon/velog.svg"}
        />
        <div>© Copyright 2023. Made by Kim kyeongill</div>
      </span>
    </FooterComponent>
  );
}

export default Footer;
