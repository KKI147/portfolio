import {
  Section,
  Title,
  Wrapper,
  Name,
  Email,
  Address,
  Education,
  Birthday,
  List,
  EducationList,
} from "./About.styled";

function About() {
  return (
    <Section>
      <Wrapper>
        <Title>About</Title>
        <List>
          <Name />
          <span>김 경 일</span>
        </List>
        <List>
          <Birthday />
          <span>1991. 10. 24</span>
        </List>
        <List>
          <Email />
          <span>rla123dlf@gmail.com</span>
        </List>
        <List>
          <Address />
          <span>서울특별시 구로구</span>
        </List>
        <EducationList>
          <Education />
          <div>
            <div>2010.03 ~ 2016.02 입학</div>
            <div>군대</div>
            <div>2010.03 ~ 2016.02 건국대학교(글로컬) 경영학과 졸업</div>
            <div>2022.10 ~ 12 스파르타코딩클럽 항해99 9기 수료</div>
          </div>
        </EducationList>
      </Wrapper>
    </Section>
  );
}

export default About;
