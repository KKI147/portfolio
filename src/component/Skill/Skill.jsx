import { Section, Wrapper, Title, Box } from "./Skill.styled";

function Skill() {
  return (
    <Section>
      <Wrapper>
        <Title>Skill</Title>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/html.svg"} alt="html" />
          <div>
            <div>- Dom의 구조와 web에 어떻게 구현되는지 이해하고있습니다.</div>
            <div>
              - Tag와 Meta tag의 개념을 이해하고 각각 필요한 상황에 맞게
              사용할수 있습니다.
            </div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/css.svg"} alt="html" />
          <div>
            <div>- 디자이너님과 협업하여 css publishing 경험이 있습니다.</div>
            <div>
              - media query를 사용하여 반응형 웹을 만들어본 경험이 있습니다.
            </div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/js.svg"} alt="html" />
          <div>
            <div>
              - Javascript의 기초적인 변수, 형변환, 연산자, 함수등을 다룰수
              있습니다.
            </div>
            <div>
              - 변수선언 차이점, 화살표 함수, 구조 분해 할당등 Es6문법을
              이해하고 다룰수 있습니다.
            </div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/react.svg"} alt="html" />
          <div>
            <div>- React의 render 과정을 이해하고 있습니다.</div>
            <div>
              - React의 Life Cycle을 이해하고 있으며 useState, useEffect같은
              hook을 사용할수 있습니다.
            </div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/redux.svg"} alt="html" />
          <div>
            <div>- redux의 작동원리와 전역상태 관리를 다룰수 있습니다.</div>
            <div>
              - 미들웨어인 redux-thunk를 사용하여 비동기 작업을 처리할수
              있습니다.
            </div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/router.png"} alt="html" />
          <div>
            <div>- React-Router의 작동원리를 이해하고 있습니다.</div>
            <div>- React-Router의 hook들을 이해하고 사용할수 있습니다.</div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/style.png"} alt="html" />
          <div>
            <div>
              - react styled component을 사용하여 반복되는 css들을 component화
              할수 있습니다.
            </div>
          </div>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + "/icon/axios.svg"} alt="html" />
          <div>
            <div>
              - Axios를 이용하여 서버과 비동기 HTTP통신을 할수 있습니다.
            </div>
            <div>
              - Error, Success, Complete의 상태를 통해 실행 흐름을 조절할수
              있습니다.
            </div>
          </div>
        </Box>
      </Wrapper>
    </Section>
  );
}

export default Skill;
