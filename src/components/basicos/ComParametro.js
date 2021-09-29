

export default function ComParametro(props) {


  const { nome, nota, status } = props


  return (

    <div>

      <h1>
        {nome}
      </h1>

      <h1>
        {nota}
      </h1>

      <h1>
        {status}
      </h1>
    </div>
  )
}