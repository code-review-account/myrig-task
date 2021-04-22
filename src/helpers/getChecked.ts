import { UserType } from "../types/user-type"

let getChecked = (users: UserType[]) => {
    return !!users.find((user) => {
        return user.checked === true
    })
}

export default getChecked;