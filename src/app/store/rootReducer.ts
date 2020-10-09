import { combineReducers } from "@reduxjs/toolkit";

import todos from "app/features/todoList/todoSlice";
import visibilityFilter from "app/features/visibilityFilter/visibilityFilterSlice";

const rootReducer = combineReducers({
	todos,
	visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
