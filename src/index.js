import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainBlogIndex from "./pages/MainBlog/MainBlogIndex";
import BlogContent from "./pages/MainBlog/BlogContent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<MainBlogIndex />}>
          <Route path="/" element={<BlogContent />} />
        </Route>
        <Route path="/attigmohamed" element={<Home />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
