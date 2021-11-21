function Saudacao({nome}){

    function gerarsaudacao(algumnome){
        return(`Olá ${algumnome}, tudo bem?`)
    }


    

    return <> {nome && <p>{gerarsaudacao(nome)}</p>}</>

}export default Saudacao