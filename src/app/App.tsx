import React from "react";
import TodoList from "app/features/todoList/TodoList";
import AddTodo from "app/features/todoList/AddTodo";
import Footer from "app/features/visibilityFilter/Footer";
import { useDispatch } from "react-redux";
import { loadTodos, createTodoList } from "app/features/todoList/todoSlice";

export default function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (window.location.pathname === "/") {
			dispatch(createTodoList());
		} else {
			dispatch(loadTodos());
		}
	}, [dispatch]);
	return (
		<div>
			<AddTodo />
			<TodoList />
			<Footer />
		</div>
	);
}
