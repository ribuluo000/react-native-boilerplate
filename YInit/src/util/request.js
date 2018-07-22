import "whatwg-fetch";
import TYPE_KEY from "src/constant/TYPE_KEY";

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request_o(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);
}

export function request(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        ;
}

export function options_common(data = {}) {
    return {
        method : 'POST',
        mode : "cors",
        headers : {
            'Accept' : 'application/json',
            //json形式
            'Content-Type' : 'application/json'
        },
        credentials : 'include',
        body : JSON.stringify(data),
    }
}

export function on_catch_common(err = {}) {
    console.log('on_catch_common', err);
    // view_util.show_toast(err.toString());

}

export function on_custom_exception_common(jsonObj = IMap({})) {
    console.log('on_custom_exception_common', jsonObj);
    const code = jsonObj.get(TYPE_KEY.KEY_code);
    const msg = jsonObj.get(TYPE_KEY.KEY_msg);

    // view_util.show_toast(msg);
}

export function on_success_common(jsonObj = IMap({})) {
    console.log('on_success_common', jsonObj);
    const code = jsonObj.get(TYPE_KEY.KEY_code);
    const msg = jsonObj.get(TYPE_KEY.KEY_msg);

    // view_util.show_toast(msg);
}


