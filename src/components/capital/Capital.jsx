import styles from './Capital.module.css'

const Capital = ({ trading_capital, balance, on_hold }) => {
	return (
		<section className={styles.capitalContainer}>
			<span className={styles.capitalContent}>
				<h3 className={styles.capitalTitle}>trading capital</h3>
				<span className={styles.capitalAmount}>{trading_capital} BTC</span>

				<div className={styles.capitalDetails}>
					<div className={styles.capitalRow}>
						<span className={styles.label}>balance:</span>
						<span>{balance}</span>
					</div>

					<div className={styles.capitalRow}>
						<span className={styles.label}>on hold:</span>
						<span>{on_hold}</span>
					</div>
				</div>
			</span>
		</section>
	)
}

export default Capital
