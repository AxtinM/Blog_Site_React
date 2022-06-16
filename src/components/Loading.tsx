import React from "react";
import ReactLoading from "react-loading";
import "../styles/loading.css";
function loading() {
  return (
    <div id="loading">
      <ReactLoading type="balls" height={120} width={70} color="#fff" />
    </div>
  );
}

export default loading;
