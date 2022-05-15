import styled from "styled-components";
import React from "react";
import {
  SliderElementImg,
  SliderElementH1,
  SliderElementP,
  SliderAuthorName,
} from "./SliderElement";
import ImageArticle from "../static/images/pc_image.jpg";

const BlogArticleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  width: 35em;
  margin-left: 5px;
  margin-bottom: 20px;
`;
const TextContentWrapper = styled.div`
  margin-left: 20px;
`;

function BlogAricleElement() {
  return (
    <BlogArticleWrapper>
      <SliderElementImg src={ImageArticle} />
      <TextContentWrapper>
        <SliderElementH1 noMarginTop>Article 1</SliderElementH1>
        <span
          class="author-name"
          style={{
            fontSize: "0.6em",
            fontWeight: "300",
            fontFamily: "spacy",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          By |<SliderAuthorName>Mostfa</SliderAuthorName>
        </span>
        <SliderElementP>
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </SliderElementP>
      </TextContentWrapper>
    </BlogArticleWrapper>
  );
}

export default BlogAricleElement;
