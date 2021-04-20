import './check.scss';

type PropsType = {
    isChecked: boolean,
    onChange: () => any,
    id: string
}

export default function Check(props: PropsType) {
    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        props.onChange();
    }

    return (
        <div className='check-block' >
            <label className='check-block__label' htmlFor={props.id}>
                <input id={props.id} className='check-block__input' type="checkbox" checked={props.isChecked} onChange={(e) => onChange(e)}/>
                <span></span>
            </label>
            
        </div>
    )
}
