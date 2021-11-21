function Form(){


    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Funcionou, oras!")

    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        



        </div>
    )
    //Ao usar o submit, ele irá verificar no form se foi passado algo para ser executada a função. 

} export default Form