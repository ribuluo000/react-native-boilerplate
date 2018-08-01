/**
 * Gets data from server
 */

import { call, put, takeLatest } from "redux-saga/effects";
import { fromJS } from "immutable";
import config from "src/config/default";
import REQ_URL from "src/constant/REQ_URL";
import TYPE_ACTION from "src/constant/TYPE_ACTION";
import TYPE_KEY from "src/constant/TYPE_KEY";
import { api_login_error, api_login_success } from "src/app/action_auth";

import { on_catch_common, on_custom_exception_common, on_success_common, options_common, request } from "src/util/request";

/**
 * request/response handler
 */
export function* api_request() {
    // Select username from store
    const user_name = 'aaa';
    const password = 'aaa';

    const bodyObj = {
        user_name,
        password
    };
    const requestURL = config.API_BASE_URL + REQ_URL.REQ_URL_user_login;

    try {
        // Call our request helper (see 'src/util/request')
        const ret = yield call(request, requestURL, options_common(bodyObj));
        const jsonObj = fromJS(ret);

        if (jsonObj.get(TYPE_KEY.KEY_code) == 0) {
            yield put(api_login_success(jsonObj));
            on_success_common(jsonObj);

        } else {
            let err = jsonObj.get(TYPE_KEY.KEY_msg);
            yield put(api_login_error(err));
            on_custom_exception_common(jsonObj);

        }
    } catch (err) {
        yield put(api_login_error(err));
        on_catch_common(err);

    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount
    yield takeLatest(TYPE_ACTION.API_LOGIN, api_request);
}
