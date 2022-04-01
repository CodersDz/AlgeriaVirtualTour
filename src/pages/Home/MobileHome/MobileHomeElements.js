import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const lang = localStorage.getItem("language");

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 110px);
  overflow: hidden;
  background-color: #36ab13;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const MainTopContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TopLeftContainer = styled.div`
  height: 100%;
  width: 77%;
  display: flex;
  padding: 30px;
`;
export const MainTitleContainer = styled.p`
  width: 100%;
`;
export const MainTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;
export const TopRightContainer = styled.div`
  height: 100%;
  width: 23%;
  border-radius: 0 0 0 30px;
  z-index: 3;
  display: flex;
`;
export const MainBottomContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MainImage = styled.img`
  position: absolute;
  z-index: 4;
  width: 100%;
  bottom: -5px;
  right: -20px;
  max-width: 350px;
  max-height: 50vh;
`;

export const ThumbnailImage = styled.div`
  min-width: 100%;
  height: 100%;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  visibility: ${(props) => (props.readMore ? "hidden" : "visible")};
  animation: ${(props) => (props.readMore ? fadeOut : fadeIn)} 0.5s linear
    forwards;
`;
export const ThumbnailImageText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ThumbnailImageTextH5 = styled.h5`
  position: absolute;
  bottom: 0;
  right: 0;
  writing-mode: vertical-rl;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 40px;
  color: #fff;
  text-transform: uppercase;
`;
export const ExpandedContainer = styled.h5`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: ${(
    props
  ) => `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url(${props.bg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;
export const DiscoverMoreContainer = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );

  visibility: ${(props) => (props.readMore ? "hidden" : "visible")};
  animation: ${(props) => (props.readMore ? fadeOut : fadeIn)} 0.5s linear
    forwards;
`;
export const DiscoverMoreLink = styled(Link)`
  height: 100%;
  width: 100%;
  writing-mode: vertical-rl;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
`;

export const ExpandedTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65%;
  position: relative;
  padding: 0 30px;
  display: ${(props) => (props.readMore ? "none" : "flex")} !important;
`;
export const ExpandedTopLeftContainer = styled.div`
  height: 100%;
  width: 77%;
`;
export const ExpandedTopRightContainer = styled.div`
  height: 100%;
  width: 23%;
`;

export const TitleExpandedContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const TitleExpanded = styled.h5`
  font-size: 30px;
  font-weight: 600;
  word-break: break-all;
  text-align: start !important;
  width: 100%;
`;
export const ExpandedBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
  width: 100%;
  padding: 0 30px;
  height: ${(props) => (props.readMore ? "85%" : "20%")};
`;
export const TextExpandedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;

export const PExpanded = styled.p`
  text-transform: none;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) =>
    props.readMore === false ? "4" : "initial"};
  line-clamp: ${(props) => (props.readMore === false ? "4" : "initial")};
  transition: all 2s ease-in-out;
  font-size: 20px;
  text-align: justify;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ExpandedBtnContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: ${lang === '"ar"' ? "row-reverse" : "row"};
`;
export const ReadMoreBtn = styled.button`
  width: 30%;
  border: none;
  background-color: #4bcb02;
  border-radius: 30px;
  color: #fff;
  padding: 5px;
  cursor: pointer;
`;
export const ReadMoreSpan = styled.span`
  width: 30%;
  font-size: 14px;
  font-weight: 600;
`;
export const DiscoverBtn = styled(Link)`
  width: 30%;
  width: 30%;
  font-size: 14px;
  font-weight: 600;
  text-transform: none;
  cursor: pointer;
`;
