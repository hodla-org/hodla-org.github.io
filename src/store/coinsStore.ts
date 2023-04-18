import { request } from "@/api/request";
import { StoreAction } from "@/store/types";
import { CoinData } from "@/types";

export interface CoinsStore {
  coinsStore: {
    isCoinsLoading: boolean;
    coins: CoinData[];
  };
}

export const INITIAL_COINS_STORE_STATE: CoinsStore = {
  coinsStore: {
    coins: [],
    isCoinsLoading: true,
  },
};

export const coinsActions = {
  getCoins: (): StoreAction => (dispatch) => {
    console.log("getCoins");
    const COINS: CoinData[] = new Array(5).fill(null).map((_, index) => {
      return {
        id: `${index}`,
        name: "Etherium",
        nameAbbr: "ETH",
        capitalization: 28536235550,
        reward: 0.0409,
        icon: "icons/etherium.svg",
      };
    });
    dispatch(({ coinsStore }) => ({
      coinsStore: { ...coinsStore, isCoinsLoading: true },
    }));

    request("", {}, { results: COINS }).then(({ results: coins }) =>
      dispatch(({ coinsStore }) => ({
        coinsStore: { ...coinsStore, coins, isCoinsLoading: false },
      }))
    );
  },
};
