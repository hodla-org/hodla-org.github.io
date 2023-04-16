import styled, { css } from "styled-components";
import { accent, bgDark, primary, secondary, textS } from "./tokens";

interface Props extends React.PropsWithChildren {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: "s" | "l";
  view?: "primary" | "secondary";
  rounded?: boolean;
  stretch?: boolean;
  className?: string;
  onClick?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
}

const buttonSize = ({ size = "s", rounded }: Props) => {
  switch (size) {
    default:
      return css`
        height: 6rem;
        border-radius: ${rounded ? "3rem" : "1.25rem"};
        padding: 1.5rem 2rem;
        ${textS}
      `;
  }
};

const buttonType = ({ view = "primary" }: Props) => {
  switch (view) {
    case "primary":
      return css`
        color: ${bgDark};
        background: ${accent};
      `;
    case "secondary":
      return css`
        border: 1px solid ${secondary};
        color: ${secondary};
        background: ${bgDark};
      `;
  }
};

const IconContainer = styled.div`
  display: inline-block;
  vertical-align: top;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:not(:first-child) {
    margin-left: 1rem;
  }

  &:only-child {
    margin: 0 -0.5rem;
  }
`;

const StyledButton = styled.button<Props>`
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  appearance: none;
  border: none;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${buttonSize}
  ${buttonType}

  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

const Content = styled.div`
  display: inline-block;
`;

export const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  size = "s",
  view = "primary",
  rounded,
  iconLeft,
  iconRight,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      size={size}
      view={view}
      rounded={rounded}
    >
      {iconLeft ? <IconContainer>{iconLeft}</IconContainer> : null}
      {children ? <Content>{children}</Content> : null}
      {iconRight ? <IconContainer>{iconRight}</IconContainer> : null}
    </StyledButton>
  );
};
