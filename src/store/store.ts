import { createStore, createTypedHooks, persist} from "easy-peasy";
import model, {StoreModel} from "./model";

const { useStoreActions, useStore, useStoreDispatch, useStoreState} = createTypedHooks<StoreModel>();

export { useStoreActions, useStoreDispatch, useStoreState, useStore};

const store = createStore(persist(model));

export default store;