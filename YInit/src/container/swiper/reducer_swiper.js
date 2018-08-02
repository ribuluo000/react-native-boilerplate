import { fromJS } from "immutable";
import TYPE_ACTION from "src/constant/TYPE_ACTION";
import TYPE_KEY from "src/constant/TYPE_KEY";
export const initialState = fromJS({
    [TYPE_KEY.KEY_count] : TYPE_ACTION.INCREMENT,//tmp
});

export default function reducer_swiper(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

