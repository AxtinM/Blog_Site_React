import React from "react";
import styled from "styled-components";

const ArticleLocalWrapper = styled.div`
  height: fit-content;
  width: 33rem;
  margin: 1em 0;
`;

const ArticleImg = styled.img`
  height: 250px;
  width: inherit;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  margin: 0 0;
`;

const ArticleContentWrapper = styled.div`
  height: fit-content;
  width: 100%;
  background-color: #000;
  padding: 1em 1em;
  box-sizing: border-box;
  margin: 0 0;
`;

const ArticleHeader = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
  font-family: spacy;
  color: #fff;
  margin-bottom: 1rem;
`;

const ArticleUnderHeaderDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ArticleUnderHeaderP = styled.p`
  font-size: 0.75rem;
`;

const ArticleMainContentDiv = styled.div`
  height: fit-content;
  width: 100%;
  margin: 1em 0;
`;

const ArticleMainPBlock = styled.p`
  font-size: 0.7rem;
  margin: 0.5em 0 1em;
  overflow-wrap: break-word;
  box-sizing: border-box;
  line-height: 1.5;
`;

function Article(props) {
  return (
    <ArticleLocalWrapper>
      <ArticleImg src={props.image} />
      <ArticleContentWrapper>
        <ArticleHeader>
          When Hams Helped Polar Researchers Come In From The Cold
        </ArticleHeader>
        <ArticleUnderHeaderDiv>
          <ArticleUnderHeaderP>May 17, 2022 by Al Williams</ArticleUnderHeaderP>
          <ArticleUnderHeaderP>No comments</ArticleUnderHeaderP>
        </ArticleUnderHeaderDiv>
        <ArticleMainContentDiv>
          <ArticleMainPBlock>
            We always enjoy [The History Guy] videos, although many of them
            aren’t much about technology. However, when he does cover tech
            topics, he does it well and his recent video on how ham radio
            operators assisted in operation Deep Freeze is a great example. You
            can watch the video, below.
          </ArticleMainPBlock>
          <ArticleMainPBlock>
            The backdrop is the International Geophysical Year (IGY) where many
            nations cooperated to learn more about the Earth. In particular,
            from 1957 to 1958 there was a push to learn more about the last
            unexplored corner of our planet: Antarctica. Several of the
            permanent bases on the icy continent today were started during the
            IGY.
          </ArticleMainPBlock>
          <ArticleMainPBlock>
            It’s hard for modern audiences to appreciate what the state of
            personal communication was in 1957. There were no cell phones and if
            you are thinking about satellites, don’t forget that Sputnik didn’t
            launch until late 1957, so that wasn’t going to happen, either.
          </ArticleMainPBlock>
          <ArticleMainPBlock>
            Operation Deep Freeze had ten U. S. Navy vessels that brought
            scientists, planes, and Seabees (slang for members of the Naval
            Construction Batallion) — about 1,800 people in all over several
            years culminating in the IGY. Of course, the Navy had radio
            capabilities, but it wasn’t like the Navy to let you just call home
            to chat. Not to mention, a little more than 100 people were left for
            each winter and the Navy ships went home. That’s where ham radio
            operators came in.
          </ArticleMainPBlock>
          <ArticleMainPBlock>
            Hams would do what is called a phone patch for the people stationed
            in Antarctica. Some hams also send radiograms to and from the crew’s
            families. One teen named Jules was especially dedicated to making
            connections to Antarctica. We can’t verify it, but one commenter
            says that Jules was so instrumental in connecting his father in
            Antarctica to his fiancee that when his parents married, Jules was
            their best man.
          </ArticleMainPBlock>
        </ArticleMainContentDiv>
      </ArticleContentWrapper>
    </ArticleLocalWrapper>
  );
}

export default Article;
