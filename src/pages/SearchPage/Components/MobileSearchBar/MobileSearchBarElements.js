import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
export const SelectWilayaContainer = styled.div`
  height: 100%;
  width: calc(95% - 40px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.5);
  color: #fff;
  border-radius: 30px;
  padding: 0 20px;
  border: none;
  cursor: pointer;
`;
export const MapIconeContainer = styled(Link)`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
`;
