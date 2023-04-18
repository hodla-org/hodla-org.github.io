import React, { useContext, useReducer } from "react";
import { useCallback } from "react";
import { State, StoreDispatch } from "@/store/types";
import { INITIAL_STATE, storeReducer } from "@/store/";

interface StoreContextValue {
  state: State;
  dispatch: StoreDispatch;
}

const StoreContext = React.createContext<StoreContextValue>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

export const StoreProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, _dispatch] = useReducer(storeReducer, INITIAL_STATE);

  const dispatch = useCallback<StoreDispatch>((action) => {
    if (typeof action === "function") {
      action(_dispatch);
    } else {
      _dispatch(() => action);
    }
  }, []);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): [State, StoreDispatch] => {
  const { dispatch, state } = useContext(StoreContext);

  return [state, dispatch];
};
