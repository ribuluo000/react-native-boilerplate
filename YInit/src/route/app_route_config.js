import LoginScreen from 'demo/component/LoginScreen';
import MainScreen from 'demo/component/MainScreen';
import ProfileScreen from 'demo/component/ProfileScreen';
import CounterContainer from 'demo/container/counter/CounterContainer';
export default {
    CounterContainer: { screen: CounterContainer },//demo counter
    Login: { screen: LoginScreen }, //demo react-navigation
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
}
