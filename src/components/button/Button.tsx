import React from 'react';
import './button.scss';

type PropsType = {
    onClick?: () => any,
    text: string,
    disabled?: boolean
}

export default function Button(props: PropsType) {
    let onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        if(props.onClick) {
            props.onClick()
        } else {
            return false
        }
    }
    return (
        <button disabled={props.disabled} className='btn' type='button' onClick={(e) => onClick(e)}>
            {props.text}
        </button>
    )
}
