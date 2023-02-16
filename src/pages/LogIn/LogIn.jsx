import '../LogIn/login.styles.css'
import logo from '../../assets/logo.png'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { API } from '../../api/Api'

export function LogIn() {
    const endPoint = '/login'

    const {
        email,
        setEmail,
        password,
        setPassword,
        setToken
    } = useContext(UserContext)

    const navigate = useNavigate()

    function goToSignUp() {
        navigate('/signup')
    }

    async function logIn(event) {
        event.preventDefault()

        const body = { email, password }
        try {
            const response = await API.post(endPoint, body)
            console.log(response.data)
            setToken(response.data);
            navigate('/links')
        } catch (error) {
            console.log(error.response)
            if(error.response.status === 406) alert('Este email não está cadastrado.')
            if(error.response.status === 409) alert('Por favor, digite sua senha corretamente.')
        }
    }

    return (
        <form onSubmit={logIn}>
            <h1 className='title'>FavLinks</h1>
            <h3 className='subtitle'>Seus melhores links; todo o tempo.</h3>
            <img src={logo} className='logo' />
            <Input type='email' id='email' name='email' value={email} onChange={e => { setEmail(e.target.value) }} placeholder='email' />
            <Input type='password' id='password' name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
            <Button type='submit' id='entry' className='login button' text='Entrar'></Button>
            <h4 className='access' onClick={goToSignUp}>Ainda não tem cadastro? Se inscreva!</h4>
        </form>
    )
}