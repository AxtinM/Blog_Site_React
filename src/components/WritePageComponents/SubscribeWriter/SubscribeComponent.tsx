import React from "react";
import {
  ParagraphWrapper,
  Header,
  Paragragraph,
  PageDeviderDiv,
  SvgImageWrapper,
} from "./Components";
import WriterForm from "./WriterForm";
import Image from "./publish_image.svg";

function SubscribeComponent() {
  const [text, setText] = React.useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      className="writer-page-wrapper"
      style={{
        margin: "2em 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0",
      }}
    >
      <PageDeviderDiv>
        <ParagraphWrapper
          style={{
            alignSelf: "flex-start",
          }}
        >
          <Header>Want to become a writer ?</Header>
          <Paragragraph>
            We are a community of writers who are passionate about writing. We
            are a community of writers who are passionate about writing. We are
            a community of writers who are passionate about writing.
          </Paragragraph>
        </ParagraphWrapper>
        <SvgImageWrapper src={Image} />
      </PageDeviderDiv>
      <PageDeviderDiv>
        <ParagraphWrapper>
          <Paragragraph
            style={{
              fontSize: "1.4rem",
              lineHeight: "2",
            }}
          >
            <strong>Fill the form</strong> and give us an
            <strong> overview </strong>
            of who you are and what is <strong>interesting</strong> about you,
            why you want to write or what you enjoy
            <strong> reading and writing about.</strong>
          </Paragragraph>
        </ParagraphWrapper>
        <WriterForm onChange={handleChange} text={text} setText={setText} />
      </PageDeviderDiv>
    </div>
  );
}

export default SubscribeComponent;
