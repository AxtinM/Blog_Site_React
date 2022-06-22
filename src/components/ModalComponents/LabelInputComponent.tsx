import React from "react";
import {
  ModalLable,
  ModalInput,
  LabelInputWrapper,
  ModalChangePassText,
} from "./ModalComponents";

function LabelInputComponent({
  label,
  type,
  text,
  placeholder,
  sm,
  value,
  onChange,
}) {
  return (
    // @ts-ignore
    <LabelInputWrapper sm>
      <ModalLable>{label}</ModalLable>
      <ModalInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {text != undefined ? (
        <ModalChangePassText>{text}</ModalChangePassText>
      ) : (
        ""
      )}
    </LabelInputWrapper>
  );
}

export default LabelInputComponent;
