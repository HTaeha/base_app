import React from 'react';
import {Text, View} from 'react-native'

import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
  if (todos.length === 0) return <Text>등록된 항목이 없습니다.</Text>;
  return (
		<View>
			{todos.map(todo => (
				<TodoItem
					todo={todo}
					onToggle={onToggle}
					onRemove={onRemove}
					key={todo.id}
				/>
			))}
		</View>
	);
}

export default TodoList;