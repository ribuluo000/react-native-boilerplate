import { fromJS } from "immutable";
import TYPE_ACTION from "src/constant/TYPE_ACTION";
import TYPE_KEY from "src/constant/TYPE_KEY";
export const initialState = fromJS({
    [TYPE_KEY.KEY_count] : 0,
});

export default function reducer_webview(state = initialState, action) {
    switch (action.type) {
        case  TYPE_ACTION.INCREMENT: {
            let count = state.get(TYPE_KEY.KEY_count);
            return state
                .set(TYPE_KEY.KEY_count, count + 1)
                ;
        }
            break;
        case  TYPE_ACTION.DECREMENT: {
            let count = state.get(TYPE_KEY.KEY_count);
            return state
                .set(TYPE_KEY.KEY_count, count - 1)
                ;
        }
            break;
        default:
            return state;
    }
}

