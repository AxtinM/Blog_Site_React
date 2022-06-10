import React from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../features/useSlices";
import LogRegComponent from "../components/WritePageComponents/LogRegComponents.jsx/LogRegComponent";

function WriteArticle() {
  const isLoggedIn = useSelector(selectAuthState);
  console.log(isLoggedIn);

  return isLoggedIn ? <div>WriteArticle</div> : <LogRegComponent />;
}

export default WriteArticle;
