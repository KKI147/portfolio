import { Body, SkillComponent, Title } from "./Skill.styled";

function Skill() {
  return (
    <Body>
      <div>
        <Title>Skill</Title>
        <SkillComponent>
          <img src={process.env.PUBLIC_URL + "/icon/html.svg"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/css.svg"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/js.svg"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/react.svg"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/redux.svg"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/router.png"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/style.png"} alt="html" />
          <img src={process.env.PUBLIC_URL + "/icon/axios.svg"} alt="html" />
        </SkillComponent>
      </div>
    </Body>
  );
}

export default Skill;
