import styled from "styled-components";
import { IoMailOutline } from "react-icons/io5";
import { RiUser5Line } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbSchool } from "react-icons/tb";
import { BiCake } from "react-icons/bi";

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  margin-top: 64px;
  background-color: #f5f5f5;
`;

export const ImgComponent = styled.img`
  width: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Wraper = styled.span`
  margin: 30px 30px;
  & div {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  & span {
    margin-left: 15px;
    word-break: break-all;
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
  width: 64px;
  height: 64px;
`;

export const Email = styled(IoMailOutline)`
  width: 64px;
  height: 64px;
`;

export const Address = styled(MdOutlineLocationOn)`
  width: 64px;
  height: 64px;
`;

export const Education = styled(TbSchool)`
  width: 64px;
  height: 64px;
`;

export const Birthday = styled(BiCake)`
  width: 64px;
  height: 64px;
`;
