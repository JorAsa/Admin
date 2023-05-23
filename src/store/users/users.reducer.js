import { UPDATE_USERS, DELETE_USERS } from "./users.action";

const initialState = {
    userList: [{}]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state,
                userList: action.payload,
            };

        case DELETE_USERS:
            return {
                ...state,
                userList: [],
            };

        default:
            return state;
    };
};