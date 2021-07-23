import React from "react"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useDispatch } from "react-redux"

import { plus } from "../../../redux/actions/alarm"
import { HomeNavigationProp, HomeRouteProp} from "../../navigation/types"

import styles from "./styles"

type Props = {
	navigation: HomeNavigationProp,
	route: HomeRouteProp
}

const Home = ({navigation, route}: Props) => {
	const dispatch = useDispatch()

	const pressed = () => {
		dispatch(plus)
		navigation.navigate("Tab", {screen: "Tab1"})
	}

	return (
		<ScrollView style={styles.background}>
			<View style={styles.topContainer}>
				<View style={styles.rowContainer}>
					<Text style={styles.logo}>Linecare</Text>
				</View>
			</View>

			<Text>Home Screen</Text>
			<TouchableOpacity onPress={()=>{ pressed() }}>
				<Text>TOUCH ME</Text>
			</TouchableOpacity>
		</ScrollView>
	)
}

export default Home