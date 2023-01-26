import { useState } from "react";
import { Section, Wrapper, Title } from "../Project/Project.styled";
import Modal from "./Modal/Modal";
import Footer from "../Footer/Footer";
import Slider from "./Slider/Slider";

import { Vongole, Velog, Velly, Todo, Portfolio } from "./Modal/Module";

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
        <Slider modalOpen={modalOpen} />
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
