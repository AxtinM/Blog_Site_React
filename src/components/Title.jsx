import React from "react";
import "../styles/home.css";

const HeadTitle = ({ headStyles }) => {
  return (
    <h1 className="site-title" style={headStyles}>
      Andromeda
    </h1>
  );
};

const Quote = () => {
  return (
    <div>
      <blockquote id="site-quote">AUT VIAM INVENIAM AUT FACIAM.</blockquote>
      <cite>&mdash; Hannibal Barca</cite>
    </div>
  );
};
function Title() {
  return (
    <a className="link-title" href="/">
      <HeadTitle />
      <h2>
        Attig.M <blinking>|</blinking> Ax
      </h2>
    </a>
  );
}

export { Title, Quote, HeadTitle };
