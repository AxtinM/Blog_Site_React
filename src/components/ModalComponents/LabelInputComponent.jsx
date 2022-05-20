import React from "react";
import {
  ModalLable,
  ModalInput,
  LabelInputWrapper,
  ModalChangePassText,
} from "./ModalComponents";

function LabelInputComponent({ label, type, text, placeholder }) {
  return (
    <LabelInputWrapper>
      <ModalLable>{label}</ModalLable>
      <ModalInput type={type} placeholder={placeholder} />

      {text != undefined ? (
        <ModalChangePassText>{text}</ModalChangePassText>
      ) : (
        ""
      )}
    </LabelInputWrapper>
  );
}

export default LabelInputComponent;
