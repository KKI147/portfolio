import {
  Body,
  Title,
  ImgComponent,
  ImgBox,
  Content,
} from "../Project/Project.styled";
import Footer from "../Footer/Footer";

function Project() {
  return (
    <Body>
      <div>
        <Title>Project</Title>
      </div>
      <ImgBox>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
          <Content>
            <h4>배민을 오마주한 음식주문 서비스</h4>
            <ol start="1">
              <li> Jwt토큰을 통한 회원가입 구현 개발</li>
              <li> 정규식 표현을 통한 로그인 유효성 검사 기능</li>
            </ol>
          </Content>
        </div>
        <div>
          <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
          <Content>
            <h4> 벨로그 클론코딩</h4>
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
            <h4>할일 목록 앱</h4>
            <ol start="1">
              <li> 게시글 작성,삭제</li>
            </ol>
          </Content>
        </div>
      </ImgBox>
      <Footer />
    </Body>
  );
}

export default Project;
