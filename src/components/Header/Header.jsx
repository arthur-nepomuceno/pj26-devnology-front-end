import '../Header/header.styled.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export function Header() {
    const navigate = useNavigate()
    const {
        email,
        setEmail,
        setPassword,
        setToken
    } = useContext(UserContext)

    function exit() {
        setEmail('')
        setPassword('')
        setToken({})
        navigate('/')
    }

    return (
        <Div>
            <p className='welcome'>Olá {email}!</p>
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