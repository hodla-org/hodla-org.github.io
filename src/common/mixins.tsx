import { css, keyframes } from "styled-components";

const loading = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100vw);
    }
`;

export const applySkeletonGradient = () =>
  css`
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      animation: ${loading} 2s linear infinite;
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0.01) 25%,
        rgba(255, 255, 255, 0.03) 50%,
        rgba(255, 255, 255, 0.01) 75%,
        rgba(255, 255, 255, 0.03) 100%
      );
      top: 0;
      left: -100vw;
      width: 200vw;
      height: 100%;
    }
  `;
