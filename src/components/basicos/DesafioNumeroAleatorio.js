



export default function DesafioNumeroAleatorio(props) {

  const max  = props.max;
  const min =  props.min;

  const aleatorio = parseInt(Math.random()* (max - min)) + min;

  return(

    <div>
        {aleatorio}
    </div>

  )

}