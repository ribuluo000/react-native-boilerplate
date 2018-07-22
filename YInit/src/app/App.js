/**
 * Created by nick on 2018/7/22.
 */
import React from "react";
import { Provider } from "react-redux";
import getStore from "./store";
import { AppNavigator } from "../route/AppNavigator";
const store = getStore();
console.log(process.env.NODE_ENV);

class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

export default App;