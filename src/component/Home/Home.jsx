import { Body, ImgComponent, Title } from "./Home.styled";

function Home() {
  return (
    <Body>
      <ImgComponent src={process.env.PUBLIC_URL + "/img/bg.jpg"} />
      <Title>Portfolio</Title>
    </Body>
  );
}

export default Home;
