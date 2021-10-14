import styled from "styled-components";

export const DropDownHeader = styled("div")`
  color: #3faffa;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  display: none;
`;
export const DropDownContainer = styled("div")`
  margin: 0 auto;
  &:hover ${DropDownListContainer} {
    display: block;
    transform: translateX(-100px);
  }
`;
export const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid transparent;
  border-radius: 10%;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ListItem = styled("li")`
  list-style: none;
  display: flex;
  padding: 10px;
  align-items: center;
  height: 50px;
`;

export const FlagImg = styled.img`
  width: 50px; /* or any custom size */
  height: 50px;
  padding: 10px;
  border-radius: 50%;
`;
