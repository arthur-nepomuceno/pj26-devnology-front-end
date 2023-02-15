import styled from 'styled-components'
import '../Header/header.styled.css'
import { useNavigate } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()
    function exit(){
        navigate('/')
    }
    return (
        <Div>
            <p className='welcome'>Ola, !</p>
            <p className='exit' onClick={exit}>Sair</p>
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