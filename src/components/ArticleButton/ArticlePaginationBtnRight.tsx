import React from "react";
import ArrowRightTwoToneIcon from "@mui/icons-material/ArrowRightTwoTone";
import {
  ArticleButtonDiv,
  ArticleLinkTag,
} from "./ArticlePaginationBtnElements";
import { NavLink } from "react-router-dom";

function ArticlePaginationBtnRight({ place }) {
  return (
    <ArticleButtonDiv>
      <NavLink
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
        to={place}
      >
        Newer posts
      </NavLink>
      <ArrowRightTwoToneIcon />
    </ArticleButtonDiv>
  );
}

export default ArticlePaginationBtnRight;
