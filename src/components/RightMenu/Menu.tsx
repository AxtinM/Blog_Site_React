import React, { useState } from "react";
import {
  StickElement,
  MenuWrapper,
  DropDownMenu,
  MenuBtn,
} from "./RightMenuElements";
import { useSpring } from "react-spring";

/*
setRegisterBtn={setRegisterBtn}
          registerBtn={registerBtn}
          setLoginBtn={setLoginBtn}
          loginBtn={loginBtn}
*/

function Menu({ setRegisterBtn, registerBtn, setLoginBtn, loginBtn }) {
  const [topStick, setTopStick] = useState(false);
  const [middleStick, setMiddleStick] = useState(false);
  const [bottomStick, setBottomStick] = useState(false);
  const [menu, setMenu] = useState(false);

  const TopSpring = useSpring({
    transform: topStick ? "translateX(-2em)" : "translateX(0em)",
    opacity: topStick ? "0" : "1",
  });

  const MidSpring = useSpring({
    backgroundColor: middleStick ? "rgb(255, 46, 99)" : "#fff",
  });

  const BottomSpring = useSpring({
    transform: bottomStick ? "translateX(2em)" : "translateX(0em)",
    opacity: bottomStick ? "0" : "1",
  });

  const MenuSpring = useSpring({
    transform: menu ? "translateY(0em)" : "translateY(2em)",
    opacity: menu ? "1" : "0",
  });

  return (
    <MenuWrapper
      onClick={() => {
        setTopStick(!topStick);
        setMiddleStick(!middleStick);
        setBottomStick(!bottomStick);
        setTimeout(() => {
          setMenu(!menu);
        }, 250);
      }}
    >
      <StickElement style={TopSpring} />
      <StickElement style={MidSpring} />
      <StickElement style={BottomSpring} />
      <DropDownMenu style={MenuSpring}>
        <MenuBtn
          onClick={() => {
            setLoginBtn(!loginBtn);
            setMenu(!menu);
            setTimeout(() => {
              setTopStick(!topStick);
              setMiddleStick(!middleStick);
              setBottomStick(!bottomStick);
            }, 250);
          }}
        >
          Login
        </MenuBtn>
        <MenuBtn
          onClick={() => {
            setRegisterBtn(!registerBtn);
            setMenu(!menu);
            setTimeout(() => {
              setTopStick(!topStick);
              setMiddleStick(!middleStick);
              setBottomStick(!bottomStick);
            }, 250);
          }}
        >
          Register
        </MenuBtn>
      </DropDownMenu>
    </MenuWrapper>
  );
}

export default Menu;
