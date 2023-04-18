import { CoinsStore } from "./coinsStore";

export interface State extends CoinsStore {}

export type InnerAction = (state: State) => Partial<State>;
export type InnerStoreDispatch = React.Dispatch<InnerAction>;

export type StoreAction = (dispatch: InnerStoreDispatch) => void;
export type StoreDispatch = (action: StoreAction | Partial<State>) => void;
