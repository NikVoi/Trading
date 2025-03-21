import { NAVIGATION } from '@/constants/values'
import { useState } from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleClick = index => {
		setActiveIndex(index)
	}

	return (
		<nav className={styles.navigation} role='navigation'>
			<ul className={styles.navigationList}>
				{NAVIGATION.map(({ title, image }, index) => (
					<li
						key={title}
						className={`${styles.navigationItem} ${
							activeIndex === index ? styles.active : ''
						}`}
						onClick={() => handleClick(index)}
					>
						<p className={styles.navigationIcon}>{image}</p>
						<p className={styles.navigationTitle}>{title}</p>

						{index === NAVIGATION.length - 1 && (
							<span className={styles.notificationBadge}>3</span>
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
