import React from 'react'
import { useDispatch } from 'react-redux'
import Check from '../../components/check/Check'
import letCheckUser from '../../store/actions/users/let-check-user';

type PropsType = {
    index: number,
    isChecked: boolean,
    id: string,
}

export default function UserCheckWrap(props: PropsType) {
    const dispatch = useDispatch();
    let onCheck = () => {
        dispatch(letCheckUser(props.index))
    }

    return (
        <Check onChange={onCheck} isChecked={props.isChecked} id={props.id}/>
    )
}
