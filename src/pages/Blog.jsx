import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { MainWrapper, SideWrapper } from "./MainBlog/BlogContent";
import SideElements from "../components/side_page_components/SideElements";

const ArticleWrapper = styled.div`
  flex-grow: 2;
`;

function Blog() {
  return (
    <MainWrapper>
      <SideWrapper grow="1" />
      <ArticleWrapper>
        <Article />
      </ArticleWrapper>
      <SideElements />
    </MainWrapper>
  );
}

export default Blog;
