import Button from './evento/Button'

function Evento({numero}){

    function meuEvento(){
        console.log(`Funcionou!`)
    }



    return(
        <div>
            <Button event={meuEvento} text="Primeiro evento"/>


        </div>


    )
} export default Evento