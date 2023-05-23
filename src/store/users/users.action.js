export const UPDATE_USERS = 'UPDATE_USERS';
export const DELETE_USERS = 'DELETE_USERS';

export const updateUsers = (newName) => {
    return {
        type: UPDATE_USERS,
        payload: newName,
    };
};

export const deleteUsers = () => {
    return {
        type: DELETE_USERS
    };
};