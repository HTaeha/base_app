import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useDispatch } from "react-redux"

import { plus } from "../../../redux/actions/alarm"
import { HomeNavigationProp, HomeRouteProp, HomeScreenProp } from "../../navigation/types"

import styles from "./styles"

type Props = {
	navigation: HomeNavigationProp,
	route: HomeRouteProp
}

const Tab2 = () => {
	const dispatch = useDispatch()
	const navigation =useNavigation<HomeNavigationProp>()

	const pressed = () => {
		dispatch(plus)
	}

	return (
		<ScrollView style={styles.background}>
			<Text>Tab2</Text>
			<TouchableOpacity onPress={()=>{ pressed() }}>
				<Text>TOUCH ME</Text>
			</TouchableOpacity>
		</ScrollView>
	)
}

export default Tab2