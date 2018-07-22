/**
 *  selector
 */

import { createSelector } from "reselect";
import TYPE_KEY from "src/constant/TYPE_KEY";

const select_nav = state => state.get(TYPE_KEY.KEY_NAV);
const select_auth = state => state.get(TYPE_KEY.KEY_AUTH);

const make_select_is_logged_in = () =>
    createSelector(select_auth, state => state.get(TYPE_KEY.KEY_is_logged_in));

export { select_nav, select_auth, make_select_is_logged_in, };
