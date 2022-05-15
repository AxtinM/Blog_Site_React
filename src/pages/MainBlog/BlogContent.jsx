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
  margin-bottom: 1em;
`;

const BlogHeader = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
  font-family: spacy;
  color: #fff;
  margin-bottom: 3px;
  margin-top: 20px;
`;
const BlogHeaderDevider = styled.span`
  width: 100%;
  height: 3px;
  background-color: #fff;
  display: block;
`;

const Articles = styled.div`
  width: 55%;
  margin: 5em auto;
`;

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
      <Articles>
        <BlogHeaderWrapper>
          <BlogHeader>Recent Articles</BlogHeader>
          <BlogHeaderDevider></BlogHeaderDevider>
        </BlogHeaderWrapper>
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
    </>
  );
}

export default MainBlog;
