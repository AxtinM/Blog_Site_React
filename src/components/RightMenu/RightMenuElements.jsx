import styled from "styled-components";
import { animated } from "react-spring";

const StickElement = styled(animated.span)`
  height: 4px;
  width: 1.5rem;
  background-color: #fff;
  display: block;
  margin: 5px 0;
  border-radius: 5px;
`;

const VerticleStickElement = styled(animated.span)`
  height: 4px;
  width: 1.5rem;
  background-color: #fff;
  display: block;
  margin: 5px 0;
  border-radius: 5px;
  transition: rotate(90deg);
`;

const MenuWrapper = styled(animated.div)`
  height: fit-content;
  width: 1.5rem;
  position: absolute;
  right: 20px;
  top: 20px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: spacy;
`;

const DropDownMenu = styled(animated.div)`
  width: 6em;
  height: 5em;
  position: relative;
  top: -7px;
  right: 5em;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const MenuBtn = styled(animated.button)`
  width: 80%;
  height: 2em;
  border: 3px solid #fff;
  border-radius: 15px;
  padding: 15px 15px;
  color: #fff;
  background-color: inherit;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;

  &:hover {
    color: rgb(255, 46, 99);
  }
`;

export { StickElement, MenuWrapper, DropDownMenu, MenuBtn };
