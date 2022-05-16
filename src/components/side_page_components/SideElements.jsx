import React from "react";
import CategoryBox from "./CategoryBox";
import SearchBox from "./SearchBox";
import { SideWrapper } from "../../pages/MainBlog/BlogContent";

function SideElements() {
  return (
    <SideWrapper grow="2">
      <SearchBox />
      <CategoryBox />
    </SideWrapper>
  );
}

export default SideElements;
