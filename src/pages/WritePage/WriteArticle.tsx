import React from "react";
import { useSelector } from "react-redux";
import { selectAuthState, selectUser } from "../../features/useSlices";
import LogRegComponent from "../../components/WritePageComponents/LogRegComponents/LogRegComponent";
import CustomEditor from "../../components/WritePageComponents/MediumWriter/CustomEditor";
// import Editor from "../../components/WritePageComponents/MediumWriter/FuncEditorComp";
import SubscribeComponent from "../../components/WritePageComponents/SubscribeWriter/SubscribeComponent";
import { useEffect, useState } from "react";

function WriteArticle() {
  const isLoggedIn = useSelector(selectAuthState);
  const user = useSelector(selectUser);
  const [author, setAuthor] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      if (user.user.isAuthor) {
        setAuthor(true);
      }
    }
  }, [isLoggedIn]);

  return isLoggedIn ? (
    author === false ? (
      <SubscribeComponent />
    ) : (
      <CustomEditor />
    )
  ) : (
    <LogRegComponent />
  );
}

export default WriteArticle;
