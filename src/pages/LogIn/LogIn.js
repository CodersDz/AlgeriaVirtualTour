import React from "react";
import { Formik } from "formik";
//-----------------Icons imports---------------
import { ReactComponent as FacebookIcone } from "../../assets/svg/FacebookIcone.svg";
import { ReactComponent as TwitterIcone } from "../../assets/svg/TwitterIcone.svg";
//-----------------Elements imports---------------
import {
  PageContainer,
  LoginContainer,
  LoginContainerContent,
  LoginH1,
  SocialMediaContainer,
  SocialMedia,
  LoginP,
  LoginHr,
  HrP,
  HrContainer,
  LoginForm,
  LoginInput,
  LoginBtn,
} from "./LogInElements";
import { Link } from "react-router-dom";
const LogIn = () => {
  const handleSubmit = () => {};
  return (
    <PageContainer>
      <LoginContainer>
        <LoginContainerContent>
          <LoginH1>Se Connecter</LoginH1>
          <SocialMediaContainer>
            <SocialMedia>
              <FacebookIcone />
              <LoginP>Continuer avec facebook</LoginP>
            </SocialMedia>
            <SocialMedia>
              <TwitterIcone />
              <LoginP>Continuer avec twitter</LoginP>
            </SocialMedia>
          </SocialMediaContainer>
          <HrContainer>
            <LoginHr />
            <HrP>Ou</HrP>
            <LoginHr />
          </HrContainer>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
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
              <LoginForm onSubmit={handleSubmit}>
                <LoginInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email..."
                ></LoginInput>
                <LoginInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Mot de passe..."
                ></LoginInput>
                <LoginBtn type="submit" disabled={isSubmitting}>
                  Se connecter
                </LoginBtn>
              </LoginForm>
            )}
          </Formik>
        </LoginContainerContent>
      </LoginContainer>
    </PageContainer>
  );
};

export default LogIn;
