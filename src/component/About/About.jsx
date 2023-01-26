import {
  Section,
  Title,
  Wrapper,
  EducationList,
  Tag,
  Content,
} from "./About.styled";

function About() {
  return (
    <Section>
      <Wrapper>
        <Title>About</Title>
        <div>
          <Tag>• Name</Tag>
          <Content>- Kim kyeong il</Content>
        </div>
        <div>
          <Tag>• Role</Tag>
          <Content>- Fe(Front-End Developer)</Content>
        </div>
        <div>
          <Tag>• Birthday</Tag>
          <Content>- 1991. 10. 24</Content>
        </div>
        <div>
          <Tag>• Email</Tag>
          <Content>- rla123dlf@gmail.com</Content>
        </div>
        <div>
          <Tag>• Education</Tag>
          <Content>
            <EducationList>
              <div>- 2010. 03 ~ 2016. 03 건국대학교(글로컬) 경영학과 입학</div>
              <div>- 2011. ~ 2012. 해군병장 만기 전역</div>
              <div>- 2010. 03 ~ 2016. 02 졸업</div>
              <div>- 2022. 09 스파르타코딩클럽 항해99 9기 참가</div>
              <div>- 2022. 10 풀스택 미니 프로젝트(협업), (1주)</div>
              <div>- 2022. 10 알고리즘 기초 (1주)</div>
              <div>- 2022. 10 ~ 11 React 기본/심화 (3주)</div>
              <div>- 2022. 11 미니 프로젝트(협업), (1주)</div>
              <div>- 2022. 11 클론코딩(협업), (1주)</div>
              <div>- 2022. 12 실전 프로젝트(협업), (5주)</div>
              <div>- 2022. 12 스파르타코딩클럽 항해99 9기 수료</div>
            </EducationList>
          </Content>
        </div>
      </Wrapper>
    </Section>
  );
}

export default About;
