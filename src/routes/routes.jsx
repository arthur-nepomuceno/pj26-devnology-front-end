import { AuthRoutes } from './auth.routes'
import { LinkRoutes } from './link.routes'

export function Routes() {
    return (
        <>
            <AuthRoutes />
            <LinkRoutes />
        </>
    )
}