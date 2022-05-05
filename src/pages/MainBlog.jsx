import React from "react";
import styled from "styled-components";
import { HeadTitle } from "../components/Title";
import NavBar from "../components/NavBar";
import SliderElement from "../components/SliderElement";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DATA = [
  {
    title: "New Tech And The Old Ways",
    text: "This week on Hackaday, we featured a project that tickled my nostalgia bone, and proved that there are cool opportunities when bringing new tech to old problems. Let me explain.",
    author: "Jorge Hamilton",
  },
  {
    title: "Our First Hackathon",
    text: "Today we hosted our first hackathon, and we were very excited to see what we could do with the tools we had. We had a lot of fun, and we learned a lot.",
    author: "Kent",
  },
  {
    title: "Ways to Learn",
    text: "We learned a lot about how to learn, and how to learn faster. We also learned about how to learn, and how to learn faster.",
    author: "Zachary",
  },
  {
    title: "How to Tell if a Thing is a Thing",
    text: "We learned a lot about how to tell if a thing is a thing, and how to tell if a thing is a thing. We also learned about how to tell if a thing is a thing, and how to tell if a thing is a thing.",
    author: "Bobby",
  },
];

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

const SliderContainer = styled.div`
  width: 55%;
  height: 700px;
  margin: 0 auto;
  margin-top: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.1);
  padding: 100px 0;
  box-size: border-box;
  position: relative;
`;
const SliderElementWrapper = styled.div`
  display: inline-block;
  width: 600em;
  height: fit-content;
  vertical-align: top;
`;

const SliderArrowLeftBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 1Opx;
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SliderArrowRightBox = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 10px 1Opx;
  position: absolute;
  right: 0;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const translateX = (ref, index) => {
  return `translateX(-${ref.current ? ref.current.offsetWidth * index : 0}px)`;
};

function MainBlog() {
  return (
    <BlogContainer>
      <HeadContainer>
        <HeadTitle headStyles={{ marginTop: 20 }} />
        <NavBar />
      </HeadContainer>
      <SliderContainer>
        <SliderArrowLeftBox onClick={() => {}}>
          <ArrowBackIosIcon fontSize="large" />
        </SliderArrowLeftBox>
        <SliderArrowRightBox>
          <ArrowForwardIosIcon fontSize="large" />
        </SliderArrowRightBox>
        <SliderElementWrapper>
          {DATA.map((e, i) => (
            <SliderElement
              styles={{}}
              title={e.title}
              text={e.text}
              author={e.author}
              key={i}
            />
          ))}
        </SliderElementWrapper>
      </SliderContainer>
    </BlogContainer>
  );
}

export default MainBlog;
