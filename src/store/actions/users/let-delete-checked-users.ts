import { UserType } from "../../../types/user-type";
import store from "../../store";
import { LET_DELETE_CHECKED_USERS, usersActionTypes } from "./users-action-constants";


const letDeleteteCheckedUsers = (): usersActionTypes => {
    let prevUsers = store.getState().usersReducer.users;
    let users = prevUsers.filter((u: UserType) => {
        let user = {...u}
        return !user.checked
    })

    let action: usersActionTypes = {
      type: LET_DELETE_CHECKED_USERS,
      users
    }

    return action
  }
  
  export default letDeleteteCheckedUsers