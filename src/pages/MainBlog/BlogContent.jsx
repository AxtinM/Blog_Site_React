import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SliderElement from "../../components/SliderElement";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import BlogAricleElement from "../../components/BlogAricleElement";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SideElements from "../../components/side_page_components/SideElements";

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

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 3em;
`;

const SliderContainer = styled.div`
  width: 55%;
  height: 350px;
  margin: 0 auto;
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 100px 0;
  box-size: border-box;
  position: relative;
  overflow: hidden;
`;

const BlogHeaderWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

const BlogHeader = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
  font-family: spacy;
  color: #fff;
  margin-bottom: 3px;
  margin-top: 20px;
`;
const BlogHeaderDevider = styled.span((props) => ({
  width: "100%",
  height: "5px",
  backgroundColor: "#fff",
  display: "block",
  marginTop: "0",
  marginBottom: props.box ? "20px" : "2em",
}));
const Articles = styled.div`
  margin: 5em 0;
  flex-grow: 0.3;
`;

const SideWrapper = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: props.grow,
  marginTop: "14em",
}));

// const SideBox = styled.div((props) => ({
//   height
// }));

function MainBlog() {
  let arr = [
    <BlogAricleElement />,
    <BlogAricleElement />,
    <BlogAricleElement />,
    <BlogAricleElement />,
    <BlogAricleElement />,
    <BlogAricleElement />,
    <BlogAricleElement />,
    <BlogAricleElement />,
  ];
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(3);

  useEffect(() => {
    console.log("min/max changed");
    console.log(max);
  }, [min, max]);

  return (
    <>
      <SliderContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={200}
          slidesPerView={1}
          rewind={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
        >
          {DATA.map((e, i) => (
            <SwiperSlide>
              <SliderElement
                title={e.title}
                text={e.text}
                author={e.author}
                key={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
      <MainWrapper>
        <SideWrapper grow="1"></SideWrapper>
        <Articles>
          <BlogHeaderWrapper>
            <BlogHeader>Recent Articles</BlogHeader>
          </BlogHeaderWrapper>
          <BlogHeaderDevider></BlogHeaderDevider>
          {arr.slice(min, max).map((x) => (
            <BlogAricleElement />
          ))}
          <button
            onClick={() => {
              setMin(0);
              setMax(3);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setMin(4);
              setMax(6);
            }}
          >
            2
          </button>
        </Articles>
        <SideElements />
      </MainWrapper>
    </>
  );
}

export {
  MainWrapper,
  SideWrapper,
  BlogHeaderWrapper,
  BlogHeader,
  BlogHeaderDevider,
};
export default MainBlog;
