import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import { ArticleButtonDiv } from "./ArticlePaginationBtnElements";

function ArticlePaginationBtnRight({ onClick }) {
  return (
    <ArticleButtonDiv onClick={onClick}>
      Newer posts
      <ArrowRightTwoToneIcon />
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnRight;
