import React from 'react'
import { UserType } from '../../types/user-type'
import DeleteUserItemWrap from '../../wraps/delete-user-item-wrap/DeleteUserItemWrap'
import UserCheckWrap from '../../wraps/user-check-wrap/UserCheckWrap'
import { PencilIcon } from '../icons/Icon'

type PropsType = {
    user: UserType,
    index: number,
}

export default function UserItem(props: PropsType) {
    return (
    <tr className="table__row" key={props.user.id}>
        <td><UserCheckWrap index={props.index} isChecked={props.user.checked} id={props.user.id+props.user.last_name}/></td>
        <td>{props.user.id}</td>
        <td>{props.user.first_name + " " + props.user.last_name}</td>
        <td>{props.user.date_of_birth}</td>
        <td>{props.user.height}</td>
        <td>{props.user.weight}</td>
        <td>{props.user.salary}</td>
        <td><div className='delete-user-item-wrap'><PencilIcon/></div></td>
        <td><DeleteUserItemWrap index={props.index}/></td>
    </tr>
    )
}
