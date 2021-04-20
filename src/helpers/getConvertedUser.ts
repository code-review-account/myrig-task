import { FetchedUserType, UserType } from "../types/user-type";
import converter from "./converter";

let getConvertedUser = (fetchedUser: FetchedUserType, id: number, rate: number): UserType => {
    let user = {
        ...fetchedUser,
        id,
        checked: false,
        weight: converter.getKgFromPounds(fetchedUser.weight)+' кг',
        height: converter.getMetersFromFoots(fetchedUser.height),
        salary: '$' + converter.getUSDfromEURO(fetchedUser.salary, rate),
        date_of_birth: converter.getAgeFromTimeStamp(fetchedUser.date_of_birth)
    }

    return user
}

export default getConvertedUser;