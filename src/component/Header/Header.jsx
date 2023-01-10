import HeaderComponent from "./Header.styled";

function Header({ swiper }) {
  const onMove = (index) => {
    swiper.slideTo(index);
  };

  return (
    <HeaderComponent>
      <div type="home" onClick={() => onMove(0)}>
        Home
      </div>
      <div type="about" onClick={() => onMove(1)}>
        About
      </div>
      <div type="skill" onClick={() => onMove(2)}>
        Skill
      </div>
      <div type="project" onClick={() => onMove(3)}>
        Project
      </div>
    </HeaderComponent>
  );
}

export default Header;
