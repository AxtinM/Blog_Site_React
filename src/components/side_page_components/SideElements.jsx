import React from "react";
import CategoryBox from "./CategoryBox";
import SearchBox from "./SearchBox";
import { SideWrapper } from "../../pages/MainBlog/BlogContent";

function SideElements({ isThousand }) {
  return (
    <SideWrapper grow="1">
      <SearchBox />
      <CategoryBox />
    </SideWrapper>
  );
}

export default SideElements;
