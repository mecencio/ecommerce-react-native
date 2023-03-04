import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"
import store from './src/store';
import MainNavigation from "./src/navigation/Index"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}