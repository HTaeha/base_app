import { StyleSheet } from 'react-native'

import { baseColor } from '../../../assets/colors'

const styles = StyleSheet.create({
	background: {
		flex: 1,
		backgroundColor: 'white',
	},
	topContainer: {
		height: 173,
		width: '100%',
		backgroundColor: baseColor,
		paddingHorizontal: 12,
	},
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		color: 'white',
		fontSize: 28,
		marginLeft: 'auto',
		marginTop: 20,
	}
})

export default styles