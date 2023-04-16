import styled from "styled-components";
import { bgLight, primary, secondary, textS } from "@/common/tokens";

interface Props {
  name: string;
  nameAbbr: string;
  reward: number;
  capitalization: number;
  icon: string;
}

const Container = styled.div`
  padding: 1.25rem 2rem;
  background: ${bgLight};
  border-radius: 3rem;
`;

const Text = styled.span`
  ${textS};
  color: ${primary};
`;

const SecondaryText = styled(Text)`
  margin-left: 0.5rem;
  color: ${secondary};
`;

const CoinIcon = styled.img`
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

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const CoinView: React.FC<Props> = ({
  name,
  nameAbbr,
  capitalization,
  reward,
  icon,
}) => {
  return (
    <Container>
      <Text>{name}</Text>
      <SecondaryText>{nameAbbr}</SecondaryText>
      <CoinIcon src={icon} />
      <Line>
        <Text>{formatter.format(capitalization)}</Text>
      </Line>
      <Line>
        <Text>{(reward * 100).toFixed(2)}%</Text>
        <SecondaryText>Reward</SecondaryText>
      </Line>
    </Container>
  );
};
