import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("../../img/home_bg.svg");
  position: relative;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 1280px) {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 10%);
    text-align: center;
    word-break: keep-all;
  }
  @media screen and (max-width: 768px) {
    word-break: break-all;
  }
  @media screen and (max-width: 480px) {
    word-break: break-all;
  }
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
    font-size: 1.8rem;
    position: static;
    line-height: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 48px;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
    line-height: 46px;
  }
`;

export const SubTitle = styled.div(
  {
    position: "absolute",
    right: "10%",
    color: "#888888",
    fontSize: "1.3rem",
    "@media screen and (max-width: 1280px)": {
      fontSize: "1.2rem",
      position: "static",
      padding: "0 5%",
      lineHeight: "22px",
    },
    "@media screen and (max-width: 768px)": {
      fontSize: "1.1rem",
      lineHeight: "20px",
    },
    "@media screen and (max-width: 480px)": {
      fontSize: "1rem",
      lineHeight: "18px",
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
