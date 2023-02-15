import styled from 'styled-components'
import '../Links/links.styles.css'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { Url } from '../../components/Url/Url'
import { Header } from '../../components/Header/Header'
import logo from '../../assets/logo.png'

export function Links() {
    return (
        <>
            <Header />
            <h1 className='title'>FavLinks</h1>
            <img src={logo} className='logo'/>
            <Input type='link' id='link' name='link' placeholder='insira aqui o seu link'/>
            <Button type='button' className='add button' text='Adicionar'></Button>
            <Div>
                <Url
                    title='Link de Teste'
                    url='https://www.figma.com/file/DWg9233KR2GS6RLvfZRwyd/Shortly?node-id=0%3A1&t=1HeHuHhmu6KaFuiw-0'
                    description='kahsdjkahdkja alksdjakjdlajsd p31391239283019283'
                />
                <Url />
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
`