import { useState } from 'react'

function Form(){


    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Funcionou, oras!")
        console.log(name)
        console.log(password)
        console.log(`O usuário ${name} digitou a senha ${password}`)

    }

    const [name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name"  placeholder="Digite o seu nome"
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" 
                    placeholder="Digite a sua senha"
                    onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        



        </div>
    )
    //Ao usar o submit, ele irá verificar no form se foi passado algo para ser executada a função. 
    //o Label htmlFor é utilizado com o input, facilita na visualização de campos. Ao utilizar,
    // colocar o "id" e o "name", pois irá associar ao input

} export default Form