import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviarEmail (e) {
        e.preventDefault()
        setUserEmail(email)
        //Nessa parte será ativado o método "enviarEmail", e colocado dentro de "setUserEmail" o email.
        //e setUserEmail será colocado dentro de "userEmail"
        console.log(userEmail)

        
    }
    function limparEmail(){
        setUserEmail('')


    }


    

    return(

        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>

                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>

                    </div>
                )}
                <button onClick={limparEmail}>Limpar email</button>
            </form>
            

        </div>
        //Na parte acima {userEmail && (<div> <p>O e-mail do usuário é: {userEmail}</p> </div> )} é a condicional. 
    )
    

        


    

}

export default Condicional