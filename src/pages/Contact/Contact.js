import React from "react";
import { Formik } from "formik";
import RightContainer from "../../components/RightContainer/RightContainer";
import { motion } from "framer-motion";
import {
  ContactPageContainer,
  AboutContentContainer,
  AboutContentLeft,
  AboutContentLeftWrapper,
  AboutH1,
  ContactForm,
  InputsContainer,
  InputContainer,
  InputSpan,
  ContactInput,
  ContactTextArea,
  ContactBtn,
  RightWrapper,
} from "./ContactElements";
import Navbar from "../../components/Navbar/Navbar";
const Contact = () => {
  return (
    <ContactPageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <Navbar />
      <AboutContentContainer>
        <AboutContentLeft>
          <AboutContentLeftWrapper>
            <AboutH1>Contact</AboutH1>
            <Formik>
              <ContactForm>
                <InputsContainer>
                  <InputContainer>
                    <InputSpan>Nom</InputSpan>
                    <ContactInput
                      type="text"
                      placeholder="Nom..."
                    ></ContactInput>
                  </InputContainer>
                  <InputContainer>
                    <InputSpan>Prénom</InputSpan>
                    <ContactInput
                      type="text"
                      placeholder="Prénom..."
                    ></ContactInput>
                  </InputContainer>
                  <InputContainer>
                    <InputSpan>email</InputSpan>
                    <ContactInput
                      type="email"
                      placeholder="Email..."
                    ></ContactInput>
                  </InputContainer>
                  <InputContainer>
                    <InputSpan>Téléphone</InputSpan>
                    <ContactInput
                      type="tel"
                      placeholder="Téléphone..."
                    ></ContactInput>
                  </InputContainer>
                </InputsContainer>
                <ContactTextArea placeholder="Votre message..."></ContactTextArea>
                <ContactBtn>Envoyer</ContactBtn>
              </ContactForm>
            </Formik>
          </AboutContentLeftWrapper>
        </AboutContentLeft>
        <RightContainer contact="true" />
      </AboutContentContainer>
    </ContactPageContainer>
  );
};

export default Contact;
