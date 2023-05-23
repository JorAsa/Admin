import { usersReducer } from "./users/users.reducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({
    usersReducer,
});