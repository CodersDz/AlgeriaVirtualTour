import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Humberger } from "../../../assets/svg/HumbergerIcon.svg";
import { ReactComponent as Logo } from "../../../assets/svg/NavLogo.svg";
import { ReactComponent as Search } from "../../../assets/svg/SearchIcone.svg";
import { ReactComponent as Notifications } from "../../../assets/svg/NotificationsIcone.svg";

import { ReactComponent as Home } from "../../../assets/svg/HomeIcone.svg";
import { ReactComponent as Agenda } from "../../../assets/svg/AgendaIcone.svg";
import { ReactComponent as Travel } from "../../../assets/svg/TravelIcone.svg";
import { ReactComponent as Profile } from "../../../assets/svg/ProfileIcone.svg";
export const NavMobileWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #36ab13;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const TopContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
`;
export const HumbergerContainer = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HumbergerBtn = styled.button`
  background-color: transparent;
  width: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HumbergerIcone = styled(Humberger)``;
export const LogoContainer = styled.div`
  height: 100%;
  width: 60%;
`;
export const NavLogo = styled(Logo)`
  max-width: 80%;
  max-height: 80%;
`;
export const TopContainerLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchContainer = styled.div`
  height: 100%;
  width: 10%;
`;
export const SearchIcone = styled(Search)`
  max-height: 100%;
  max-width: 70%;
  min-width: 50%;
`;
export const NotificationsContainer = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NotificationsBtn = styled.button`
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
export const NotificationsIcone = styled(Notifications)`
  max-height: 100%;
  max-width: 70%;
  min-width: 50%;
`;
export const BottomContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
export const BottomItem = styled.div`
  height: 100%;
  width: 20%;
  /* border-bottom: 2px solid #fff; */
`;
export const BottomLink = styled(Link)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HomeIcone = styled(Home)`
  max-height: 50%;
`;
export const AgendaIcone = styled(Agenda)`
  max-height: 50%;
`;
export const TravelIcone = styled(Travel)`
  max-height: 70%;
`;
export const ProfileIcone = styled(Profile)`
  max-height: 50%;
`;
