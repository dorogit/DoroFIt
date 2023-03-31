import { createAppContainer } from "react-navigation";
import { createStackNavigator } from '@react-navigation/stack'
import Homepage from "./components/screens/Homepage";

const navigator = createStackNavigator({
    Home: Homepage
  }, {
    initialRouteName: 'Home',
    defaultNavigationOptions : {
      title: 'DoroFit'
    }
  }
)

export default createAppContainer(navigator);