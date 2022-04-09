import { createContext, useState } from "react";

const InfoPopUpContext = createContext();

export const InfoPopUpProvider = ({ children }) => {
  const [showInfoPopUp, setShowInfoPopUp] = useState(false);
  const [type, setType] = useState();
  const [text, setText] = useState();
  const setShowInfoPopUpAndHide = () => {
    setShowInfoPopUp(true);
    setTimeout(() => {
      setShowInfoPopUp(false);
    }, [3000]);
  };
  return (
    <InfoPopUpContext.Provider
      value={{
        showInfoPopUp,
        setShowInfoPopUp,
        type,
        setType,
        text,
        setText,
        setShowInfoPopUpAndHide,
      }}
    >
      {children}
    </InfoPopUpContext.Provider>
  );
};

export default InfoPopUpContext;
