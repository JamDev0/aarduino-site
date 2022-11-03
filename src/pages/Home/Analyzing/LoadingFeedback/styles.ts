import { CircleNotch } from "phosphor-react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
  }
`

export const LoadingFeedback = styled(CircleNotch)`
  animation-name: ${animation};
  animation-duration: 800ms;
  animation-timing-function: cubic-bezier(0.650, -0.200, 0.200, 1.230);
  animation-iteration-count: infinite;

  line-height: 0;
`