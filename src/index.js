import ReactDom from "react-dom";
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"


ReactDom.render(

  <>

  <Primeiro/>
  <ComParametro
    nome = "Anderson"
    nota = "10"
    status

  />

  </>

  ,document.getElementById('root')
)