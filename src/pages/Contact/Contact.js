import React from "react";
import { Formik } from "formik";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
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
  RightContainer,
} from "./ContactElements";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
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
        <RightContainer>
          <DevicesContainer />
        </RightContainer>
      </AboutContentContainer>
      <Footer />
    </ContactPageContainer>
  );
};

export default Contact;
