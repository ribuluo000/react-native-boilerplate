import LoginScreen from 'demo/component/LoginScreen';
import MainScreen from 'demo/component/MainScreen';
import ProfileScreen from 'demo/component/ProfileScreen';
import StorageScreen from 'demo/component/StorageScreen';
import ThemeScreen from 'demo/component/ThemeScreen';
import I18nScreen from 'demo/component/I18nScreen';
import ImageScreen from 'demo/component/ImageScreen';
import CounterContainer from 'demo/container/counter/CounterContainer';
export default {
    CounterContainer: { screen: CounterContainer },//demo counter
    LoginScreen: { screen: LoginScreen }, //demo react-navigation
    MainScreen: { screen: MainScreen },
    ProfileScreen: { screen: ProfileScreen },
    StorageScreen: { screen: StorageScreen },
    ThemeScreen: { screen: ThemeScreen },
    I18nScreen: { screen: I18nScreen },
    ImageScreen: { screen: ImageScreen },
}
