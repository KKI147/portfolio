import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  height: 84px;
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  color: #181818;
  bottom: 0%;
  position: absolute;
  & span {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 24px;
    @media screen and (max-width: 1280px) {
      gap: 50px;
    }

    @media screen and (max-width: 768px) {
      gap: 20px;
      font-size: 12px;
    }
    @media screen and (max-width: 480px) {
      gap: 10px;
      font-size: 12px;
    }
  }
  & a {
    color: #ffffff;
  }
  & div {
    display: flex;
    align-items: center;
  }
`;

export const ImgComponent = styled.img`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: translateY(-0.5rem);
  }
`;
