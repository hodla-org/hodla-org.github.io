import { InnerAction, State } from "@/store/types";
import { StoreProvider, useStore } from "@/store/StoreProvider";
import { INITIAL_COINS_STORE_STATE } from "@/store/coinsStore";

export const INITIAL_STATE: State = {
  ...INITIAL_COINS_STORE_STATE,
};

export const storeReducer: React.Reducer<State, InnerAction> = (
  state,
  callback
) => {
  const newState = callback(state);

  return { ...state, ...newState };
};
export { useStore };
