import styled from "styled-components";
import { Button } from "@/common/Button";
import { Icon } from "@/common/Icon/Icon";
import { Headline1 } from "@/common/typography";
import { bgLight } from "@/common/tokens";
import { CoinView } from "@/components/CoinView";

const StyledButton = styled(Button)`
  & + & {
    margin-left: 2rem;
  }
`;

const CoinsContainer = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
  grid-gap: 2rem;
  margin-top: 2.5rem;
`;

const COIN_PROPS: React.ComponentProps<typeof CoinView> = {
  name: "Etherium",
  nameAbbr: "ETH",
  capitalization: 28536235550,
  reward: 0.0409,
  icon: "icons/etherium.svg",
};

export default function Home() {
  return (
    <>
      <Headline1>Available chains</Headline1>
      <StyledButton
        rounded
        iconLeft={<Icon type="coins" />}
        iconRight={<Icon type="change" />}
      >
        Total stacked
      </StyledButton>
      <StyledButton view="secondary" rounded iconLeft={<Icon type="gift" />} />
      <CoinsContainer>
        <CoinView {...COIN_PROPS} />
        <CoinView {...COIN_PROPS} />
        <CoinView {...COIN_PROPS} />
        <CoinView {...COIN_PROPS} />
        <CoinView {...COIN_PROPS} />
        <CoinView {...COIN_PROPS} />
        <CoinView {...COIN_PROPS} />
      </CoinsContainer>
    </>
  );
}
