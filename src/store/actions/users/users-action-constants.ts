import { UserType } from "../../../types/user-type";

export const LET_CHANGE_USERS = "LET_CHANGE_USERS";
export const LET_CHECK_USER = "LET_CHECK_USER";
export const LET_CHECK_ALL_USERS = "LET_CHECK_ALL_USERS";
export const LET_DELETE_CHECKED_USERS = "LET_DELETE_USERS";
export const LET_DELETE_USER = "LET_DELETE_USER";

type letChangeUsersActionType = {
  type: typeof LET_CHANGE_USERS,
  users: UserType[],
};

type letCheckUserType = {
  type: typeof LET_CHECK_USER,
  users: UserType[],
};

type letCheckAllUsersType = {
  type: typeof LET_CHECK_ALL_USERS,
  users: UserType[],
};

type letDeleteCheckedUsersType = {
  type: typeof LET_DELETE_CHECKED_USERS,
  users: UserType[],
};

type letDeleteUserType = {
  type: typeof LET_DELETE_USER,
  users: UserType[],
};

export type usersActionTypes = letChangeUsersActionType | letCheckUserType | letCheckAllUsersType | letDeleteCheckedUsersType | letDeleteUserType
