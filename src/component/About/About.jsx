import {
  Body,
  ImgComponent,
  Title,
  Wraper,
  Name,
  Email,
  Address,
  Education,
  Birthday,
} from "./About.styled";

function About() {
  return (
    <Body>
      <ImgComponent src={process.env.PUBLIC_URL + "/img/about.webp"} />
      <Wraper>
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
          <Address /> <span>서울특별시 구로구</span>
        </div>
        <div>
          <Education />
          <span>
            <li>2010 - 2016 건국대학교(글로컬) 경영학과 졸업</li>
            <li>2022 - 10 ~ 12스파르타코딩클럽 항해99 9기 수료</li>
          </span>
        </div>
      </Wraper>
    </Body>
  );
}

export default About;
