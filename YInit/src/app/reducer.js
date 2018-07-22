/**
 * Created by nick on 2018/7/22.
 */
/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux-immutable";
import TYPE_KEY from "src/constant/TYPE_KEY";

import auth from "./reducer_auth";
import nav from "./reducer_nav";

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        [TYPE_KEY.KEY_NAV] : nav,
        [TYPE_KEY.KEY_AUTH] : auth,
        ...injectedReducers,
    });
}
