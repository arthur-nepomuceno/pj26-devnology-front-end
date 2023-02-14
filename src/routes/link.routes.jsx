import { Routes, Route } from "react-router-dom";
import { Links } from "../pages/Links/Link";

export function LinkRoutes(){
    return (
        <Routes>
            <Route path='/links' element={<Links />}/>
        </Routes>
    )
}