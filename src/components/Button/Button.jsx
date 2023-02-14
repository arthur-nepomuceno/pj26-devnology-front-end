import '../Button/button.styles.css'

export function Button({type, id, text}) {
    return (
        <button type={type} id={id} className='button'>{text}</button>
    )
}