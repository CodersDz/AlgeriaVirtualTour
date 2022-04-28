import React from "react";
import { Container, Wrapper } from "./DiscoverMobileComponentElements";
import CardContainer from "../../../../../components/CardContainer/CardContainer";

function DiscoverMobileComponent({ locations }) {
  return (
    <Container>
      <Wrapper>
        <CardContainer locations={locations}></CardContainer>
      </Wrapper>
    </Container>
  );
}

export default DiscoverMobileComponent;
