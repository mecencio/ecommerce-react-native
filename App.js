import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import store from './src/store';
import MainNavigation from "./src/navigation/Index"
import { init } from './src/db';
import * as SecureStore from 'expo-secure-store';
import { loadUser } from './src/store/actions/auth.action';

init().then(() => console.log("Database initialized"))
    .catch((error) => {
        console.log("Database failed");
        console.log(error)
    })

const AppContent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        SecureStore.getItemAsync("userId").then(result => {
            if (result) { dispatch(loadUser(result)) }
        })
    }, [])

    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}