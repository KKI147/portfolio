import {
  Section,
  Wrapper,
  Title,
  ImgComponent,
  ImgBox,
  Content,
  Stack,
} from "../Project/Project.styled";
import Footer from "../Footer/Footer";

function Project() {
  /**
   * layout: 가로
   * Project Name: vall of race
   * Stack : html5, css3, js, react
   * Role : Front-end
   * Descript, : 배민을 오마주한 음식주문 서비스
   * Tec,:
   */

  return (
    <Section>
      <Wrapper>
        <Title>Project</Title>
        <ImgBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
          <Content>
            <span>Project: Vongole</span>
            <span>
              Stack: <Stack>HTML5</Stack>
              <Stack>CSS3</Stack>
              <Stack>JavaScript</Stack>
              <Stack>ReactJS</Stack>
              <Stack>React-Router</Stack>
              <Stack>Redux-Thunk</Stack>
              <Stack>styled-components</Stack>
              <Stack>Axios</Stack>
            </span>
            <span>Role: Front-end</span>
            <span>Descript: 봉사활동 매칭 서비스</span>
            <span>
              Tec:
              <ol start="1">
                <li> 비동기처리를 통한 댓글 CRUD</li>
                <li>
                  카카오맵 API를 통해 우편주소값을 이용해서 지도에 해당 위치
                  표시 개발
                </li>
                <li>
                  달력을 통한 월별봉사일정 확인 및 개인 봉사일정 확인 구현
                </li>
                <li>
                  오픈 후 2주동안 유저 피드백 및 개선사항 적용후 서비스 중단
                </li>
              </ol>
            </span>
          </Content>
        </ImgBox>
        <ImgBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
          <Content>
            <span>Project: Velog</span>
            <span>
              Stack: <Stack>HTML5</Stack>
              <Stack>CSS3</Stack>
              <Stack>JavaScript</Stack>
              <Stack>ReactJS</Stack>
              <Stack>React-Router</Stack>
              <Stack>Redux-Thunk</Stack>
              <Stack>styled-components</Stack>
              <Stack>Axios</Stack>
            </span>
            <span>Role: Front-end</span>
            <span>Descript: 벨로그 클론코딩</span>
            <span>
              Tec:
              <ol start="1">
                <li>에디터를 통한 게시글 마크다운 문법적용 개발</li>
                <li> 폼 데이터를 통한 이미지 미리보기 및 업로드 구현</li>
                <li> 비동기통신을 통해 게시글 CRUD 구현</li>
              </ol>
            </span>
          </Content>
        </ImgBox>
        <ImgBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
          <Content>
            <span>Project: Vall of race</span>
            <span>
              Stack: <Stack>HTML5</Stack>
              <Stack>CSS3</Stack>
              <Stack>JavaScript</Stack>
              <Stack>ReactJS</Stack>
              <Stack>React-Router</Stack>
              <Stack>Redux-Thunk</Stack>
              <Stack>styled-components</Stack>
              <Stack>Axios</Stack>
            </span>
            <span>Role: Front-end</span>
            <span>Descript: 배민을 오마주한 음식주문 서비스</span>
            <span>
              Tec:
              <ol start="1">
                <li> Jwt토큰을 통한 회원가입 구현 개발</li>
                <li> 정규식 표현을 통한 로그인 유효성 검사 기능</li>
              </ol>
            </span>
          </Content>
        </ImgBox>
        <ImgBox>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
          <Content>
            <span>Project: My todo</span>
            <span>
              Stack: <Stack>HTML5</Stack>
              <Stack>CSS3</Stack>
              <Stack>JavaScript</Stack>
              <Stack>ReactJS</Stack>
              <Stack>styled-components</Stack>
            </span>
            <span>Role: Front-end</span>
            <span>Descript: 할일 목록 앱</span>
            <span>
              Tec:
              <ol start="1">
                <li> 게시글 작성,삭제</li>
              </ol>
            </span>
          </Content>
        </ImgBox>

        {/* <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
          <Content>
            <h3>Velog</h3>
            <br />
            <h4>벨로그 클론코딩</h4>
            <ol start="1">
              <li>에디터를 통한 게시글 마크다운 문법적용 개발</li>
              <li> 폼 데이터를 통한 이미지 미리보기 및 업로드 구현</li>
              <li> 비동기통신을 통해 게시글 CRUD 구현</li>
            </ol>
          </Content>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
          <Content>
            <h3>Vongole</h3>
            <br />
            <h4>봉사활동 매칭 서비스</h4>
            <ol start="1">
              <li> 비동기처리를 통한 댓글 CRUD</li>
              <li>
                카카오맵 API를 통해 우편주소값을 이용해서 지도에 해당 위치 표시
                개발
              </li>
              <li>달력을 통한 월별봉사일정 확인 및 개인 봉사일정 확인 구현</li>
              <li>
                오픈 후 2주동안 유저 피드백 및 개선사항 적용후 서비스 중단
              </li>
            </ol>
          </Content>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
          <Content>
            <h3>My todo</h3>
            <br />
            <h4>할일 목록 앱</h4>
            <ol start="1">
              <li> 게시글 작성,삭제</li>
            </ol>
          </Content>
        </div> */}
      </Wrapper>
      <Footer />
    </Section>
  );
}

export default Project;
