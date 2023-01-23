import { useState } from "react";
import {
  Section,
  Wrapper,
  Title,
  ImgComponent,
  ImgBox,
  Hover,
  HoverBox,
} from "../Project/Project.styled";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";

import { Vongole, Velog, Velly, Todo, Portfolio } from "../Modal/Module";

function Project() {
  const [project, setProject] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = (value) => {
    setProject(value);
    setIsOpen(!isOpen);
  };

  return (
    <Section>
      <Wrapper>
        <Title>Project</Title>
        <ImgBox>
          <HoverBox onClick={() => modalOpen("vongole")}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/vongole.PNG"} />
            <Hover>
              <div>Vongole</div>
            </Hover>
          </HoverBox>
          <HoverBox onClick={() => modalOpen("velog")}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/velog.PNG"} />
            <Hover>
              <div>Velog</div>
            </Hover>
          </HoverBox>
          <HoverBox onClick={() => modalOpen("velly")}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/velly.PNG"} />
            <Hover>
              <div>Vall of race</div>
            </Hover>
          </HoverBox>
          <HoverBox onClick={() => modalOpen("todo")}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/todo.PNG"} />
            <Hover>
              <div>My todo</div>
            </Hover>
          </HoverBox>
          <HoverBox onClick={() => modalOpen("portfolio")}>
            <ImgComponent src={process.env.PUBLIC_URL + "/img/pote.PNG"} />
            <Hover>
              <div>Portfolio</div>
            </Hover>
          </HoverBox>
        </ImgBox>
      </Wrapper>
      <Footer />

      {isOpen ? (
        <Modal>
          {project === "vongole" ? <Vongole setIsOpen={setIsOpen} /> : ""}
          {project === "velog" ? <Velog setIsOpen={setIsOpen} /> : ""}
          {project === "velly" ? <Velly setIsOpen={setIsOpen} /> : ""}
          {project === "todo" ? <Todo setIsOpen={setIsOpen} /> : ""}
          {project === "portfolio" ? <Portfolio setIsOpen={setIsOpen} /> : ""}
        </Modal>
      ) : (
        ""
      )}
    </Section>
  );
}

export default Project;
