/**
 * Created by nick on 2018/2/27.
 */

import GENERAL from 'src/constant/TYPE_ACTION_GENERAL';
import RESET from 'src/constant/TYPE_ACTION_RESET';
import CONTAINER from 'src/constant/TYPE_ACTION_CONTAINER';
import API from 'src/constant/TYPE_ACTION_API';

export const TYPE_ACTION = {
    ...GENERAL,
    ...API,
    ...RESET,
    ...CONTAINER,
};

export default TYPE_ACTION;