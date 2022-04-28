import React from "react";
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
import axios from "axios";
import useTranslation from "../../hooks/useTranslation/useTranslation";
import { PageContentGlobal } from "../../GlobalStyles";
import useWindowSize from "../../hooks/useWindowSize";
import { generalAPILink } from "../../assets/Variables/Links";
import { useDispatch } from "react-redux";
import {
  setHide,
  setShow,
  setType,
  setText,
} from "../../features/infoPopUp/infoPopUpSlice";
const Contact = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
                    dispatch(setHide());
                    dispatch(setType(1));
                    dispatch(setText("Message envoyé avec succès"));
                    dispatch(setShow());
                    setTimeout(() => {
                      dispatch(setHide());
                    }, [3000]);
                    resetForm();
                  })
                  .catch((err) => {
                    console.log(err);
                    dispatch(setHide());
                    dispatch(setType(2));
                    dispatch(
                      setText("Erreur veuillez réessayer ultérieurement !")
                    );
                    dispatch(setShow());
                    setTimeout(() => {
                      dispatch(setHide());
                    }, [3000]);
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
