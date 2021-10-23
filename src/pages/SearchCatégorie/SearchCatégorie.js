import React, { useEffect } from "react";
import { useParams } from "react-router";
import { SearchCatégoriePageContainer } from "./SearchCatégorieElements";
const SearchCatégorie = () => {
  const { Catégorie } = useParams();
  useEffect(() => {
    console.log("hello");
  });
  return <SearchCatégoriePageContainer>Hello</SearchCatégoriePageContainer>;
};

export default SearchCatégorie;
