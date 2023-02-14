import '../SignUp/signup.styles.css'
import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
    const navigate = useNavigate()

    function goToLogIn(){
        navigate('/')
    }

    return (
        <>
            <h1 className='title'>FavLinks</h1>
            <h3 className='subtitle'>Seus melhores links; todo o tempo.</h3>
            <img src={logo} className='logo'/>
            <Input type='email' id='email' name='email' className='input' placeholder='email' />
            <Input type='password' id='password' name='password' className='input' placeholder='password' />
            <Input type='password' id='confirm' name='confirm' className='input' placeholder='confirm' />
            <Button type='button' id='register' text='Criar Conta'></Button>
            <h4 className='register' onClick={goToLogIn}>Já tem cadastro? Acesse!</h4>
        </>
    )
}