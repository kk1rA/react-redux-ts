export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR ='FETCH_USERS_ERROR',
}

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface FetchUsersAction {
    type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccesAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UsersActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UsersAction = FetchUsersAction | FetchUsersSuccesAction | FetchUsersErrorAction ;
