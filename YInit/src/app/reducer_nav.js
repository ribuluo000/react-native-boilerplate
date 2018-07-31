/**
 * Created by nick on 2018/7/22.
 */
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from 'src/route/AppNavigator';
import TYPE_ACTION from 'src/constant/TYPE_ACTION';

//demo counter
//demo api_login
const demo_counter_login = TYPE_ACTION.CounterContainer;


//demo react-navigation
const demo_react_navigation = TYPE_ACTION.LoginScreen;
const demo_main = TYPE_ACTION.MainScreen;


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams(demo_main);
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams(demo_main);
const initialNavState = RootNavigator.router.getStateForAction(
    secondAction,
    tempNavState
);

function reducer_nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
        case TYPE_ACTION.LoginScreen:
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

        case TYPE_ACTION.ProfileScreen:
        case TYPE_ACTION.MainScreen:
        case TYPE_ACTION.StorageScreen:
        case TYPE_ACTION.ThemeScreen:
        case TYPE_ACTION.I18nScreen:
        case TYPE_ACTION.ImageScreen:
        case TYPE_ACTION.DeviceInfoScreen:
        case TYPE_ACTION.ScanScreen:
        case TYPE_ACTION.CounterContainer:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.type }),
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