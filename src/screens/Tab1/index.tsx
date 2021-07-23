import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useDispatch } from "react-redux"

import { plus } from "../../../redux/actions/alarm"
import { HomeNavigationProp, HomeRouteProp } from "../../navigation/types"

import styles from "./styles"

type Props = {
	navigation: HomeNavigationProp,
	route: HomeRouteProp
}

const Tab1 = ({navigation}:Props) => {
	const dispatch = useDispatch()

	const pressed = () => {
		dispatch(plus)
		navigation.navigate("Home")
	}

	return (
		<ScrollView style={styles.background}>
			<Text>Tab1</Text>
			<TouchableOpacity onPress={()=>{ pressed() }}>
				<Text>TOUCH ME</Text>
			</TouchableOpacity>
		</ScrollView>
	)
}

export default Tab1