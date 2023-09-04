
import Home from "@/views/home";
import Fang from "@/views/fang";
import App from "@/App";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const baseRouter=()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/fang" element={<Fang></Fang>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>

    
)
export default baseRouter
