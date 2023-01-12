import styled from "styled-components";

export const FooterComponent = styled.footer`
  width: 100%;
  height: 64px;
  background-color: #d3d3d3;
  color: #ffffff;
  bottom: 0%;
  position: absolute;
  & span {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding: 20px 10px;
  }

  & a {
    color: #ffffff;
  }
`;

export const ImgComponent = styled.img`
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
