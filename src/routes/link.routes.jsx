import { Routes, Route } from "react-router-dom";
import { Links } from "../pages/Links/Links";

export function LinkRoutes(){
    return (
        <Routes>
            <Route path='/links' element={<Links />}/>
        </Routes>
    )
}