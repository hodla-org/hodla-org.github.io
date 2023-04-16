import { useMemo } from "react";
import styled from "styled-components";

import change from "./icons/change.svg";
import coins from "./icons/coins.svg";
import chevronLeft from "./icons/chevron-left.svg";
import plus from "./icons/plus.svg";
import gift from "./icons/gift.svg";

const ICONS = {
  chevronLeft,
  coins,
  change,
  plus,
  gift,
} as const;

type IconType = keyof typeof ICONS;

const IconContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  color: inherit;
`;

interface Props {
  type: IconType;
}

export const Icon: React.FC<Props> = ({ type }) => {
  const Component = useMemo(() => ICONS[type], [type]);
  return (
    <IconContainer>
      <Component />
    </IconContainer>
  );
};
