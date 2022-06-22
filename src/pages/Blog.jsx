import { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "../components/Article";
import { MainWrapper, SideWrapper } from "./MainBlog/BlogContent";
import SideElements from "../components/side_page_components/SideElements";
import Image from "../static/images/wp5.jpg";
import Image2 from "../static/images/wp3.jpg";
import Image3 from "../static/images/wp6.jpg";
import Image4 from "../static/images/wp1.jpg";
import ArticlePaginationBtn from "../components/ArticleButton/ArticlePaginationBtnLeft";
import ArticlePaginationBtnRight from "../components/ArticleButton/ArticlePaginationBtnRight";
import { articleClient } from "../client";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const getArticle = async (num) => {
  try {
    const res = await articleClient.get(`/${num}`);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
    alert("There is an Error getting articles");
  }
};

const ArticleWrapper = styled.div`
  flex-grow: 1;
  @media (max-width: 1000px) {
    flex-grow: 4;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2.5em 0 0 0;
  padding-right: 10px;
  box-sizing: border-box;
`;

function Blog() {
  const { num } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getArticle(num)
      .then((res) => {
        console.log(res.articles);
        setData(res.articles);
      })
      .catch((err) => {
        console.log("ERR : ", err);
      });
    console.log(data);
  }, []);

  return data === null ? (
    <Loading />
  ) : (
    <MainWrapper style={{ padding: "3em 0" }}>
      <SideWrapper grow="2" />
      <ArticleWrapper>
        {data.map((_article, i) => (
          <Article key={i} data={_article} />
        ))}
        <ButtonsWrapper>
          <ArticlePaginationBtn style={undefined} />
          <ArticlePaginationBtnRight />
        </ButtonsWrapper>
      </ArticleWrapper>
      <SideElements isThousand={undefined} />
    </MainWrapper>
  );
}

export default Blog;
