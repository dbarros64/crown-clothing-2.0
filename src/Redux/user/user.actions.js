import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

// We use all caps and SNAKE_CASE because these types should never change