import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import NovoVideo from "pages/NovoVideo";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path="addvideo" element={<NovoVideo/>}/>
                    <Route path=":id" element={<Player/>}/>
                    <Route path="*" element={<NaoEncontrada/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;