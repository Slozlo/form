import React, { memo, useCallback } from "react";
import { FieldComponentProps } from "./models";
import styled from "styled-components";

const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
  @media (max-width: 1199px) {
    flex-direction: column;
    align-items: baseline;
`;

const StyledLabel = styled.label`
  width: 100px;
  margin-right: 5px;
  color: #aaa;
  font-size: 14px;
  @media (max-width: 1199px) {
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const StyledInput = styled.input`
  font-family: "Roboto";
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  font-size: 13px;
  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
  @media (max-width: 1199px) {
    margin: 0;
  }
`;

const FieldComponent = (props: FieldComponentProps) => {
  const { name, label, value, onChange, ...otherProps } = props;
  return (
    <StyledFieldContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        type="text"
        {...otherProps}
      />
    </StyledFieldContainer>
  );
};

export default memo(FieldComponent);
