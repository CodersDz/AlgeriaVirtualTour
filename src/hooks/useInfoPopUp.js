import { useContext } from "react";
import InfoPopUpContext from "../context/InfoPopUpProvider";

const useInfoPopUp = () => {
  return useContext(InfoPopUpContext);
};

export default useInfoPopUp;
