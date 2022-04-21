import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 85%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 20px;
`;
export const InfoP = styled.p`
  width: 100%;
  font-weight: 400;
  color: #fff;
  transition: all 0.5s;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.readMore === false ? 4 : "initial")};
  line-clamp: ${(props) => (props.readMore === false ? 4 : "initial")};
  overflow: ${(props) => (props.readMore === false ? "hidden" : "auto")};
  -webkit-box-orient: vertical;
  transition: all 2s ease-in-out;
  font-size: 15px;
  text-align: justify;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
