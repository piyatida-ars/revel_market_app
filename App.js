import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

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
  NewsDetailTest: {  //ชื่อหน้าที่ส่งมา
      screen: NewsDetail, //ส่งหน้าไปที่คอพาแนนไหน
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
  initialRouteParams: 'Home', //ถ้าชื่อไม่ตรงก็ให้ส่งมาที่หน้า Home
});

const Navigation = createSwitchNavigator({
  Home: HomeNavigation,
})

const App = createAppContainer(Navigation);

export default App;