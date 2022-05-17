import React from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { MainWrapper, SideWrapper } from "./MainBlog/BlogContent";
import SideElements from "../components/side_page_components/SideElements";
import Image from "../static/images/wp5.jpg";
import Image2 from "../static/images/wp3.jpg";
import Image3 from "../static/images/wp6.jpg";
import Image4 from "../static/images/wp1.jpg";
import ArticlePaginationBtn from "../components/ArticlePaginationBtn";

const ArticleWrapper = styled.div`
  flex-grow: 0.1;
`;

function Blog() {
  return (
    <MainWrapper padding="3em 0">
      <SideWrapper grow="5" />
      <ArticleWrapper>
        <Article image={Image} />
        <Article image={Image2} />
        <Article image={Image3} />
        <Article image={Image4} />
        <ArticlePaginationBtn />
      </ArticleWrapper>
      <SideElements />
    </MainWrapper>
  );
}

export default Blog;
