import {
  Section,
  Title,
  Wrapper,
  Name,
  Email,
  Address,
  Education,
  Birthday,
} from "./About.styled";

function About() {
  return (
    <Section>
      <Wrapper>
        <Title>About</Title>
        <div>
          <Name />
          <span>김 경 일</span>
        </div>
        <div>
          <Birthday />
          <span>1991.10.24</span>
        </div>
        <div>
          <Email />
          <span>rla123dlf@gmail.com</span>
        </div>
        <div>
          <Address />
          <span>서울특별시 구로구</span>
        </div>
        <div>
          <Education />
          <ul>
            <li>2010.03 ~ 2016.02 입학</li>
            <li>군대</li>
            <li>2010.03 ~ 2016.02 건국대학교(글로컬) 경영학과 졸업</li>
            <li>
              <span>2022.10 ~ 12</span>
              <span>스파르타코딩클럽 항해99 9기 수료</span>
            </li>
          </ul>
        </div>
      </Wrapper>
    </Section>
  );
}

export default About;
