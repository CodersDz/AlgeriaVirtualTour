import React from "react";
import { PopUpContainer, TextSpan } from "./InfoPopUpElements";
import { AnimatePresence, motion } from "framer-motion";
const PopUp = ({ handleClose, type, text }) => {
  console.log(type);
  return (
    <AnimatePresence>
      <PopUpContainer
        as={motion.div}
        type={type}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        <TextSpan>{text}</TextSpan>
      </PopUpContainer>
    </AnimatePresence>
  );
};

export default PopUp;
