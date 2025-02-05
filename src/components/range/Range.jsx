import { TIME, TIME_LABELS } from '@/constants/values'
import styles from './Range.module.css'

const Range = ({ active, setActive }) => {
	return (
		<section className={styles.rangeContainer}>
			<h3 className={styles.rangeTitle}>Time Range:</h3>
			{TIME.map(item => (
				<button
					key={item}
					className={`${styles.rangeButton} ${
						active === item ? styles.active : ''
					}`}
					onClick={() => setActive(item)}
				>
					{TIME_LABELS[item]}
				</button>
			))}
		</section>
	)
}

export default Range
