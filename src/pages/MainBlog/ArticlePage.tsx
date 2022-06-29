import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { articleClient } from "../../client";
import parse from "html-react-parser";
import styled from "styled-components";
import "../../styles/page_article.css";

const ArticleWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70em;
  height: fit-content;
  padding: 2em 6em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 6em 2em;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  @media (max-width: 940px) {
    margin: 0;
    width: 100%;
    padding: 3em 1em;
    text-align: center;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 0.5em 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-align: left;
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  font-family: spacy;
  @media (max-width: 940px) {
    font-size: 1.5em;
  }
`;

const Image = styled.img`
  width: 55em;
  height: 45em;
  margin: 2em auto;
  object-fit: contain;
  @media (max-width: 940px) {
    width: 100%;
    height: auto;
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
  padding: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin: 0.5em 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-align: left;
  @media (max-width: 940px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

const getArticle = async (id: string) => {
  try {
    const res = await articleClient.get(`/article/${id}`);
    const data = await res.data;
    return data;
  } catch (err) {
    alert(err);
  }
};

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = React.useState<any>();
  const [path, setPath] = React.useState<any>();

  useEffect(() => {
    getArticle(id)
      .then((data) => {
        setArticle(data.article);
        setPath(data.article.imageHeadline.path.split("/"));
      })
      .catch((err) => alert(err));
  }, []);

  return article !== undefined ? (
    <ArticleWrapper>
      <HeaderDiv>
        <HeaderTitle>{article.title}</HeaderTitle>
        {path !== undefined ? (
          <Image
            src={`http://localhost:8000/images/${path[path.length - 1]}`}
          />
        ) : null}
      </HeaderDiv>
      <ContentWrapper>{parse(article.content)}</ContentWrapper>
    </ArticleWrapper>
  ) : (
    <div>Loading...</div>
  );
};

export default ArticlePage;
