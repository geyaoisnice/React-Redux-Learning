import "reset-css"
import "./assets/global.scss"
import 'antd/dist/antd.css'
import {useRoutes,Link} from "react-router-dom"
import router from "./router";

function App() {
  const outlet=useRoutes(router)
  return (
    <>
     {outlet}
    </>
  )
}

export default App
