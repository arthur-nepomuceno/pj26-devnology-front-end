import '../SignUp/signup.styles.css'
import logo from '../../assets/logo.png'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { useState, useContext } from 'react'
import { API } from '../../api/Api'

export function SignUp() {
    const endPoint = '/signup'

    const {
        email,
        setEmail,
        password,
        setPassword
    } = useContext(UserContext)

    const [confirm, setConfirm] = useState()

    const navigate = useNavigate()

    function goToLogIn() {
        navigate('/');
    }

    async function signUp(event) {
        event.preventDefault()

        const body = { email, password, confirm }

        try {
            const response = await API.post(endPoint, body)
            console.log(response.data)
            alert('Cadastro realizado com sucesso!')
            navigate('/')
        } catch (error) {
            console.log(error.response)
            if(error.response.status === 406) alert('Este email já está em uso.')
            if(error.response.status === 409) alert('Por favor, confirme sua senha corretamente.')
        }
    }

    return (
        <form onSubmit={signUp}>
            <h1 className='title'>FavLinks</h1>
            <h3 className='subtitle'>Seus melhores links; todo o tempo.</h3>
            <img src={logo} className='logo' />
            <Input type='email' id='email' name='email' className='input' value={email} onChange={e => { setEmail(e.target.value) }} placeholder='email' />
            <Input type='password' id='password' name='password' className='input' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
            <Input type='password' id='confirm' name='confirm' className='input' value={confirm} onChange={e => setConfirm(e.target.value)} placeholder='confirm' />
            <Button type='submit' id='register' className='signup button' text='Criar Conta'></Button>
            <h4 className='register' onClick={goToLogIn}>Já tem cadastro? Acesse!</h4>
        </form>
    )
}