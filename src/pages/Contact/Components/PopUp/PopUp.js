import React from "react";
import { PopUpContainer, TextSpan } from "./PopUpElements";
import { motion } from "framer-motion";
const PopUp = ({ handleClose, type, text }) => {
  console.log(type);
  return (
    <PopUpContainer
      as={motion.div}
      type={type}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <TextSpan>{text}</TextSpan>
    </PopUpContainer>
  );
};

export default PopUp;
