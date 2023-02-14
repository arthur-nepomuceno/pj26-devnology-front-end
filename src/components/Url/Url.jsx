import styled from 'styled-components'
import '../Url/url.styles.css'

export function Url() {
    return (
        <Div>
            <div className='url'>
                test
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