import {
  Content,
  Stack,
  Box,
  SubTitle,
  StackBox,
  ModalBox,
  Text,
  ModalTitle,
  ModalBtn,
  ModalHead,
} from "./Modul.styled";

export const Vongole = ({ setIsOpen }) => {
  return (
    <ModalBox>
      <Content>
        <ModalHead>
          <ModalTitle>Vongole</ModalTitle>
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
            - React-Calendar를 사용한 달력 구현, BE 통신 후 월별 봉사일정 및
            개인 봉사일정 Calendar 표기 구현
          </div>
          <div>- Fimga Design File {">"} HTML, CSS Publishing</div>
        </Text>
      </Content>
    </ModalBox>
  );
};

export const Velog = ({ setIsOpen }) => {
  <ModalBox>
    <Content>
      <ModalHead>
        <ModalTitle>Vongole</ModalTitle>
        {/* <ModalBtn onClick={() => modalOpen(false)}>X</ModalBtn> */}
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
  </ModalBox>;
};
