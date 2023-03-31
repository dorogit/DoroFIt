import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from "./components/screens/Homepage";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DoroFit" component={Homepage} options={{headerTitleAlign:'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;