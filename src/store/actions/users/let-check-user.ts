import store from "../../store"
import { LET_CHECK_USER, usersActionTypes } from "./users-action-constants"

const letCheckUser = (userIndex: number): usersActionTypes => {
    let prevUsers = store.getState().usersReducer.users;
    let users = [...prevUsers]
    let user = {...users[userIndex], checked: !users[userIndex].checked};
    users[userIndex] = user;
    let action: usersActionTypes = {
      type: LET_CHECK_USER,
      users
    }

    return action
  }
  
  export default letCheckUser