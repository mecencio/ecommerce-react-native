import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';
import MainNavigation from "./src/navigation/Index"
import { init } from './src/db';

init().then(() => console.log("Database initialized"))
.catch((error) => {
  console.log("Database failed");
  console.log(error)
})

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}