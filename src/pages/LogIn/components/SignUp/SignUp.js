import React from "react";
import { Formik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as FacebookIcone } from "../../../../assets/svg/FacebookIcone.svg";
import { ReactComponent as TwitterIcone } from "../../../../assets/svg/TwitterIcone.svg";
import {
  SignUpContainerContent,
  SignUpH1,
  SocialMediaContainer,
  SocialMedia,
  SignUpP,
  LoginHr,
  HrP,
  HrContainer,
  FromikContainer,
  SignUpForm,
  InputsContainer,
  NameNickNameContainer,
  NameNickNameInput,
  SignUpInput,
  SignUpBtn,
  ChangeLogInUpContainer,
  ChangeLogInUpSpan,
  ChangeLogInUpButton,
} from "./SignUpElements";
import axios from "axios";
const SignUp = ({ login, setLogin, toggle, setToggle }) => {
  return (
    <SignUpContainerContent
      key={"SignUpContainer"}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <SignUpH1>S'inscrire</SignUpH1>

      <FromikContainer>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            email: "",
            phone_number: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (values.password !== values.password) {
              errors.password = "le mot de passe doit être le même ";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              axios
                .post("https://www.algeriavirtualtour.com/api/users/signup", {
                  email: values.email,
                  password: values.password,
                  phone_number: values.phone_number,
                  name: values.name,
                  lastname: values.lastname,
                })
                .then((response) => {
                  console.log(response);
                })
                .catch((err) => {
                  console.log(err);
                });
            }, 400);
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
            <SignUpForm onSubmit={handleSubmit}>
              <InputsContainer>
                <NameNickNameContainer>
                  <NameNickNameInput
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Nom..."
                  ></NameNickNameInput>
                  <NameNickNameInput
                    type="text"
                    name="lastname"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Prénom..."
                  ></NameNickNameInput>
                </NameNickNameContainer>
                <SignUpInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email..."
                ></SignUpInput>
                <SignUpInput
                  type="tel"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Numéro de téléphone..."
                ></SignUpInput>
                <SignUpInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mot de passe..."
                ></SignUpInput>

                <SignUpInput
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirmer le mot de passe..."
                ></SignUpInput>
              </InputsContainer>
              <SignUpBtn type="submit" disabled={isSubmitting}>
                S'inscrire
              </SignUpBtn>
            </SignUpForm>
          )}
        </Formik>
      </FromikContainer>
      <HrContainer as={motion.div} layoutId={"hr"}>
        <LoginHr />
        <HrP>Ou</HrP>
        <LoginHr />
      </HrContainer>
      <SocialMediaContainer as={motion.div} layoutId={"socialMedia"}>
        <SocialMedia>
          <FacebookIcone />
          <SignUpP>Continuer avec facebook</SignUpP>
        </SocialMedia>
        <SocialMedia>
          <TwitterIcone />
          <SignUpP>Continuer avec twitter</SignUpP>
        </SocialMedia>
      </SocialMediaContainer>

      <ChangeLogInUpContainer>
        <ChangeLogInUpSpan>Vous avez déjà un compte?</ChangeLogInUpSpan>
        <ChangeLogInUpButton
          onClick={() => {
            setLogin(!login);
            setToggle(!toggle);
          }}
        >
          Se connecter
        </ChangeLogInUpButton>
      </ChangeLogInUpContainer>
    </SignUpContainerContent>
  );
};

export default SignUp;
