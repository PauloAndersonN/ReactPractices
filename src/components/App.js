import Primeiro from "./basicos/Primeiro"
import ComParametro from "./basicos/ComParametro"
import DesafioNumeroAleatorio from "./basicos/DesafioNumeroAleatorio"
import ListaAlunos from "./repeticao/listaAluno"
import Card from "./layouts/Card"

const App = () => {
  return (
    <>
      <Card titulo = "Desafio Aleatorio">
            <DesafioNumeroAleatorio min={1} max={60} />
      </Card>

      <Card titulo = "Primeiro Componente">
            <Primeiro/>
      </Card>

      <Card titulo = "Com Parametro">
            <ComParametro nome="Anderson" nota={10} />
      </Card>

      <Card titulo = "Lista De Alunos">
            <ListaAlunos />
      </Card>
    </>
  )
}

export default App