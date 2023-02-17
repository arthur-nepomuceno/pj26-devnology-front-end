import '../Links/links.styles.css'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Url } from '../../components/Url/Url'
import { Header } from '../../components/Header/Header'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { API } from '../../api/Api'

export function Links() {
    const { token } = useContext(UserContext);
    const [links, setLinks] = useState()

    async function getLinks() {
        const config = {headers: {Authorization: `Bearer ${token.token}`}}

        try {
            const response = await API.get('/getlinks', config)
            setLinks(response.data)

        } catch (error) {
            console.log(error.response)
        }
    }

    async function addLink() {
        alert('Esta função estará disponível em breve! ;)')
    }

    return (
        <>
            <Header />
            <h1 className='title'>FavLinks</h1>
            <img src={logo} className='logo' />
            <Input type='link' id='link' name='link' placeholder='insira aqui o seu link' />
            <Button type='button' className='add button' text='Adicionar' onClick={addLink}></Button>
            <Div>
                <p>Você ainda não possui links adicionados.</p> 
            </Div>
        </>
    )
}

const Div = styled.div`
    position: absolute;

    width: 71vw;
    height: 50vh;
    top: 44vh;
    left: 17vw;

    border: 1px dashed black;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        color: #9C9C9C;
    }
`