import { BOTS_IMG } from '@/constants/values'
import styles from './Bots.module.css'

const Bots = ({ bots = [], active, setSelectedBot, selectedBot }) => {
	if (!bots.length) return <p className={styles.noBots}>Боты не найдены</p>

	return (
		<ul className={styles.botsContainer}>
			{bots.map((bot, index) => {
				if (!bot) return null

				const botNameKey = bot.name?.toLowerCase().replace('_', '') || 'default'
				const src = BOTS_IMG[botNameKey] || BOTS_IMG.default
				const isSelected = selectedBot?.name === bot.name
				const value = bot[active] ?? 0

				return (
					<li
						key={bot.id || index}
						onClick={() => setSelectedBot(bot)}
						className={`${styles.botItem} ${isSelected ? styles.selected : ''}`}
					>
						<img src={src} className={styles.botImage} alt={bot.name} />
						<span className={styles.botName}>{bot.name.replace('_', ' ')}</span>
						<span
							className={
								value >= 0 ? styles.positiveValue : styles.negativeValue
							}
						>
							{value}%
						</span>
					</li>
				)
			})}
		</ul>
	)
}

export default Bots
