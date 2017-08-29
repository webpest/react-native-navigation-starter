import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens/index';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: '首页',
      screen: 'example.HomeScreen', // this is a registered name for a screen
      icon: require('./assets/images/nav1.png'),
      selectedIcon: require('./assets/images/nav1_active.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: '电影',
      screen: 'example.MovieScreen',
      icon: require('./assets/images/nav2.png'),
      selectedIcon: require('./assets/images/nav2_active.png'), // iOS only
      title: 'Screen Two'
    },
    {
      label: '音乐',
      screen: 'example.MusicScreen',
      icon: require('./assets/images/nav3.png'),
      selectedIcon: require('./assets/images/nav3_active.png'), // iOS only
      title: 'Screen Two'
    },
    {
      label: '我的',
      screen: 'example.MeScreen',
      icon: require('./assets/images/nav4.png'),
      selectedIcon: require('./assets/images/nav4_active.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});