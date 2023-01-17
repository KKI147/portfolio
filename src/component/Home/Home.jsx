import { Section, Title, SubTitle, ImgComponent } from "./Home.styled";

function Home() {
  return (
    <Section>
      <Title>경청하는 프론트엔드 개발자 김경일입니다.</Title>
      <SubTitle>
        제 주장만을 내세우기 보다는 다른 사람의 의견을 경청하는 자세를 가지고
        문제를 조화롭게 해결하려고 노력합니다.
      </SubTitle>
      <ImgComponent src={process.env.PUBLIC_URL + "/icon/mouse.svg"} />
    </Section>
  );
}

export default Home;
