/** @format */

import {AppRegistry} from 'react-native';
import App from 'src/app/App';
import {name as appName} from './app.json';
if(!global._babelPolyfill) { require('babel-polyfill'); }
AppRegistry.registerComponent(appName, () => App);
