import styled from 'styled-components'
import '../Header/header.styled.css'

export function Header() {
    return (
        <Div>
            <p className='welcome'>Ola, !</p>
            <p className='exit'>Sair</p>
        </Div>
    )
}

const Div = styled.div`
    position: absolute;
    
    width: 100vw;
    height: 8vh;
    background-color: #FFFFFF;

    display: flex;
`