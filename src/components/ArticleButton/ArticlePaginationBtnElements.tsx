import styled from "styled-components";

const ArticleButtonDiv = styled.div`
  width: 18rem;
  height: fit-content;
  border: 3px solid #edededed;
  color: #edededed;
  background-color: #222831;
  display: flex;
  align-items: center;
  font-family: spacy;
  cursor: pointer;
  &:hover {
    border-color: #fff;
    color: #fff;
    background-color: #000;
  }
`;

const ArticleLinkTag = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 15px;
  box-sizing: border-box;
`;

export { ArticleButtonDiv, ArticleLinkTag };
