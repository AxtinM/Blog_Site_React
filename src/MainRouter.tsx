import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBlogIndex from "./pages/MainBlog/MainBlogIndex";
import BlogContent from "./pages/MainBlog/BlogContent";
import Blog from "./pages/Blog";
import WriteArticle from "./pages/WritePage/WriteArticle";

function MainRouter() {
  return (
    <Router>
      {/* <React.StrictMode> */}
      <Routes>
        <Route path="/" element={<MainBlogIndex />}>
          <Route path="/" element={<BlogContent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/write" element={<WriteArticle />} />
        </Route>
        <Route path="/attigmohamed" element={<Home />} />
      </Routes>
      {/* </React.StrictMode> */}
    </Router>
  );
}

export default MainRouter;
