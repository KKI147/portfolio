import styled from "styled-components";

export const Body = styled.div`
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
`;

export const SubTitle = styled.div(
  {
    position: "absolute",
    right: "10%",
    color: "#888888",
    fontSize: "1.3rem",
  },
  (props) => ({
    bottom: props.bottom ? props.bottom : "210px",
  })
);
