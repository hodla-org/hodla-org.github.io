import styled from "styled-components";
import { bgLight } from "@/common/tokens";
import { SkeletonRect } from "@/common/SkeletonRect";
import { applySkeletonGradient } from "@/common/mixins";

const Container = styled.div`
  padding: 1.25rem 2rem;
  background: ${bgLight};
  border-radius: 3rem;
  ${applySkeletonGradient};
`;

const IconSkeleton = styled(SkeletonRect)`
  margin: 1rem 0;
  display: block;
  width: 12rem;
  height: 12rem;
`;

const Line = styled.p`
  margin: 0;

  &:not(:last-child) {
    margin: 0 0 0.5rem 0;
  }
`;

export const CoinViewSkeleton: React.FC = () => {
  return (
    <Container>
      <SkeletonRect width="16rem" height="22.4px" />
      <IconSkeleton width="12rem" height="12rem" />
      <Line as="div">
        <SkeletonRect width="10rem" height="22.4px" />
      </Line>
      <Line as="div">
        <SkeletonRect width="7rem" height="22.4px" />
      </Line>
    </Container>
  );
};
