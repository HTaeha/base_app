import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TextInput, TouchableOpacity, Text, View } from "react-native"

type TodoInsertProps = {
	onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: TodoInsertProps) {
	const [value, setValue] = useState('');
	const onChange = (text: string) => {
		setValue(text);
	};
	const onSubmit = () => {
		onInsert(value);
		setValue('');
	};

	return (
		<View>
			<TextInput
				placeholder="할 일을 입력하세요."
				value={value}
				onChangeText={onChange}
			/>
			<TouchableOpacity onPress={onSubmit}>
				<Text>등록</Text>
			</TouchableOpacity>
		</View>
	);
}

export default TodoInsert;