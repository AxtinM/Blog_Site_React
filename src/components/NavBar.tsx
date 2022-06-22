import { useRef, useEffect, RefAttributes } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { Link, LinkProps } from "react-router-dom";
import "../styles/navbar.css";
import { MutableRefObject } from "react";
import { ForwardRefExoticComponent } from "react";

const Main = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin-top: 50px;
`;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 80%;
  max-width: 1200px;
  margin: 30px auto;
  margin-top: 0px;
`;

const NavBarLink = styled(animated.h5)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #eeeeee;
  padding: 10px;
  font-weight: 700;
  font-family: spacy;
  font-size: calc(13px + 0.7vw);
  cursor: pointer;
`;

const HeadSpanLine = styled.span`
  width: 80%;
  height: 5px;
  background: #fff;
`;

function NavBar() {
  const [aboutMeClicked, setAboutMeClicked] = useState(false);
  const [blogClicked, setBlogClicked] = useState(false);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [writeClicked, setWriteClicked] = useState(false);

  const HomeSpring = useSpring({
    transform: aboutMeClicked ? "translateY(-15px)" : "translateY(0px)",
    color: aboutMeClicked ? "#FF2E63" : "#EEEEEE",
  });

  const BlogSpring = useSpring({
    transform: blogClicked ? "translateY(-15px)" : "translateY(0px)",
    color: blogClicked ? "#FF2E63" : "#EEEEEE",
  });

  const AboutSpring = useSpring({
    transform: aboutClicked ? "translateY(-15px)" : "translateY(0px)",
    color: aboutClicked ? "#FF2E63" : "#EEEEEE",
  });

  const WriteSpring = useSpring({
    transform: writeClicked ? "translateY(-15px)" : "translateY(0px)",
    color: writeClicked ? "#FF2E63" : "#EEEEEE",
  });

  const homeRef = useRef<any>();
  const blogRef = useRef<any>();
  const aboutRef = useRef<any>();
  const writeRef = useRef<any>();

  useEffect(() => {
    if (
      homeRef.current !== null &&
      blogRef.current !== null &&
      aboutRef.current !== null &&
      writeRef.current !== null
    ) {
      console.log(homeRef.current);
      console.log(blogRef.current);
      console.log(aboutRef.current);
      console.log(writeRef.current);
    }
  }, []);

  return (
    <Main>
      <NavBarContainer>
        <Link className="nav-element" to="/" ref={homeRef} />
        <NavBarLink
          style={HomeSpring}
          onMouseEnter={() => setAboutMeClicked(!aboutMeClicked)}
          onMouseLeave={() => setAboutMeClicked(!aboutMeClicked)}
          onClick={() => {
            homeRef.current.click();
          }}
        >
          Home
        </NavBarLink>
        <Link className="nav-element" to="/blog/1" ref={blogRef} />
        <NavBarLink
          style={BlogSpring}
          onMouseEnter={() => setBlogClicked(!blogClicked)}
          onMouseLeave={() => setBlogClicked(!blogClicked)}
          onClick={() => {
            blogRef.current.click();
          }}
        >
          Blog
        </NavBarLink>
        <Link className="nav-element" to="/attigmohamed" ref={aboutRef} />
        <NavBarLink
          style={AboutSpring}
          onMouseEnter={() => setAboutClicked(!aboutClicked)}
          onMouseLeave={() => setAboutClicked(!aboutClicked)}
          onClick={() => {
            aboutRef.current.click();
          }}
        >
          About
        </NavBarLink>
        <Link className="nav-element" to="/write" ref={writeRef} />
        <NavBarLink
          style={WriteSpring}
          onMouseEnter={() => setWriteClicked(!writeClicked)}
          onMouseLeave={() => setWriteClicked(!writeClicked)}
          onClick={() => {
            writeRef.current.click();
          }}
        >
          Write
        </NavBarLink>
      </NavBarContainer>
      <HeadSpanLine />
    </Main>
  );
}

export default NavBar;
