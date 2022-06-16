import styled from "styled-components";
import { animated } from "react-spring";

const HeaderText = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  color: #eee;
  margin: 2em 0;
  padding: 0;
  font-family: spacy;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SwitchButtonWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  background-color: #eee;
  z-index: 1;
  margin-bottom: 1em;
`;

const SwitchButton = styled(animated.button)`
  width: 5em;
  height: 3em;
  border: none;
  font-family: spacy;
  font-size: 1rem;
  color: #ff5a50;
  font-weight: 600;
`;

const LogRegBox = styled.div`
  width: 550px;
  height: 800px;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid #eee;
  border-radius: 30px;
  position: relative;
  @media (max-width: 768px) {
    width: 95%;
    border: none;
  }
`;

const InsideFormWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;
  background-color: inherit;
  z-index: 1;
  padding: 1em;
`;

const LabelText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #eee;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  text-align: left;
  font-family: spacy;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const InputBox = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 20px;
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 12px;
  font-family: spacy;
  background-color: inherit;
`;

const SubmitButton = styled(animated.button)`
  width: 120px;
  height: 50px;
  border: 3px solid #eee;
  background-color: inherit;
  font-family: spacy;
  font-size: 1rem;
  font-weight: 600;
  color: #ff5a50;
  border-radius: 15px;
  opacity: 0.8;
  cursor: pointer;
  position: absolute;
  bottom: 1em;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 768px) {
    width: 100px;
    height: 40px;
  }
`;

export {
  HeaderText,
  SwitchButtonWrapper,
  SwitchButton,
  InsideFormWrapper,
  LabelText,
  InputBox,
  LogRegBox,
  SubmitButton,
};
