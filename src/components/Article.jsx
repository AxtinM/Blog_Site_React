import React from "react";
import styled from "styled-components";

const Article = styled.div`
  height: fit-content;
  width: 100%;
  margin: 1em 0;
`;

const ArticleImg = styled.img`
  height: 250px;
  background-size: cover;
  background-position: center center;
`;

function Article() {
  return (
    <Article>
      <ArticleImg />
    </Article>
  );
}

export default Article;
