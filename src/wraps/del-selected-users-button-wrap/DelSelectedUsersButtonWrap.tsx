import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import getChecked from '../../helpers/getChecked';
import letDeleteteCheckedUsers from '../../store/actions/users/let-delete-checked-users';
import { appStateType } from '../../store/store';
import './del-selected-users-button-wrap.scss'

export default function DelSelectedUsersButtonWrap() {
    const dispatch = useDispatch();
    const users = useSelector((state: appStateType) => state.usersReducer.users);
    let checked = getChecked(users);

    let toDelSelectedUsers = () => {
        dispatch(letDeleteteCheckedUsers())
    }

    return (
        <div className='del-selected-users-button-wrap'>
            <Button disabled={!checked} text='Удалить выбранные' onClick={toDelSelectedUsers}/>
        </div>
    )
}
