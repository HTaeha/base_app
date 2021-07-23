import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native"

import { MainStackParamList } from "./MainStack"
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabParamList } from './MainTab'

// Home Screen Navigator types
export type HomeNavigationProp = StackNavigationProp<
	MainStackParamList,
	"Home"
>
export type HomeRouteProp = RouteProp<
	MainStackParamList,
	"Home"
>
export type HomeScreenProp = StackScreenProps<MainStackParamList, "Home">

// Composite Navigation Prop : MainStack + Tab
export type CompNavigationProp = CompositeNavigationProp<
	StackNavigationProp<MainStackParamList>,
	BottomTabNavigationProp<TabParamList>
>