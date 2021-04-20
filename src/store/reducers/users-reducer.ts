import {
  UserType
} from "../../types/user-type"
import {
  LET_CHANGE_USERS,
  LET_CHECK_ALL_USERS,
  LET_CHECK_USER,
  LET_DELETE_CHECKED_USERS,
  LET_DELETE_USER,
  usersActionTypes
} from "../actions/users/users-action-constants"

export type usersRdcType = {
  users: UserType[]
}

const initState = (): usersRdcType => {
  return {
    users: []
  }
}

let usersReducer = (state = initState(), action: usersActionTypes) => {
  switch (action.type) {

    case LET_CHANGE_USERS: {
      const users = action.users
      return {
        ...state,
        users
      }
    }

    case LET_CHECK_USER: {
      const users = action.users
      return {
        ...state,
        users
      }
    }

    case LET_CHECK_ALL_USERS: {
      const users = action.users
      return {
        ...state,
        users
      }
    }

    case LET_DELETE_CHECKED_USERS: {
      const users = action.users
      return {
        ...state,
        users
      }
    }

    case LET_DELETE_USER: {
      const users = action.users
      return {
        ...state,
        users
      }
    }

    default:
      return state
  }
}

export default usersReducer