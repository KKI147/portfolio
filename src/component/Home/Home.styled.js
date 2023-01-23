import styled from "styled-components";
//1280px, 768px, 480px

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("../../img/home_bg.svg");
  position: relative;
`;

export const Title = styled.div`
  position: absolute;
  right: 10%;
  bottom: 250px;
  color: #fff;
  font-size: 2.5rem;
  animation: fadein 2s ease-in-out;
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @media screen and (max-width: 1280px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 768px) {
    left: 20%;
    top: 40%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    left: 10%;
    top: 40%;
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.div(
  {
    position: "absolute",
    right: "10%",
    color: "#888888",
    fontSize: "1.3rem",
    "@media screen and (max-width: 1280px)": {
      right: "10%",
      wordBreak: "keep-all",

      fontSize: "1rem",
    },
    "@media screen and (max-width: 768px)": {
      right: "5%",
      left: "5%",
      top: "45%",
      wordBreak: "keep-all",
    },
    "@media screen and (max-width: 480px)": {
      right: "5%",
      left: "5%",
      top: "50%",
      wordBreak: "keep-all",
    },
  },

  (props) => ({
    bottom: props.bottom ? props.bottom : "210px",
  })
);

export const ImgComponent = styled.img`
  width: 100px;
  height: 100px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom: 5%;
  left: 50%;
  filter: invert(80%);

  @media screen and (max-width: 1280px) {
    position: fixed;
    margin: 2px auto;
    bottom: 5%;
    right: 5%;
    left: 5%;
  }

  @media screen and (max-width: 768px) {
    right: 5%;
    left: 5%;
    position: fixed;
    margin: 2px auto;
    bottom: 5%;
  }
  @media screen and (max-width: 480px) {
    right: 5%;
    left: 5%;
    position: fixed;
    margin: 2px auto;
    bottom: 5%;
  }
`;
