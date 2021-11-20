import styles from './Frase.module.css' 

function Frase() {
    return(
        <div className={styles.fraseContainer}>

            <p classsName={styles.fraseContent}> 
            Este é um component com uma frase e edição de cor.</p>
        </div>
    )
}

export default Frase;