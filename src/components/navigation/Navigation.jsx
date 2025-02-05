import { NAVIGATION } from '@/constants/values'
import { useState } from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
	const [activeIndex, setActiveIndex] = useState(1)

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
							activeIndex === index ? 'active' : ''
						}`}
						onClick={() => handleClick(index)}
					>
						<p className={styles.navigationIcon}>{image}</p>
						<p className={styles.navigationTitle}>{title}</p>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
