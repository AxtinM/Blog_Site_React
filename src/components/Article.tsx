import styled from "styled-components";
import parse from "html-react-parser";
import "../styles/article.css";
import { NavLink } from "react-router-dom";

const ArticleLocalWrapper = styled.div`
  height: fit-content;
  width: 45rem;
  margin: 1em auto;
`;

const ArticleImg = styled.img`
  height: 300px;
  width: inherit;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  margin: 0 0;
`;

const ArticleContentWrapper = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #000;
  padding: 1em 1em;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ArticleHeader = styled.h1`
  font-size: 2em;
  font-weight: 700;
  font-family: spacy;
  color: #fff;
  margin-bottom: 1rem;
`;

const ArticleUnderHeaderDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: spacy;
`;

const ArticleUnderHeaderP = styled.p`
  font-size: 1rem;
  font-family: spacy;
  color: #ff2e63;
`;

const ArticleMainContentDiv = styled.div`
  height: fit-content;
  width: 100%;
  margin: 1em 0;
  padding: 0 1em;
`;

function Article(props) {
  const path: any = props.data.imageHeadline.path.split("/");
  // console.log(props.data);
  const _len: number = path.length - 1;
  return (
    <ArticleLocalWrapper>
      <ArticleImg src={`http://localhost:8000/images/${path[_len]}`} />
      <ArticleContentWrapper>
        <ArticleHeader>{props.data.title}</ArticleHeader>
        <ArticleUnderHeaderDiv>
          <ArticleUnderHeaderP>
            May 17, 2022 by {props.data.author.username}{" "}
          </ArticleUnderHeaderP>
          <ArticleUnderHeaderP>
            {props.data.comments.length === 0
              ? "No comments"
              : props.data.comments.length}
          </ArticleUnderHeaderP>
        </ArticleUnderHeaderDiv>
        <ArticleMainContentDiv>
          {parse(props.data.content)}
        </ArticleMainContentDiv>
        <NavLink
          to="/article/1"
          style={{
            color: "#ff2e63",
            margin: "0 2em",
            fontSize: "1.1em",
            fontFamily: "spacy",
          }}
        >
          Continue..
        </NavLink>
      </ArticleContentWrapper>
    </ArticleLocalWrapper>
  );
}

export default Article;
