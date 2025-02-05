import { TfiReload } from 'react-icons/tfi'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<button className={styles.menuButton}>
				<span className={styles.menuIcon}></span>
			</button>

			<h2 className={styles.title}>Dashboard</h2>

			<button className={styles.reloadButton}>
				<TfiReload />
			</button>
		</header>
	)
}

export default Header
