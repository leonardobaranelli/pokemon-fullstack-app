import { PERSIST_FILTER_STATE } from "../actionTypes";

export const _persistFilterState = (isPersistent) => ({
    type: PERSIST_FILTER_STATE,
    payload: isPersistent,
});
