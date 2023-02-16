import { AuthRoutes } from './auth.routes'
import { LinkRoutes } from './link.routes'
import { UserContext } from '../contexts/UserContext'
import { useState } from 'react'

export function Routes() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [token, setToken] = useState()

    const context = {
        email,
        setEmail,
        password,
        setPassword,
        token,
        setToken
    }

    return (
        <UserContext.Provider value={context}>
            <AuthRoutes />
            <LinkRoutes />
        </UserContext.Provider>
    )
}