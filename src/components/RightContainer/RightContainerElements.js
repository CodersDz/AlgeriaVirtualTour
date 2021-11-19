import styled from "styled-components";

export const ContentRight = styled.div`
  height: 100%;
  width: 50%;
`;
export const ContentRightWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContentRightImgs = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;
export const MoniteurImg = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
`;
export const PcPortableImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 50%;
  max-height: 60%;
`;
export const TéléphoneImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 20%;
  max-height: 40%;
`;
export const TabeletteImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 40%;
  max-height: 50%;
`;
export const StoreContainer = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30%;
`;
export const StoreP = styled.p`
  color: #d8d8d8;
  font-size: 28px;
  font-weight: 600;
  margin-top: 10px;
`;
export const StoreIcones = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const StoreIcone = styled.img`
  margin: 20px;
`;
