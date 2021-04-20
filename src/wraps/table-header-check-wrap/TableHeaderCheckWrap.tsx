import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Check from '../../components/check/Check'
import getChecked from '../../helpers/getChecked'
import letCheckAllUsers from '../../store/actions/users/let-check-all-users'
import { appStateType } from '../../store/store'

export default function TableHeaderCheckWrap() {
    const dispatch = useDispatch()
    const users = useSelector((state: appStateType) => state.usersReducer.users);
    let checked = getChecked(users)

    let onCheck= () => {
        dispatch(letCheckAllUsers(!checked))
    }

    return (
        <Check id='user-table-header'  onChange={onCheck} isChecked={checked}/>
    )
}
