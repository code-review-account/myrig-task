import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { appStateType } from '../../store/store';
import { fetchUsersThunk } from '../../store/thunks/fetch-users';
import { UserType } from '../../types/user-type';
import UserItem from '../../components/user-item/UserItem';

export default function TableUserRowsWrap() {

    const dispatch = useDispatch();
    const users = useSelector((state: appStateType) => state.usersReducer.users)
    useEffect(() => {
        fetchUsersThunk(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
            users.map((user: UserType, index: number) => {
                    return <UserItem user={user} key={user.id} index={index}/>
                })
            }
        </>
    )
}
