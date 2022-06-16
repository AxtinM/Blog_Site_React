import styled from "styled-components";
import { animated } from "react-spring";

const ParagraphWrapper = styled(animated.div)`
  width: 520px;
  height: fit-content;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 1em;

  @media (max-width: 1180px) {
    width: 430px;
    align-items: center;
    text-align: center;
    margin: 2em 0;
    padding: 0 1em;
  }
`;

const Header = styled(animated.h6)`
  font-size: 3rem;
  font-weight: bold;
  color: #eee;
  font-family: spacy;
  text-align: left;
  @media (max-width: 1180px) {
    font-size: 1.6rem;
    align-items: center;
    text-align: center;
  }
`;

const Paragragraph = styled(animated.p)`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: normal;
  color: #eee;
  margin: 1em 0;
  padding: 0;
  font-family: spacy;
  margin-bottom: 1rem;
  text-align: left;
  @media (max-width: 1180px) {
    font-size: 0.7rem;
    align-items: center;
    text-align: center;
    width: 400px;
    margin: 1em 1em;
    box-sizing: border-box;
  }
`;

const PageDeviderDiv = styled(animated.div)`
  width: 100%;
  height: fit-content;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1180px) {
    flex-direction: column;
    margin: 4em 0;
  }
`;

const Box = styled(animated.div)`
  width: 800px;
  height: 990px;
  border: 3px solid #eee;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 30px;
  padding: 2em;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1100px) {
    width: 80%;
    height: 900px;
    margin: 0 2em;
  }
  @media (max-width: 820px) {
    width: 90%;
    height: 800px;
    padding: 1em;
  }
  @media (max-width: 460px) {
    height: 600px;
  }
`;

const BoxHeader = styled.div`
  width: 40%;
  min-width: fit-content;
  height: fit-content;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  color: #000;
  border-top-left-radius: 30px;
  align-self: flex-start;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 500px;
  border: none;
  background-color: #eee;
  color: #000;
  font-size: 1.2rem;
  font-family: spacy;
  padding: 1em;
  resize: none;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 1em 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 30rem;
  }
  @media (max-width: 460px) {
    font-size: 0.7rem;
    height: 40rem;
  }
`;

const MediaInput = styled.input`
  width: 60%;
  min-width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;
  resize: none;
  outline: none;
  color: #000;
  font-size: 0.6rem;
  font-family: spacy;
`;

const BoxButton = styled.button`
  width: 120px;
  height: 50px;
  padding: 14px;
  border-radius: 15px;
  color: #000;
  background-color: #eee;
  border: none;
  font-size: 1.2em;
  font-family: spacy;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 820px) {
    padding: 5px;
    width: 90px;
    height: 30px;
    border-radius: 10px;
  }
`;

const SvgImageWrapper = styled(animated.img)`
  width: 465px;
  height: 400px;
  @media (max-width: 1180px) {
    width: 400px;
    height: 300px;
    margin-left: 2em;
  }
`;

export {
  ParagraphWrapper,
  Header,
  Paragragraph,
  PageDeviderDiv,
  Box,
  BoxHeader,
  TextArea,
  MediaInput,
  BoxButton,
  SvgImageWrapper,
};
