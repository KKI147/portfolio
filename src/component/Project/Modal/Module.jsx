import {
  Stack,
  Box,
  SubTitle,
  StackBox,
  Text,
  ModalTitle,
  ModalBtn,
  ModalHead,
  Date,
} from "./Module.styled";

export const Vongole = ({ setIsOpen }) => {
  return (
    <>
      <ModalHead>
        <ModalTitle>
          <div>Vongole</div>
          <Date>DATE : 2022. 11 ~ 12(6주)</Date>
        </ModalTitle>
        <ModalBtn onClick={() => setIsOpen(false)}>X</ModalBtn>
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
          - Kakao Map API를 통해 우편주소값을 통한 Kakao Map 특정지역 Marker
          표기 개발
        </div>
        <div>
          - React-Calendar를 사용한 달력 구현, BE 통신 후 월별 봉사일정 및 개인
          봉사일정 Calendar 표기 구현
        </div>
        <div>- Fimga Design File {">"} HTML, CSS Publishing</div>
      </Text>
    </>
  );
};

export const Velog = ({ setIsOpen }) => {
  return (
    <>
      <ModalHead>
        <ModalTitle>
          <div>Velog</div> <Date>DATE : 2022. 11(1주)</Date>
        </ModalTitle>
        <ModalBtn onClick={() => setIsOpen(false)}>X</ModalBtn>
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
        <Text>- Velog 클론코딩</Text>
      </Box>

      <SubTitle>Tec</SubTitle>
      <Text>
        <div>- Toast editor를 이용한 게시글 마크다운 문법적용 개발</div>
        <div>- Axios를 통한 게시글 CRUD 기능 구현</div>
        <div>- Form data를 활용 이미지 미리보기 및 업로드 구현</div>
        <div>- css를 활용한 Nav-bar 구현</div>
      </Text>
    </>
  );
};

export const Velly = ({ setIsOpen }) => {
  return (
    <>
      <ModalHead>
        <ModalTitle>
          <div>Vall of race</div> <Date>DATE : 2022. 11(1주)</Date>
        </ModalTitle>
        <ModalBtn onClick={() => setIsOpen(false)}>X</ModalBtn>
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
        <Text>- 배달의민족을 오마주한 음식주문 서비스</Text>
      </Box>

      <SubTitle>Tec</SubTitle>
      <Text>
        <div>- 회원가입시 유형에 따른 서비스 페이지 로직 분기</div>
        <div>- Jwt Token을 통한 회원가입 구현 개발</div>
        <div>- 정규식 표현을 통한 로그인 유효성 검사 기능</div>
        <div>- Axios를 통한 게시글 CRD 구현</div>
      </Text>
    </>
  );
};

export const Todo = ({ setIsOpen }) => {
  return (
    <>
      <ModalHead>
        <ModalTitle>
          <div>My todo</div>
          <Date>DATE : 2022. 10(1주)</Date>
        </ModalTitle>
        <ModalBtn onClick={() => setIsOpen(false)}>X</ModalBtn>
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
    </>
  );
};

export const Portfolio = ({ setIsOpen }) => {
  return (
    <>
      <ModalHead>
        <ModalTitle>
          <div>Portfolio</div>
          <Date>DATE : 2023. 01(4주)</Date>
        </ModalTitle>
        <ModalBtn onClick={() => setIsOpen(false)}>X</ModalBtn>
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
        <div>- React-swiper를 활용한 스크롤 구현</div>
        <div>- React-Portal을 통한 modal창 구현</div>
        <div>- React-slider를 통한 carousel 구현</div>
      </Text>
    </>
  );
};
