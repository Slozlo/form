import React, { memo } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Roboto";
  display: block;
  cursor: pointer;
  position: relative;
  width: 100px;
  padding: 0;
  background: #00ae68;
  font-weight: 600;
  text-align: center;
  margin-right: 7px;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;
  font-size: 13px;
  &:hover {
    background: #21825b;
  }
  &:focus {
    outline: none;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1199px) {
    margin-top: 5px;
    width: 100%;
    margin-right: 0;
    margin-bottom: 7px;
  }
`;

const ButtonComponent = (props: any) => {
  const { children, ...otherProps } = props;
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default memo(ButtonComponent);
