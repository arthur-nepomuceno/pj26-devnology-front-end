import '../LogIn/login.styles.css'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export function LogIn() {
    const navigate = useNavigate()

    function goToSignUp() {
        navigate('/signup')
    }

    return (
        <>
            <h1 className='title'>FavLinks</h1>
            <h3 className='subtitle'>Seus melhores links; todo o tempo.</h3>
            <img src={logo} className='logo'/>
            <Input type='email' id='email' name='email'  placeholder='email' />
            <Input type='password' id='password' name='password' placeholder='password' />
            <Button type='button' id='entry' text='Entrar'></Button>
            <h4 className='access' onClick={goToSignUp}>Ainda não tem cadastro? Se inscreva!</h4>
        </>
    )
}