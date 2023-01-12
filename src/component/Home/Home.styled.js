import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
`;

export const ImgComponent = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.span`
  font: 700 4em/1 "Oswald", sans-serif;
  letter-spacing: 0;
  padding: 0.25em 0 0.325em;
  display: block;
  margin: 0 auto;
  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);
  z-index: 5;
  position: absolute;
  color: #212121;
  bottom: 10%;
  animation: fadein 2s ease-in-out;
  margin-left: 5rem;

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
