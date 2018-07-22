import TYPE_ACTION from "src/constant/TYPE_ACTION";

/**
 * fetch the interface login, this action starts the request saga
 *
 * @return {object} An action object with a type of API_LOGIN
 */
export function api_login() {
    return {
        type : TYPE_ACTION.API_LOGIN,
    };
}

/**
 * Dispatched when the jsonObj are loaded by the request saga
 *
 * @param  {object} jsonObj The data come from the server
 *
 * @return {object}      An action object with a type of API_LOGIN_SUCCESS passing the jsonObj
 */
export function api_login_success(jsonObj) {
    return {
        type : TYPE_ACTION.API_LOGIN_SUCCESS,
        jsonObj,
    };
}

/**
 * Dispatched when loading the jsonObj fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of API_LOGIN_ERROR passing the error
 */
export function api_login_error(error) {
    return {
        type : TYPE_ACTION.API_LOGIN_ERROR,
        error,
    };
}

