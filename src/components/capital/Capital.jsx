import styles from './Capital.module.css'

const Capital = ({ trading_capital, balance, on_hold }) => {
	return (
		<section className={styles.capitalContainer}>
			<span className={styles.capitalContent}>
				<span className={styles.capitalAmount}>
					<h3 className={styles.capitalTitle}>trading capital</h3>
					{trading_capital} BTC
				</span>

				<div className={styles.capitalDetails}>
					<div className={styles.capitalRow}>
						<span className={styles.label}>balance:</span>
						<span>
							{balance}{' '}
							<img src='./token.png' alt='token' className={styles.image} />
						</span>
					</div>

					<div className={styles.capitalRow}>
						<span className={styles.label}>on hold:</span>
						<span>
							{on_hold}{' '}
							<img src='./token.png' alt='token' className={styles.image} />
						</span>
					</div>
				</div>
			</span>
		</section>
	)
}

export default Capital
