import styled, { keyframes } from "styled-components";
import device from "../../assets/Variables/responsive";
import { ReactComponent as ArrowSvg } from "../../assets/svg/ArrowGrey.svg";
const lang = localStorage.getItem("language");
const MenuAnimation = keyframes`
from {
  height:0px;
}

to {
  height:150px;
}
`;
export const TopContainer = styled.div`
  width: 100%;
  height: calc(40vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) =>
    `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)),url(${props.bg})})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const TopContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  margin-left: ${lang === '"ar"' ? "0" : "150px"};
  margin-right: ${lang === '"ar"' ? "150px" : "0"};
  height: calc(30vh - 110px);
`;
export const CatégorieImg = styled.img`
  height: 150px;
  width: 150px;
`;
export const CatégorieNom = styled.h1`
  color: #fff;
  font-weight: 600;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 80px;
  }
  @media only screen and ${device.desktop} {
    font-size: 120px;
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
`;
export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const LeftContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
`;
export const LeftWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const PubContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const PubImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const LocationCard = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #eaeaea;
  min-width: 330px;
  min-height: 380px;
  margin-right: 140px;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 20px;
`;
export const CardImg = styled.img`
  width: 100%;
  max-height: 60%;
  border: 1px solid transparent;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 8px 8px 8px #ccc;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const LocationName = styled.h4`
  color: #109fb2;
  align-self: flex-start;
  text-transform: uppercase;
`;
export const LocationP = styled.p`
  color: #a8a8a8;
  text-align: start;
`;
export const CardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftCardBtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
export const SearchMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 70px;
  margin: 50px 0 0px 0;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
  margin-left: 50px;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 60%;
  }
  @media only screen and ${device.desktop} {
    width: 40%;
  }
`;
export const SearchForm = styled.form`
  display: flex;
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
  align-items: center;
  background: rgba(161, 161, 161, 0.1);
  border-radius: 60px;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  border: none;
`;
export const SearchInput = styled.input`
  font-weight: 400;
  margin-left: ${lang === '"ar"' ? "0" : "20px"};
  margin-right: ${lang === '"ar"' ? "20px" : "0"};
  color: #a1a1a1;
  font-size: 20px;
  width: 90%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  @media only screen and ${device.mobile} {
  }
  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    font-size: 17px;
  }
  @media only screen and ${device.desktop} {
    font-size: 20px;
  }
`;
export const SearchIconeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  height: 100%;
`;

export const SelectWilayaContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  background: #f6f6f6;
  color: #fff;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow-y: visible;
`;
export const SelectWilayaVisible = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WilayaSelectedH3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a1a1a1;
  font-size: 16px;
  font-weight: 400;
`;
export const Arrow = styled(ArrowSvg)`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-out;

  ${SelectWilayaContainer}:hover & {
    transform: rotate(-540deg);
  }
`;
export const SelectWilayaUlHidden = styled.ul`
  display: ${(props) => (props.showWilayas === false ? "none" : "flex")};
  background: rgba(255, 255, 255, 0);
  width: 100%;
  max-height: 300px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  animation: ${MenuAnimation} 0.3s forwards;
  top: 70px;
  z-index: 2;
  text-align: justify;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  background: #f6f6f6;
  border-radius: 30px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SelectWilayaLIHidden = styled.li`
  min-height: 33%;
  cursor: pointer;
  color: #a1a1a1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 400;
  padding: 0 30px;
  border-radius: 30px;
`;
