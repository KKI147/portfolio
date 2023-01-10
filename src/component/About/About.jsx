import { Body, Title, Content } from "./About.styled";

function About() {
  return (
    <Body>
      <wraper>
        <Title>About</Title>
        <Content>이름</Content>
        <div>김 경 일</div>
        <Content>학력</Content>2010 - 2016 건국대학교(글로컬) 경영학과 졸업
        <div>2022 - 10 ~ 12스파르타코딩클럽 항해99 9기 수료</div>
      </wraper>
    </Body>
  );
}

export default About;
