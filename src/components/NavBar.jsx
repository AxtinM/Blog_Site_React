import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

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

const NavBarLink = styled(animated.a)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #eeeeee;
  padding: 10px;
  font-size: 1em;
  font-weight: 700;
  font-family: spacy;
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
  const [donateClicked, setDonateClicked] = useState(false);

  const AboutMeSpring = useSpring({
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

  const DonateSpring = useSpring({
    transform: donateClicked ? "translateY(-15px)" : "translateY(0px)",
    color: donateClicked ? "#FF2E63" : "#EEEEEE",
  });

  return (
    <Main>
      <NavBarContainer>
        <NavBarLink
          style={AboutMeSpring}
          href="/"
          onMouseEnter={() => setAboutMeClicked(!aboutMeClicked)}
          onMouseLeave={() => setAboutMeClicked(!aboutMeClicked)}
        >
          About Me
        </NavBarLink>
        <NavBarLink
          style={BlogSpring}
          href="/"
          onMouseEnter={() => setBlogClicked(!blogClicked)}
          onMouseLeave={() => setBlogClicked(!blogClicked)}
        >
          Blog
        </NavBarLink>
        <NavBarLink
          style={AboutSpring}
          href="/"
          onMouseEnter={() => setAboutClicked(!aboutClicked)}
          onMouseLeave={() => setAboutClicked(!aboutClicked)}
        >
          About
        </NavBarLink>
        <NavBarLink
          style={DonateSpring}
          href="/"
          onMouseEnter={() => setDonateClicked(!donateClicked)}
          onMouseLeave={() => setDonateClicked(!donateClicked)}
        >
          donate
        </NavBarLink>
      </NavBarContainer>
      <HeadSpanLine />
    </Main>
  );
}

export default NavBar;