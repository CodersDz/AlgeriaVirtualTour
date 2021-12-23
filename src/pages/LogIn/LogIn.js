import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { PageContainer, LogInSignUpContainer } from "./LogInElements";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
const LogIn = () => {
  const [login, setLogin] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleSubmit = () => {};
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
            <ChangeSignInSignUp />
          </AnimateSharedLayout>
        </AnimatePresence>
      </LogInSignUpContainer>
    </PageContainer>
  );
};

export default LogIn;
