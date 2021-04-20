import { UserType } from "../../../types/user-type"
import { LET_CHANGE_USERS, usersActionTypes } from "./users-action-constants"

const letChangeUsersAction = (users: UserType[]): usersActionTypes => {
    let action: usersActionTypes = {
      type: LET_CHANGE_USERS,
      users
    }

    return action
  }
  
  export default letChangeUsersAction