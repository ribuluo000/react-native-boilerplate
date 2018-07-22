/**
 * Created by nick on 2018/7/22.
 */
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from 'src/route/AppNavigator';

//demo counter
//demo api_login
const demo_counter_login = 'CounterContainer';


//demo react-navigation
const demo_react_navigation = 'Login';


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams(demo_react_navigation);
const initialNavState = RootNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

function reducer_nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case 'Login':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case 'Logout':
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'Login' }),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

export default reducer_nav;