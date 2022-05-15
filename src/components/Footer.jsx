import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1em;
  background-color: #000;
  box-sizing: border-box;
`;

const FooterDivisionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 50px 0;
`;

const FooterAndromeda = styled.h3`
  font-size: calc(40px + 2vw);
  color: #00adb5;
  text-align: center;
  font-family: "spacy";
  flex-grow: 2;
`;

const FooterLinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 2;
`;

const FooterLink = styled.a`
  font-size: 23px;
  font-weight: bold;
  font-family: "spacy";
  text-align: left;
  color: #fff;
  margin: 5px 0;
  width: fit-content;
`;
const EmptyDiv = styled.div`
  flex-grow: 2;
`;

const FooterCopyWriteText = styled.p`
  font-size: 15px;
  font-weight: light;
  font-family: "spacy";
  text-align: center;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterDivisionWrapper>
        <FooterAndromeda>Axtin</FooterAndromeda>
        <FooterLinksDiv>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">donate</FooterLink>
        </FooterLinksDiv>
        <EmptyDiv />
      </FooterDivisionWrapper>
      <FooterCopyWriteText>
        Copyright © 2022 - 2022 | M.Attig (Ax) | Andromeda .
      </FooterCopyWriteText>
    </FooterWrapper>
  );
}

export default Footer;
