import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from "./src/screens/Homepage";
import Workouts from './src/screens/Workouts';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nutritional Values" component={Homepage} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="My Workouts" component={Workouts} options={{headerTitleAlign:'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;