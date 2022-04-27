import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useGoBack = () => {
  const navigate = useNavigate();
  navigate(-1);
};

export default useGoBack;
