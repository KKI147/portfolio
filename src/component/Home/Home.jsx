import { Section, Wrapper, Title, SubTitle, ImgComponent } from "./Home.styled";

function Home() {
  // const content = "";
  // const text = document.querySelector(".text");
  // let i = 0;

  // function typing() {
  //   let txt = content[i++];
  //   text.innerHTML += txt === "\n" ? "<br/>" : txt;
  //   if (i > content.length) {
  //     text.textContent = "";
  //     i = 0;
  //   }
  // }
  // setInterval(typing, 200);

  return (
    <Section>
      <Wrapper>
        <Title>경청하는 프론트엔드 개발자 김경일입니다.</Title>

        <SubTitle>
          제 주장만을 내세우기 보다는 다른 사람의 의견을 경청하는 자세를 가지고
          문제를 조화롭게 해결하려고 노력합니다.
        </SubTitle>
      </Wrapper>

      <ImgComponent src={process.env.PUBLIC_URL + "/icon/mouse.svg"} />
    </Section>
  );
}

export default Home;
