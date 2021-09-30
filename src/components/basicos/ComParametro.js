

export default function ComParametro(props) {

const status = props.nota >= 2 ? 'aprovado' : 'reprovado'
  
  
  return (

    <div>

      <h1>
        {props.nome}
      </h1>

      <h1>
        {props.nota}
      </h1>

      <h1>
        {status}
      </h1>
    </div>
  )
}