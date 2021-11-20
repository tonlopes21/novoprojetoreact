import { useState } from 'react'

function Form (){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log(`Cadastrou o usuario`)

    }
    
    const [name, setName] = useState()
    //name = nome do tributo , o que irá resgatar
    //setName = é o nome da manipulação que será atribuída ao name.
    //useState(), dentro de "()"é o valor que se inicia quando o component for inicializado.
    const [password, setPassword] = useState() 


    return(

        <div>
            <h1>
                Meu cadastro
            </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" >Nome:</label>
                    <input type="text" 
                    id="name" 
                    name="name"
                    placeholder="Digite o seu nome"                    
                    onChange={(e) => setName(e.target.value)}
                    
                    //Ao utilizar o onChange, fará com que qualquer alteração seja inserida no state. 
                    />
                    
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" 
                     id="password" 
                     name="password"
                     placeholder="Digite sua senha"
                     onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
                
                
            </form>


        </div>
    )
    
}

export default Form