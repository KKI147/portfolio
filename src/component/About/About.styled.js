import styled from "styled-components";
import { IoMailOutline } from "react-icons/io5";
import { RiUser5Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { BiCake } from "react-icons/bi";

export const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url("../../img/about_bg.svg");
`;

export const Wrapper = styled.div`
  margin: 64px 360px 0 360px;
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 50px;
`;

export const Content = styled.div`
  text-align: center;
  background-color: #d3d3d3;
  border-radius: 12px;
  width: 150px;
`;

export const Name = styled(RiUser5Line)`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

export const Email = styled(IoMailOutline)`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

export const Address = styled(MdOutlineLocationOn)`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

export const Education = styled(TbSchool)`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;

export const Birthday = styled(BiCake)`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
`;
