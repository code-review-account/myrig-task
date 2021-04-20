import './page.scss';

type propsType = {
  children?: JSX.Element
}

export default function Page(props: propsType) {

  return (
    <div className='page'>
      <div className='page__container'>
        {props.children && props.children}
      </div>
    </div>

  )
}
