import getConvertedUser from "../../helpers/getConvertedUser";
import { FetchedUserType } from "../../types/user-type";
import letChangeUsersAction from "../actions/users/let-change-users";
import { appDispatchType } from "../store";

let fetchUsersHelper = () => {
    return fetch('https://api.npoint.io/324f4ca2cdd639760638').then((res) => {
        return res.json()
    })
}

let fetchRates = () => {
    return fetch('https://api.ratesapi.io/api/latest').then((res) => {
        return res.json()
    })
}

export let fetchUsersThunk = async (dispatch: appDispatchType) => {
    let users: FetchedUserType[] = await fetchUsersHelper().catch((error) => {
        console.log(error)
    })

    let currentRates = await fetchRates().catch((error) => {
        console.log(error)
    })

    if(users && currentRates) {
        let rate = currentRates.rates.USD;

        let usersArr = users.map((fUser, i) => {
            return getConvertedUser(fUser, i+1, rate)
        })

        dispatch(letChangeUsersAction(usersArr))
    }
}