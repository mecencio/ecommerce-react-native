import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

export default () => {
    const user = useSelector(state => state.auth.user);

    return (
        <>
            {user ? <BottomTabNavigator /> : <AuthNavigator />}
        </>
    )
}