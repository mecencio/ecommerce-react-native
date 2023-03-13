import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";

export default () => {
    const userId = true;

    return (
        <>
            {userId ? <BottomTabNavigator /> : <AuthNavigator />}
        </>
    )
}