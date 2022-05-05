import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import TitleLogo from "../static/images/title_logo.jpg";

function SliderElement({ title, text, author, styles }) {
  const ref = useRef(null);
  useEffect(() => {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  const LinkElementWrapper = styled.div`
    height: fit-content;
    width: 150em;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  `;

  /* 
   animation: slide 12s infinite;
    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(-${ref.current ? ref.current.offsetWidth : 0}px);
      }
      50% {
        transform: translateX(
          -${ref.current ? ref.current.offsetWidth * 2 : 0}px
        );
      }
      75% {
        transform: translateX(
          -${ref.current ? ref.current.offsetWidth * 3 : 0}px
        );
      }
      100% {
        transform: translateX(0);
      }
    }
  */

  const SliderElementH1 = styled.h1`
    font-size: 1.6em;
    font-weight: 700;
    font-family: spacy;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 20px;
  `;

  const SliderElementP = styled.p`
    font-size: 0.6em;
    font-weight: 300;
    font-family: spacy;
    color: #eeeeee;
  `;

  const SliderAuthorName = styled.p`
    color: #ff2e63;
    font-size: 1em;
    font-weight: 300;
    font-family: spacy;
    margin: 10px 0;
  `;

  const SliderElementImg = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 10px;
  `;

  return (
    <LinkElementWrapper
      ref={ref}
      href="/"
      style={{
        border: "1px solid #fff",
        maxWidth: "20%",
      }}
    >
      <SliderElementImg src={TitleLogo}></SliderElementImg>
      <div
        className="slider-text"
        style={{
          width: "50%",
          marginRight: 20,
        }}
      >
        <SliderElementH1>{title}</SliderElementH1>
        <span
          class="author-name"
          style={{
            fontSize: "0.6em",
            fontWeight: "300",
            fontFamily: "spacy",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          By|<SliderAuthorName>{author}</SliderAuthorName>
        </span>
        <SliderElementP>{text}</SliderElementP>
      </div>
    </LinkElementWrapper>
  );
}

export default SliderElement;
