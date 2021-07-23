import React, { CSSProperties } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Todo } from '../modules/todos';

type TodoItemProps = {
	todo: Todo;
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
	const removeStyle = {
		marginLeft: 8,
		color: 'red'
	};

	const handleToggle = () => {
		onToggle(todo.id);
	};

	const handleRemove = () => {
		onRemove(todo.id);
	};

	return (
		<View>
			<TouchableOpacity onPress={handleToggle}>
				<Text style={{ textDecorationLine: todo.done ? "line-through" : "none" }}>
					{todo.text}
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={handleRemove}>
				<Text style={removeStyle}>
					(X)
				</Text>
			</TouchableOpacity>
		</View>
	);
}

export default TodoItem;