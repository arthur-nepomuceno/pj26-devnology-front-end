import '../Button/button.styles.css'

export function Button({type, id, className, text}) {
    return (
        <button type={type} id={id} className={className}>{text}</button>
    )
}