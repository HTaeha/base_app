import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'

type CounterProps = {
	count: number;
	onIncrease: () => void;
	onDecrease: () => void;
	onIncreaseBy: (diff: number) => void;
}

function Counter({
	count,
	onIncrease,
	onDecrease,
	onIncreaseBy
}: CounterProps) {
	return (
		<View>
			<Text style={{fontSize: 50}}>{count}</Text>
			<TouchableOpacity onPress={onIncrease}>
				<Text style={{fontSize: 100}}>+1</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={onDecrease}>
				<Text style={{fontSize: 100}}>-1</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => onIncreaseBy(5)}>
				<Text style={{fontSize: 100}}>+5</Text>
			</TouchableOpacity>
		</View>
	);
}

export default Counter;