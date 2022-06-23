import ArrowLeftTwoToneIcon from "@mui/icons-material/ArrowLeftTwoTone";
import { ArticleButtonDiv } from "./ArticlePaginationBtnElements";
import { NavLink } from "react-router-dom";

function ArticlePaginationBtnLeft({ style, onClick, place }) {
  return (
    <ArticleButtonDiv style={style}>
      <ArrowLeftTwoToneIcon />
      <NavLink
        to={place}
        style={{
          display: "inline-block",
          width: "100%",
          fontSize: "1rem",
          lineHeight: "1.5",
          textAlign: "center",
          textTransform: "uppercase",
          padding: "8px 15px",
          boxSizing: "border-box",
        }}
        onClick={onClick}
      >
        older posts
      </NavLink>
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnLeft;
