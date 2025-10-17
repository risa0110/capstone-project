import {BrowserRouter,Routes,Route} from "react-router-dom"
import LP from "./Pages/LP"
import "./style.css"

export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<LP/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}