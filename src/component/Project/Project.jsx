import {
  Section,
  Wrapper,
  Title,
  ImgComponent,
  ImgBox,
  Content,
  Hover,
  Stack,
  HoverBox,
  Box,
  SubTitle,
  StackBox,
  ModalBox,
  Text,
  ModalTitle,
  ModalBtn,
  ModalHead,
} from "../Project/Project.styled";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";

function Project() {
  const [isOpen, setIsOpen] = useState(false);
  const type = ["vongole", "velog", "velly", "todo", "pote"];

  const modalOpen = () => {
    setIsOpen(!isOpen);
  };
  const Name = ["Vongole", "Vellog", "Vall of race", "My todo", "Portfolio"];
  /**
   * layout: 가로
   * Project Name: vall of race
   * Stack : html5, css3, js, react
   * Role : Front-end
   * Descript, : 배민을 오마주한 음식주문 서비스
   * Tec,:
   */

  // useEffect(() => {
  //   if (swiper.activeIndex === 3) {
  //     setModalOne(false);
  //     console.log("실행");
  //   }
  // }, [swiper.activeIndex]);

  // useEffect(() => {}, []);

  return (
    <Section>
      <Wrapper>
        <Title>Project</Title>
        <ImgBox>
          <HoverBox type="vongole" onClick={modalOpen}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
            <Hover>
              <div>Vongole</div>
            </Hover>
          </HoverBox>
          <HoverBox type="vellog" onClick={modalOpen}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
            <Hover>
              <div>Velog</div>
            </Hover>
          </HoverBox>
          <HoverBox type="velly" onClick={modalOpen}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
            <Hover>
              <div>Vall of race</div>
            </Hover>
          </HoverBox>
          <HoverBox type="todo" onClick={modalOpen}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
            <Hover>
              <div>My todo</div>
            </Hover>
          </HoverBox>
          <HoverBox type="pote" onClick={modalOpen}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/pote.PNG"} />
            <Hover>
              <div>Portfolio</div>
            </Hover>
          </HoverBox>
        </ImgBox>
      </Wrapper>
      <Footer />

      {isOpen === false ? (
        ""
      ) : (
        <>
          <Modal modalOpen={modalOpen} type={type} Name={Name} />
        </>
      )}

      {/* {modalOne === false ? (
        ""
      ) : (
        <ModalBox>
          <Content>
            <ModalHead>
              <ModalTitle>Vongole</ModalTitle>
              <ModalBtn onClick={() => setModalOne(false)}>X</ModalBtn>
            </ModalHead>
            <Box>
              <SubTitle>Stack</SubTitle>
              <StackBox>
                <Stack>HTML5</Stack>
                <Stack>CSS3</Stack>
                <Stack>JavaScript</Stack>
                <Stack>ReactJS</Stack>
                <Stack>React-Router</Stack>
                <Stack>Redux-Thunk</Stack>
                <Stack>styled-components</Stack>
                <Stack>Axios</Stack>
              </StackBox>
            </Box>
            <Box>
              <SubTitle>Role</SubTitle>
              <Text>- Front-end</Text>
            </Box>
            <Box>
              <SubTitle>Description</SubTitle>
              <Text>- 봉사활동 매칭 서비스</Text>
            </Box>

            <SubTitle>Tec</SubTitle>
            <Text>
              <div>- Axios를 통한 게시판 댓글 CRUD 기능 구현</div>
              <div>
                - Kakao Map API를 통해 우편주소값을 통한 Kakao Map 특정지역
                Marker 표기 개발
              </div>
              <div>
                - React-Calendar를 사용한 달력 구현, BE 통신 후 월별 봉사일정 및
                개인 봉사일정 Calendar 표기 구현
              </div>
              <div>- Fimga Design File {">"} HTML, CSS Publishing</div>
            </Text>
          </Content>
        </ModalBox>
      )}


      {modalTwo === false ? (
        ""
      ) : (
        <ModalBox>
         <Content>
          <ModalHead>
            <ModalTitle>Velog</ModalTitle>
            <ModalBtn onClick={modalOpen}>X</ModalBtn>
          </ModalHead>
          <Box>
            <SubTitle>Stack</SubTitle>
            <StackBox>
              <Stack>HTML5</Stack>
              <Stack>CSS3</Stack>
              <Stack>JavaScript</Stack>
              <Stack>ReactJS</Stack>
              <Stack>React-Router</Stack>
              <Stack>Redux-Thunk</Stack>
              <Stack>styled-components</Stack>
              <Stack>Axios</Stack>
            </StackBox>
          </Box>
          <Box>
            <SubTitle>Role</SubTitle>
            <Text>- Front-end</Text>
          </Box>
          <Box>
            <SubTitle>Description</SubTitle>
            <Text>- 벨로그 클론코딩</Text>
          </Box>

          <SubTitle>Tec</SubTitle>
          <Text>
            <div>- Toast editor를 이용한 게시글 마크다운 문법적용 개발</div>
            <div>- Axios를 통한 게시글 CRUD 기능 구현</div>
            <div>- Form data를 활용 이미지 미리보기 및 업로드 구현</div>
            <div>- css를 활용한 Nav-bar 구현</div>
          </Text>
        </Content>
        </ModalBox>
      )}


      {modalThree === false ? (
        ""
      ) : (
        <ModalBox>
          <Content>
            <ModalHead>
              <ModalTitle>Vall of race</ModalTitle>
              <ModalBtn onClick={() => setModalThree(false)}>X</ModalBtn>
            </ModalHead>
            <Box>
              <SubTitle>Stack</SubTitle>
              <StackBox>
                <Stack>HTML5</Stack>
                <Stack>CSS3</Stack>
                <Stack>JavaScript</Stack>
                <Stack>ReactJS</Stack>
                <Stack>React-Router</Stack>
                <Stack>Redux-Thunk</Stack>
                <Stack>styled-components</Stack>
                <Stack>Axios</Stack>
              </StackBox>
            </Box>
            <Box>
              <SubTitle>Role</SubTitle>
              <Text>- Front-end</Text>
            </Box>
            <Box>
              <SubTitle>Description</SubTitle>
              <Text>- 배민을 오마주한 음식주문 서비스</Text>
            </Box>

            <SubTitle>Tec</SubTitle>
            <Text>
              <div>- Boolean을 활용 회원가입 Type 구분</div>
              <div>- Jwt Token을 통한 회원가입 구현 개발</div>
              <div>- 정규식 표현을 통한 로그인 유효성 검사 기능</div>
              <div>- Axios를 통한 게시글 CRD 구현</div>
            </Text>
          </Content>
        </ModalBox>
      )}


      {modalFour === false ? (
        ""
      ) : (
        <ModalBox>
          <Content>
            <ModalHead>
              <ModalTitle>My todo</ModalTitle>
              <ModalBtn onClick={() => setModalFour(false)}>X</ModalBtn>
            </ModalHead>
            <Box>
              <SubTitle>Stack</SubTitle>
              <StackBox>
                <Stack>HTML5</Stack>
                <Stack>CSS3</Stack>
                <Stack>JavaScript</Stack>
                <Stack>ReactJS</Stack>
                <Stack>styled-components</Stack>
              </StackBox>
            </Box>
            <Box>
              <SubTitle>Role</SubTitle>
              <Text>- Individual</Text>
            </Box>
            <Box>
              <SubTitle>Description</SubTitle>
              <Text>- 할일 목록 앱</Text>
            </Box>

            <SubTitle>Tec</SubTitle>
            <Text>
              <div>- 게시글 작성,삭제</div>
            </Text>
          </Content>
        </ModalBox>
      )}


      {modalFive === false ? (
        ""
      ) : (
        <ModalBox>
          <Content>
            <ModalHead>
              <ModalTitle>Portfolio</ModalTitle>
              <ModalBtn onClick={() => setModalFive(false)}>X</ModalBtn>
            </ModalHead>
            <Box>
              <SubTitle>Stack</SubTitle>
              <StackBox>
                <Stack>HTML5</Stack>
                <Stack>CSS3</Stack>
                <Stack>JavaScript</Stack>
                <Stack>ReactJS</Stack>

                <Stack>styled-components</Stack>
              </StackBox>
            </Box>
            <Box>
              <SubTitle>Role</SubTitle>
              <Text>- Individual</Text>
            </Box>
            <Box>
              <SubTitle>Descript</SubTitle>
              <Text>- 포트폴리오</Text>
            </Box>

            <SubTitle>Tec</SubTitle>
            <Text>
              <div>- React-swiper을 활용한 스크롤 구현</div>
              <div>- useState를 통한 modal창 개발</div>
            </Text>
          </Content>
        </ModalBox>
      )} */}
    </Section>
  );
}

export default Project;
