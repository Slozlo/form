import React, { memo } from "react";
// @ts-ignore
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledLoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderComponent = () => {
  return (
    <StyledLoaderContainer>
      <Loader type="ThreeDots" color="#00ae68" height="100" width="100" />
    </StyledLoaderContainer>
  );
};

export default memo(LoaderComponent);
