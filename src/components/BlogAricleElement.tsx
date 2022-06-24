import styled from "styled-components";
import {
  SliderElementImg,
  SliderElementH1,
  SliderElementP,
  SliderAuthorName,
} from "./SliderElement";

const BlogArticleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  margin-left: 5px;
  margin-bottom: 4em;
  margin-top: 1em;
  width: 45rem;
`;
const TextContentWrapper = styled.div`
  margin-left: 20px;
`;

function BlogAricleElement({ data }) {
  const path: any = data.imageHeadline.path.split("/");
  const _len: number = path.length - 1;
  return (
    <BlogArticleWrapper>
      <SliderElementImg src={`http://localhost:8000/images/${path[_len]}`} />
      <TextContentWrapper>
        {/* @ts-ignore */}
        <SliderElementH1>{data.title}</SliderElementH1>
        <span
          className="author-name"
          style={{
            fontSize: "1em",
            fontWeight: "300",
            fontFamily: "spacy",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          By |<SliderAuthorName>{`@${data.author.username}`}</SliderAuthorName>
        </span>
        {/* <SliderElementP>
          {data.porps.content}
        </SliderElementP> */}
      </TextContentWrapper>
    </BlogArticleWrapper>
  );
}

export default BlogAricleElement;
