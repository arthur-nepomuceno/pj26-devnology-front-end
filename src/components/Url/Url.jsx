import styled from 'styled-components'
import '../Url/url.styles.css'

export function Url({ ...props }) {
    const { title, url, description } = props

    return (
        <Div>
            <div className='url'>
                <a href={url} target='_blank'>{title}</a>
                <p>{description}</p>
            </div>
            <div className='edit'>
                edit
            </div>
            <div className='delete'>
                delete
            </div>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    margin-bottom: 4vh;
`