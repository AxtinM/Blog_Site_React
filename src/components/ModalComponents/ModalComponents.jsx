import styled from "styled-components";
import { animated } from "react-spring";

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(238, 238, 238, 0.4);
  z-index: 10;
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

const ModalMenuWrapper = styled(animated.div)`
  height: 28em;
  width: 23em;
  background-color: #fff;
  z-index: 20;
  border-radius: 25px;
  color: #222831;
  display: flex;
  justify-content: space-around;
  font-family: spacy;
  flex-direction: column;
  box-sizing: border-box;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  position: relative;
  opacity: 0;
`;

const ModalTitle = styled.h1`
  text-align: center;
  font-size: calc(1.3rem + 0.8vw);
  font-style: bold;
  color: inherit;
`;

const ModalLable = styled.h3`
  font-size: calc(12px + 0.5vw);
  color: inherit;
  margin-bottom: 15px;
`;

const ModalInput = styled.input`
  border: 2px solid #222831;
  width: 100%;
  padding: 9px 15px;
  font-size: 20px;
  color: inherit;
  border-radius: 20px;
`;

const LabelInputWrapper = styled.div`
  width: 70%;
  height: fit-content;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const ModalBtn = styled(animated.button)`
  height: 1.7rem;
  width: 5rem;
  border: 2px solid #222831;
  background-color: #fff;
  color: inherit;
  font-size: calc(12px + 0.5vw);
  font-family: spacy;
  border-radius: 20px;
  margin: 0.7em 0 0.5em 0;
  cursor: pointer;
  &:hover {
    background-color: #222831;
    color: #fff;
  }
`;

const ModalChangePassText = styled.p`
  font-size: calc(10px + 0.2vw);
  color: #393e46;
  align-self: flex-end;
  margin-top: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ModalCrossWrapper = styled(animated.span)`
  display: block;
  position: absolute;
  background-color: inherit;
  right: 35px;
  top: 40px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  box-sizing: box-border;
`;

const ModalCrossStick = styled.span((props) => ({
  height: "4px",
  width: "1rem",
  backgroundColor: "#ff2e63",
  display: "block",
  borderRadius: "5px",
  transform: props.transform,
}));

export {
  ModalWrapper,
  ModalMenuWrapper,
  ModalTitle,
  ModalLable,
  ModalInput,
  LabelInputWrapper,
  ModalBtn,
  ModalChangePassText,
  ModalCrossWrapper,
  ModalCrossStick,
};
