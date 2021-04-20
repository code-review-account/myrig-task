import { UserType } from "../../../types/user-type";
import store from "../../store";
import { LET_CHECK_ALL_USERS, usersActionTypes } from "./users-action-constants";

const letCheckAllUsers = (checked: boolean): usersActionTypes => {
    let prevUsers = store.getState().usersReducer.users;
    let users = prevUsers.map((user: UserType) => {
        return {...user, checked}
    })

    let action: usersActionTypes = {
      type: LET_CHECK_ALL_USERS,
      users
    }

    return action
  }
  
  export default letCheckAllUsers