import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import { SplashScreen } from './View/SplashScreen'
import { Login } from './View/Login/Login'
import { Home } from './View/Home/Home'
import { NewsDetail } from './View/News/NewsDetail'
import { ShopDetail } from './View/Shop/ShopDetail'

const HomeNavigation = createStackNavigator({
  Home: { 
      screen: Home,
      navigationOptions: {
          header: null
      }
  },
  NewsDetail: { 
      screen: NewsDetail,
      navigationOptions: {
          title: 'รายละเอียด',
          headerTintColor: '#f3f3f3',
          headerTitleStyle: {
              fontSize: 18,
              fontFamily: 'Kanit-Regular',
              color: '#f3f3f3'
          },
          headerStyle: {
              backgroundColor: '#010001',
          },
      }
  },
  ShopDetail: { 
      screen: ShopDetail, 
      navigationOptions: {
          title: 'รายละเอียด',
          headerTintColor: '#f3f3f3',
          headerTitleStyle: {
              fontSize: 18,
              fontWeight: '400',
              fontFamily: 'Kanit-Regular',
              color: '#f3f3f3'
          },
          headerStyle: {
              backgroundColor: '#010001',
          },
      }
  },
}, {
  initialRouteParams: 'Home',
});

const Navigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  Login: Login,
  Home: HomeNavigation,
})

const App = createAppContainer(Navigation);

export default App;