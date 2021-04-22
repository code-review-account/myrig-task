import store from "../../store";
import { LET_DELETE_USER, usersActionTypes } from "./users-action-constants";

const letDeleteteUser = (index: number): usersActionTypes => {
    let prevUsers = store.getState().usersReducer.users;
    let users = [...prevUsers];

    users.splice(index, 1)

    let action: usersActionTypes = {
      type: LET_DELETE_USER,
      users
    }

    return action
  }
  
  export default letDeleteteUser