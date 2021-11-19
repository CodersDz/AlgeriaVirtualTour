import styled from "styled-components";

export const DropDownHeader = styled("div")`
  color: #3faffa;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
`;

export const DropDownListContainer = styled("div")`
  position: absolute;
  display: none;
  width: 150px;
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
  background: rgba(0, 0, 0, 0.9);
  border: 2px solid transparent;
  border-radius: 10%;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const ListItem = styled("li")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;
export const LangSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const FlagImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const DropDownImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
`;
