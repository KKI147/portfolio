import {
  Body,
  ImgComponent,
  Title,
  Wraper,
  Name,
  Content,
} from "./About.styled";

function About() {
  return (
    <Body>
      <ImgComponent src={process.env.PUBLIC_URL + "/img/about.webp"} />
      <Wraper>
        <Title>About</Title>
        <Name>이름 : 김 경 일</Name>
        <Content>학력</Content>
        <div>2010 - 2016 건국대학교(글로컬) 경영학과 졸업</div>
        <div>2022 - 10 ~ 12스파르타코딩클럽 항해99 9기 수료</div>
      </Wraper>
    </Body>
  );
}

export default About;
