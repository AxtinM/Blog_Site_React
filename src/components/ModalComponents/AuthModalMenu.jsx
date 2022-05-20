import React, { useState } from "react";
import { useSpring } from "react-spring";
import {
  ModalMenuWrapper,
  ModalTitle,
  ModalBtn,
  ModalCrossWrapper,
  ModalCrossStick,
} from "./ModalComponents";

import LabelInputComponent from "./LabelInputComponent";

function AuthModalMenu({
  springStyle1,
  setRegisterBtn,
  registerBtn,
  setLoginBtn,
  loginBtn,
}) {
  const [cross, setCross] = useState(false);

  const CrossSpring = useSpring({
    transform: cross ? "rotate(360deg)" : "rotate(0deg)",
  });

  return (
    <ModalMenuWrapper style={springStyle1}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "inherit",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <ModalTitle>Login</ModalTitle>
        <ModalCrossWrapper
          style={CrossSpring}
          onMouseEnter={() => {
            setCross(true);
          }}
          onMouseLeave={() => {
            setCross(false);
          }}
          onClick={() => {
            setRegisterBtn(false);
            setLoginBtn(false);
          }}
        >
          <ModalCrossStick transform="translateY(2px) rotate(45deg)" />
          <ModalCrossStick transform="translateY(-2px) rotate(-45deg)" />
        </ModalCrossWrapper>
      </div>
      <div
        style={{
          width: "100%",
          color: "inherit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LabelInputComponent label="Email" placeholder="example@mail.com" />
      </div>
      <div
        style={{
          width: "100%",
          color: "inherit",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LabelInputComponent
          placeholder="***********"
          label="Password"
          type="password"
          text="Did You Forget Your Password?"
        />
      </div>
      <div
        style={{
          flexGrow: 1,
          fontFamily: "inherit",
          color: "inherit",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ModalBtn style={{ color: "#FF2E63" }}>Login</ModalBtn>
        <ModalBtn>Register</ModalBtn>
      </div>
    </ModalMenuWrapper>
  );
}

export default AuthModalMenu;
