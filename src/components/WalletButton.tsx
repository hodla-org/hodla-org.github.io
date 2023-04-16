import { useMemo } from "react";
import styled from "styled-components";
import { Button } from "@/common/Button";
import { accent, primary } from "@/common/tokens";
import { Icon } from "@/common/Icon/Icon";

const StyledButton = styled(Button)`
  border-color: ${accent};
  color: ${primary};
`;

export const WalletButton: React.FC = () => {
  return (
    <StyledButton view="secondary" rounded iconRight={<Icon type="plus" />}>
      Wallets
    </StyledButton>
  );
};
