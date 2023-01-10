import { Body, ImgComponent } from "./Home.styled";

function Home() {
  return (
    <Body>
      <ImgComponent src={process.env.PUBLIC_URL + "/img/bg.jpg"} />
    </Body>
  );
}

export default Home;
