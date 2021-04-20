import React from 'react';
import { useDispatch } from 'react-redux';
import { BasketIcon } from '../../components/icons/Icon';
import letDeleteteUser from '../../store/actions/users/let-delete-user';
import './delete-user-item-wrap.scss';

type PropsType = {
    index: number
}

export default function DeleteUserItemWrap(props: PropsType) {
    const dispatch = useDispatch()

    let onClick = () => {
        dispatch(letDeleteteUser(props.index))
    }
    return (
        <div className='delete-user-item-wrap' onClick={onClick}>
            <BasketIcon/>
        </div>
    )
}
