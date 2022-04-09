import React, { useState } from "react";
import { Formik } from "formik";
import DevicesContainer from "../../components/DevicesContainer/DevicesContainer";
import { motion } from "framer-motion";
import {
  ContentContainer,
  LeftContainer,
  LeftWrapper,
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
import axios from "axios";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { PageContainerGlobal, PageContentGlobal } from "../../GlobalStyles";
import useWindowSize from "../../hooks/useWindowSize";
import { generalAPILink } from "../../assets/Variables/Links";
import useInfoPopUp from "../../hooks/useInfoPopUp";
const Contact = () => {
  const { setShowInfoPopUp, setType, setText, setShowInfoPopUpAndHide } =
    useInfoPopUp();
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const isDesktop = useWindowSize();
  return (
    <PageContentGlobal
      fixed={isDesktop}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <ContentContainer>
        <LeftContainer>
          <LeftWrapper>
            <AboutH1>{t("Contact_us_page.Title")}</AboutH1>
            <Formik
              initialValues={{
                name: "",
                last_name: "",
                mail: "",
                phone: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.mail) {
                  errors.mail = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
                ) {
                  errors.mail = "Invalid email address";
                }
                console.log(errors);
                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                axios
                  .post(`${generalAPILink}/messages`, values)
                  .then((response) => {
                    console.log(response);
                    setShowInfoPopUp(false);
                    setType(1);
                    setText("Message envoyé avec succès");
                    setShowInfoPopUpAndHide();
                    resetForm();
                  })
                  .catch((err) => {
                    console.log(err);
                    setShowInfoPopUp(false);
                    setType(2);
                    setText("Erreur veuillez réessayer ultérieurement !");
                    setShowInfoPopUpAndHide();
                    resetForm();
                  });
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <ContactForm onSubmit={handleSubmit}>
                  <InputsContainer>
                    <InputContainer>
                      <InputSpan>{t("Contact_us_page.Last_Name")}</InputSpan>
                      <ContactInput
                        type="text"
                        placeholder={`${t("Contact_us_page.Last_Name")}`}
                        name="last_name"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></ContactInput>
                    </InputContainer>
                    <InputContainer>
                      <InputSpan>{t("Contact_us_page.First_Name")}</InputSpan>
                      <ContactInput
                        type="text"
                        placeholder={`${t("Contact_us_page.First_Name")}`}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></ContactInput>
                    </InputContainer>
                    <InputContainer>
                      <InputSpan>{t("Contact_us_page.Email")}</InputSpan>
                      <ContactInput
                        type="email"
                        placeholder={`${t("Contact_us_page.Email")}`}
                        name="mail"
                        value={values.mail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></ContactInput>
                    </InputContainer>
                    <InputContainer>
                      <InputSpan>{t("Contact_us_page.Phone_Number")}</InputSpan>
                      <ContactInput
                        type="tel"
                        placeholder={`${t("Contact_us_page.Phone_Number")}`}
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></ContactInput>
                    </InputContainer>
                  </InputsContainer>
                  <ContactTextArea
                    placeholder={`${t("Contact_us_page.Your_Message")}`}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></ContactTextArea>
                  <ContactBtn type="submit" disabled={isSubmitting}>
                    {t("Contact_us_page.Send")}
                  </ContactBtn>
                </ContactForm>
              )}
            </Formik>
          </LeftWrapper>
        </LeftContainer>
        <RightContainer>
          <DevicesContainer />
        </RightContainer>
      </ContentContainer>
    </PageContentGlobal>
  );
};

export default Contact;
