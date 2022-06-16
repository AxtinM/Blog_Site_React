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
import ArticlePaginationBtnLeft from "../../components/ArticleButton/ArticlePaginationBtnLeft";
import { useWindowSize } from "../../components/RightMenu/profileMenu/Profile";

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
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
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
  @media (max-width: 1750px) {
    width: 45rem;
  }
  @media (max-width: 1270px) {
    width: 90%;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const BlogHeaderWrapper = styled.div`
  width: 70%;
  height: fit-content;
  @media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const BlogHeader = styled.h1`
  font-size: 1.2em;
  font-weight: 700;
  font-family: spacy;
  color: #fff;
  margin-bottom: 3px;
  margin-top: 20px;
`;
const BlogHeaderDevider = styled.span((props) => ({
  width: "100%",
  height: "4px",
  backgroundColor: "#fff",
  display: "block",
  marginTop: "0",
  marginBottom: props.box ? "20px" : "2em",
}));
const Articles = styled.div`
  margin: 5em 0;
  flex-grow: 1;
`;

const SideWrapper = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: props.grow,
  marginTop: "14em",
  "@media (max-width: 1000px)": {
    margin: "0 auto",
    width: "70%",
  },
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
  ];

  const [width, height] = useWindowSize();
  const [isThousand, setIsThousand] = useState(false);
  useEffect(() => {
    if (width < 1000) {
      setIsThousand(true);
      console.log("first");
    } else {
      setIsThousand(false);
      console.log("second");
    }
  });

  return (
    <>
      <SliderContainer>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={200}
          slidesPerView={1}
          rewind={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          navigation={isThousand ? false : true}
          centeredSlides={true}
          pagination={{ clickable: true }}
        >
          {DATA.map((e, i) => (
            <SwiperSlide>
              <SliderElement
                title={e.title}
                text={e.text}
                author={e.author}
                key={i}
                styles={undefined}
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
          {arr.slice(0, 5).map((x) => (
            <BlogAricleElement />
          ))}
          <ArticlePaginationBtnLeft
            style={{
              marginTop: "2em",
            }}
          />
        </Articles>
        <SideElements isThousand={isThousand} />
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
