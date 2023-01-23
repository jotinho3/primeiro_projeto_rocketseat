import styles from './Header.module.css'
import igniteLogo from '../assets/Ignite simbol.svg'

console.log(styles)

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            Ignite Feed
            </header>
    );
}