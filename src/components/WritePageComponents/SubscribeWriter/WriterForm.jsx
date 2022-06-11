import React from "react";
import { Box, BoxHeader, TextArea, MediaInput, BoxButton } from "./Components";
import styled from "styled-components";

const LocalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1em;
  width: 100%;
`;

const ButtonsDiv = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1em;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function WriterForm({ onChange, text, setText, onSubmit }) {
  return (
    <Box>
      <BoxHeader>
        <h5
          style={{
            textTransform: "uppercase",
            color: "inherit",
            fontFamily: "spacy",
          }}
        >
          speak yourself
        </h5>
      </BoxHeader>
      <TextArea onChange={(e) => onChange(e)} value={text} />
      <LocalDiv>
        <h3
          style={{
            textTransform: "uppercase",
            fontFamily: "spacy",
            marginBottom: "1em",
          }}
        >
          Media Url
        </h3>
        <MediaInput />
      </LocalDiv>
      <ButtonsDiv>
        <BoxButton
          onClick={() => {
            console.log("clicked");
            console.log(text);
          }}
        >
          Submit
        </BoxButton>
        <BoxButton
          onClick={() => {
            setText("");
          }}
        >
          Delete
        </BoxButton>
      </ButtonsDiv>
    </Box>
  );
}

export default WriterForm;
