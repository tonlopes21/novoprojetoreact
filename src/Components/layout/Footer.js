import { MdFacebook, MdSocialDistance } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import styles from './Footer.module.css'


function Footer(){

    return (
        <footer>
        <ul className={styles.social_list}>
            <li>
            <MdFacebook />
            </li>
            <li>
            <FaInstagramSquare/>
            </li>
            <li>
            <FaWhatsappSquare/>
            </li>
            
            
        </ul>
        <p>Nosso rodapé</p>
    
     </footer>
    
    
    )
}
export default Footer