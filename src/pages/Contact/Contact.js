import React from "react";
import { Formik } from "formik";
import RightContainer from "../../components/RightContainer/RightContainer";
import Footer from "../../components/Footer/Footer";
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
} from "./ContactElements";
import Navbar from "../../components/Navbar/Navbar";
const Contact = () => {
  return (
    <ContactPageContainer>
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
        <RightContainer />
      </AboutContentContainer>
    </ContactPageContainer>
  );
};

export default Contact;