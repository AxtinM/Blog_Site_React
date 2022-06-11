import React from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../../features/useSlices";
import LogRegComponent from "../../components/WritePageComponents/LogRegComponents/LogRegComponent";
import SubscribeComponent from "../../components/WritePageComponents/SubscribeWriter/SubscribeComponent";

function WriteArticle() {
  const isLoggedIn = useSelector(selectAuthState);
  console.log(isLoggedIn);

  return isLoggedIn ? <SubscribeComponent /> : <LogRegComponent />;
}

export default WriteArticle;
