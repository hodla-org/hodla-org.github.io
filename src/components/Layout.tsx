import { Button } from "@/common/Button";
import { Icon } from "@/common/Icon/Icon";
import { bgDark } from "@/common/tokens";
import styled from "styled-components";
import { WalletButton } from "./WalletButton";
import { Headline1 } from "@/common/typography";

const Container = styled.div`
  background: ${bgDark};
  padding: 2rem 2rem 0 2rem;
`;

const Header = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
`;

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Button view="secondary" iconLeft={<Icon type="chevronLeft" />} />
        <WalletButton />
      </Header>
      {children}
    </Container>
  );
};
