import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const CardContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 500px;
  width: 100%;
`;
export const Card = styled.div`
  cursor: pointer;
  position: relative;
  background: ${(
    props
  ) => `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 17%;
  height: 300px;
  border-radius: 10%;
  margin: 20px 20px 20px 0;
`;
export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px;
`;
export const CardContentImg = styled.img`
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 5px;
`;
export const CardContentTitle = styled.h4`
  color: white;
`;
