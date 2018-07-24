import LoginScreen from 'demo/component/LoginScreen';
import MainScreen from 'demo/component/MainScreen';
import ProfileScreen from 'demo/component/ProfileScreen';
import StorageScreen from 'demo/component/StorageScreen';
import CounterContainer from 'demo/container/counter/CounterContainer';
export default {
    CounterContainer: { screen: CounterContainer },//demo counter
    LoginScreen: { screen: LoginScreen }, //demo react-navigation
    MainScreen: { screen: MainScreen },
    ProfileScreen: { screen: ProfileScreen },
    StorageScreen: { screen: StorageScreen },
}