/**
 *  selector
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer_counter";
import TYPE_KEY from "src/constant/TYPE_KEY";

const select_counter = state => state.get(TYPE_KEY.KEY_COUNTER, initialState);

const make_select_count = () =>
    createSelector(select_counter, state => state.get(TYPE_KEY.KEY_count));

export { select_counter, make_select_count, };
