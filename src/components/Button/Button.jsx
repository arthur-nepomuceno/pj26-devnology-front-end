import '../Button/button.styles.css'

export function Button({ ...others }) {
    const { type, id, text, className, onClick } = others

    return (
        <button type={type} id={id} className={className} onClick={onClick}>{text}</button>
    )
}