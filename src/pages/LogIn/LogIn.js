import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { PageContainer, LogInSignUpContainer } from "./LogInElements";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";
import ResetPassword from "./components/ResetPassword/ResetPassword";
const LogIn = () => {
  const [login, setLogin] = useState(true);
  const [toggle, setToggle] = useState(false);
  const ChangeSignInSignUp = () => {
    if (login) {
      return (
        <Login
          login={login}
          setLogin={setLogin}
          toggle={toggle}
          setToggle={setToggle}
        />
      );
    } else
      return (
        <SignUp
          login={login}
          setLogin={setLogin}
          toggle={toggle}
          setToggle={setToggle}
        />
      );
  };
  return (
    <PageContainer>
      <LogInSignUpContainer login={login}>
        <AnimatePresence>
          <AnimateSharedLayout>
            <Routes>
              <Route path="Login" element={<ChangeSignInSignUp />} />
              <Route
                path="EmailConfirmation"
                element={<EmailConfirmation />}
              ></Route>
              <Route path="resetPassword" element={<ResetPassword />}></Route>
            </Routes>
          </AnimateSharedLayout>
        </AnimatePresence>
      </LogInSignUpContainer>
    </PageContainer>
  );
};

export default LogIn;
