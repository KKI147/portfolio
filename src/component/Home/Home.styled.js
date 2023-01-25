import styled from "styled-components";

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
    top: 50%;
    left: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    top: 50%;
    left: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    top: 50%;
    left: 50%;
    right: 0%;
    transform: translate(-50%, -50%);
    word-break: keep-all;
    font-size: 1.3rem;
  }

  /* @media screen and (max-width: 768px) {
    left: 25%;
    right: 15%;
    top: 40%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 480px) { */
  /* left: 20%;
    right: 10%; */
  /* left: 10%; */
  /* right: 10%; */
  /* left: 20%;
    top: 38%;
    font-size: 1.2rem;
    word-break: break-all;
  } */
`;

export const SubTitle = styled.div(
  {
    position: "absolute",
    right: "10%",
    color: "#888888",
    fontSize: "1.3rem",
    "@media screen and (max-width: 1280px)": {
      fontSize: "1rem",
    },
    "@media screen and (max-width: 768px)": {
      top: "50%",
      left: "10%",
      right: "5%",
      wordBreak: "keep-all",
      fontSize: "1rem",
    },
    "@media screen and (max-width: 480px)": {
      left: "15%",
      top: "48%",
      wordBreak: "keep-all",
      fontSize: "1.1rem",
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
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 768px) {
    right: 5%;
    left: 5%;
    position: fixed;
    margin: 2px auto;
    bottom: 5%;
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 480px) {
    right: 5%;
    left: 5%;
    position: fixed;
    margin: 2px auto;
    bottom: 5%;
    width: 80px;
    height: 80px;
  }
`;
