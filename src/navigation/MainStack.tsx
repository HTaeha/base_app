import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from "../screens/Home"
import MainTab, { TabParamList } from "./MainTab"
import { NavigatorScreenParams } from '@react-navigation/native'

export type MainStackParamList = {
    Home: undefined,
    Tab: NavigatorScreenParams<TabParamList>,
}

const Stack = createStackNavigator<MainStackParamList>()

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Tab" component={MainTab} />
        </Stack.Navigator>
    )
}
export default MainStack