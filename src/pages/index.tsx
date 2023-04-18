import styled from "styled-components";
import { Button } from "@/common/Button";
import { Icon } from "@/common/Icon/Icon";
import { Headline1 } from "@/common/typography";
import { CoinView } from "@/components/CoinView/CoinView";
import { CoinViewSkeleton } from "@/components/CoinView/CoinViewSkeleton";
import { useStore } from "@/store/StoreProvider";
import { coinsActions } from "@/store/coinsStore";
import { useOnMount } from "@/hooks/useOnMount";

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

export default function Home() {
  const [{ coinsStore }, dispatch] = useStore();

  useOnMount(() => {
    dispatch(coinsActions.getCoins());
  });

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
        {coinsStore.isCoinsLoading
          ? new Array(4)
              .fill(null)
              .map((_, index) => <CoinViewSkeleton key={index} />)
          : coinsStore.coins.map((coin) => {
              return <CoinView {...coin} key={coin.id} />;
            })}
      </CoinsContainer>
    </>
  );
}
