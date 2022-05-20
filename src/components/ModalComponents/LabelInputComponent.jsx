import React from "react";
import {
  ModalLable,
  ModalInput,
  LabelInputWrapper,
  ModalChangePassText,
} from "./ModalComponents";

function LabelInputComponent({ label, type, text, placeholder, sm }) {
  return (
    <LabelInputWrapper sm>
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
