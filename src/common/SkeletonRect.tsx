import styled, {
  css,
  keyframes,
  InterpolationFunction,
} from "styled-components";
import { applySkeletonGradient } from "./mixins";

interface Props {
  width: string;
  height: string;
  radius?: string;
  inline?: boolean;
  className?: string;
}

export interface SkeletonGradientProps {
  lighter?: boolean;
}

const Skeleton = styled.div<Props>`
  ${applySkeletonGradient};
  display: ${({ inline }) => (inline ? "inline-block" : "block")};
  ${({ width, height, radius }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${radius || "1rem"};
  `};
`;

export const SkeletonRect: React.FC<Props> = (props) => {
  return <Skeleton {...props} />;
};
