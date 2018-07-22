/**
 * Created by nick on 2018/7/22.
 */
import { fromJS } from "immutable";
import TYPE_ACTION from "src/constant/TYPE_ACTION";
import TYPE_KEY from 'src/constant/TYPE_KEY';
export const initialState = fromJS({
    access_token : '',
    user_id : '',
    user_name : '',
    password : '',
    is_logged_in: false,
});

function reducer_auth(state = initialState, action) {
    switch (action.type) {
        case TYPE_ACTION.RESET_REDUCER_AUTH:
            state = initialState;

            try {
                let payload = action.payload;
                if(payload){
                    for(let k in payload){
                        // console.log('payload',k,payload[k]);
                        state = state.set(k,payload[k]);
                    }
                }
            } catch (e){
                console.log(e);

            }
            return state;
        case TYPE_ACTION.API_LOGIN_SUCCESS:
            const jsonObj = action.jsonObj;
            const access_token = jsonObj.get(TYPE_KEY.KEY_data).get(TYPE_KEY.KEY_access_token);

            return state
                .set(TYPE_KEY.KEY_is_logged_in, true)
                .set(TYPE_KEY.KEY_access_token, access_token)
                ;
        case TYPE_ACTION.API_LOGIN_ERROR:
            return initialState;
            break;
        case 'Logout':
            return initialState;
            break;
        default:
            return state;
    }
}

export default reducer_auth;