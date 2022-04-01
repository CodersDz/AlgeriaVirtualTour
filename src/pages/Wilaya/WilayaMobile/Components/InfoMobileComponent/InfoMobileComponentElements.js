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
  align-items: center;
`;
export const InfoP = styled.p`
  width: 100%;
  font-weight: 400;
  color: #fff;
  transition: all 0.5s;
  margin: 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.readMore === false ? 4 : "initial")};
  line-clamp: ${(props) => (props.readMore === false ? "4" : "initial")};
  -webkit-box-orient: vertical;
  overflow: hidden;
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
export const BtnContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ReadMoreBtn = styled.button`
  width: 40%;
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
