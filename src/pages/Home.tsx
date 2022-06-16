import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Button from "@mui/material/Button";
import ProfileImage from "../static/images/me_pic3.jpg";
import MyResume from "../static/mohamed_attig_cv.pdf";
import Typewriter from "typewriter-effect";
import Loading from "../components/Loading";
import BlogArtical from "../components/BlogArtical";
import DownloadIcon from "@mui/icons-material/Download";
import EnterComponent from "../components/EnterComponent";
import SiteBranding from "../components/SiteBranding";

interface QuoteInterface {
  text: string;
  author?: string;
}

export default function Home() {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.pdf`;
    link.href = MyResume;
    link.click();
  };

  const getTime = (date) => {
    return `${
      date.getHours().toString().length === 1
        ? `0${date.getHours().toString()}`
        : date.getHours().toString()
    }:${
      date.getMinutes().toString().length === 1
        ? `0${date.getMinutes().toString()}`
        : date.getMinutes().toString()
    }`;
  };
  // Math.floor(Math.random()*100)
  const date = new Date();

  const [time, setTime] = useState(getTime(date));
  const [quote, setQuote] = useState<QuoteInterface | null>();
  // const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [onLanding, setOnLanding] = useState(true);
  const getQuotes = async () => {
    const data = await fetch("https://type.fit/api/quotes")
      .then((res) => {
        const data = res.json();
        return data;
      })
      .catch((err) => console.log(err));
    // const random = Math.floor(Math.random() * 100);
    setQuote(data[6]);
    setTimeout(() => {
      console.log("timeout done");
      setIsLoading(true);
    }, 500);
  };
  useEffect(() => {
    getQuotes();
    if (quote !== undefined) {
      console.log(quote.text);
    }
    // const data = await quoteClient.get("quotes");
    setTimeout(() => {
      setTime(getTime(new Date()));
    }, 10000);
  }, []);

  return (
    <>
      {isLoading ? (
        onLanding === true ? (
          <div className="landing">
            <div id="bg-img"></div>
            <Button
              variant="outlined"
              onClick={() => {
                setOnLanding(false);
              }}
              sx={{ position: "absolute", top: 30, right: 30, color: "#fff" }}
            >
              enter
            </Button>
            <span id="landing-element">
              <h1 id="landing-time">{time.toString()}</h1>
              <span id="landing-quote">
                <blockquote>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(quote.text).pauseFor(1000).start();
                    }}
                  />
                  {/* <footer>
                    <cite>
                      <Typewriter
                        skipAddStyles={true}
                        onInit={(typewriter) => {
                          typewriter.typeString(quote.author).start();
                        }}
                      />
                    </cite>
                  </footer> */}
                </blockquote>
              </span>
            </span>
          </div>
        ) : (
          <div className="main">
            <SiteBranding />
            <div className="switch">
              <Button
                size="small"
                variant="outlined"
                onClick={() => {
                  onDownload();
                }}
                sx={{
                  fontSize: 17,
                  marginTop: 10,
                  marginLeft: 5,
                  color: "#fff",
                }}
                endIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </div>
            <main className="site-main">
              <div className="about">
                <div className="about-content content-information">
                  <h1 className="content-title">About</h1>
                  <p className="content-text">
                    <h4 className="first-letter">T</h4>his blog site is written
                    by me, Mohamed Attig | Ax, I am based in Sousse, Tunisia. I
                    previously worked at Sastec-Group, Currently i continue to
                    work as a freelancer, and an undergraduate student at Higher
                    Institute of Computer Science and Communication
                    Techniques.I've worked on a variety of projects ranging from
                    embedded systems development to mobile development to web
                    development. I've worked on various intriguing electronic
                    gadgets that have given me a better grasp of how electronics
                    operate and how to connect with them safely. I can
                    confidently claim to know a droplet in an ocean of
                    knowledge, but I'm also aware of and fascinated by the
                    notion that our minds are like sponges, continually soaking
                    up an unending supply of information.
                  </p>
                </div>
                <div className="image-content">
                  <img
                    id="about-image"
                    className="content-image"
                    src={ProfileImage}
                    alt="Mohamed"
                  />
                  <figcaption>
                    IT Event, where i was invited as a python coach.
                  </figcaption>
                </div>
              </div>
              <EnterComponent />
            </main>
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
}
