import Button from './evento/Button'

function Evento({numero}){

    function meuPrimeiroEvento(){
        console.log(`Funcionou com o número ${numero}`)
    }



    return(
        <div>
            <button onClick={meuPrimeiroEvento}>Evento {numero}</button>

        </div>


    )
} export default Evento