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

import "../../styles/modal.css";

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
      <div className="header-modal-wrapper">
        {loginBtn ? (
          <ModalTitle>Login</ModalTitle>
        ) : (
          <ModalTitle
            style={{
              flexGrow: 2,
            }}
          >
            Create Account
          </ModalTitle>
        )}
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
      {loginBtn ? (
        <>
          <div className="label-input-wrapper">
            <LabelInputComponent
              label="Email"
              type="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="label-input-wrapper">
            <LabelInputComponent
              placeholder="***********"
              label="Password"
              type="password"
              text="Did You Forget Your Password?"
            />
          </div>
          <div className="button-modal-wrapper">
            <ModalBtn style={{ color: "#FF2E63" }}>Login</ModalBtn>
            <ModalBtn
              onClick={() => {
                setRegisterBtn(!registerBtn);
                setLoginBtn(!loginBtn);
              }}
            >
              Register
            </ModalBtn>
          </div>
        </>
      ) : (
        <>
          <div className="label-input-wrapper">
            <LabelInputComponent label="Name" placeholder="John Davidson" />
          </div>
          <div className="label-input-wrapper">
            <LabelInputComponent label="Alias" placeholder="TheDarkNight" />
          </div>
          <div className="label-input-wrapper">
            <LabelInputComponent
              label="Email"
              type="email"
              placeholder="example@mail.com"
            />
          </div>
          <div className="label-input-wrapper">
            <LabelInputComponent
              placeholder="***********"
              label="Password"
              type="password"
            />
          </div>
          <div className="button-modal-wrapper">
            <ModalBtn style={{ color: "#FF2E63" }}>Register</ModalBtn>
            <ModalBtn
              onClick={() => {
                setRegisterBtn(!registerBtn);
                setLoginBtn(!loginBtn);
              }}
            >
              Login
            </ModalBtn>
          </div>
        </>
      )}
    </ModalMenuWrapper>
  );
}

export default AuthModalMenu;
