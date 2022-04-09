import React, { useEffect } from "react";
import {
  Container,
  EmailConfirmationTitle,
  EmailConfirmationP,
} from "./EmailConfirmationElements";
import { useLocation, useNavigate } from "react-router-dom";
import useTranslation from "../../../../hooks/useTranslation/useTranslation";
const EmailConfirmation = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname?.toLowerCase();
  const email = location.state?.email;
  console.log(from);
  console.log(email);
  const confirmation = location.state?.confirmation;
  useEffect(() => {
    if (
      (from !== "/authentification/login" && confirmation !== true) ||
      (from !== "/authentification/resetpassword" && confirmation !== true)
    ) {
      navigate("/home", { replace: true });
    }
  });
  return (
    <Container>
      <EmailConfirmationTitle>
        {t("AuthentificationPage.EmailSentTitle")}
      </EmailConfirmationTitle>
      <EmailConfirmationP>
        {t("AuthentificationPage.EmailSentP")}
      </EmailConfirmationP>
    </Container>
  );
};

export default EmailConfirmation;
