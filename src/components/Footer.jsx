import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Wrapper = styled.section`
  display: flex;
  margin: 2em auto;
  padding: 2em;
  background: #77777732;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-family: spacy;
  font-weight: 400;
  font-style: italic;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const FooterParagraph = styled.p`
  font-size: 1em;
  font-family: spacy;
  font-weight: 400;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;

const FooterTitle = styled.h1`
  font-size: 1.5em;
  font-family: spacy;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterTitle>Welcome Back Traveler</FooterTitle>
      <FooterParagraph>
        You may enter the deep blue, if you want.
      </FooterParagraph>
      <Button
        size="medium"
        type="submit"
        color="secondary"
        onClick={() => {
          //   setOnLanding(true);
        }}
        sx={{
          fontSize: 17,
          marginTop: 5,
          color: "#00adb5",
        }}
      >
        enter
      </Button>
    </Wrapper>
  );
};

export default Footer;
