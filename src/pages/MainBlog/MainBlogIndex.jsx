import React from "react";
import styled from "styled-components";
import { HeadTitle } from "../../components/Title";
import NavBar from "../../components/NavBar";

import Footer from "../../components/Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Outlet } from "react-router-dom";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background: #1a1a1a;
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
`;

function MainBlog() {
  return (
    <BlogContainer>
      <HeadContainer>
        <HeadTitle headStyles={{ marginTop: 20 }} />
        <NavBar />
      </HeadContainer>
      <Outlet />
      <Footer />
    </BlogContainer>
  );
}

export default MainBlog;
