import { BOTS_COLOR } from '@/constants/values'
import { useEffect, useState } from 'react'
import { LiaRobotSolid } from 'react-icons/lia'
import styles from './Bots.module.css'

const Bots = ({ bots, active, setSelectedBot, selectedBot }) => {
	const [updatedBots, setUpdatedBots] = useState(bots)

	useEffect(() => {
		setUpdatedBots(bots.map(bot => ({ ...bot, value: bot[active] })))
	}, [active, bots])

	return (
		<ul className={styles.botsContainer}>
			{updatedBots.map((bot, index) => {
				const botNameKey = bot.name.toLowerCase().replace('_', '')
				const iconColor = BOTS_COLOR[botNameKey] || BOTS_COLOR.default
				const isSelected = selectedBot.name === bot.name

				return (
					<li
						key={index}
						onClick={() => setSelectedBot(bot)}
						className={`${styles.botItem} ${isSelected ? styles.selected : ''}`}
					>
						<LiaRobotSolid
							className={styles.botIcon}
							style={{ fill: iconColor }}
						/>
						<span className={styles.botName}>{bot.name.replace('_', ' ')}</span>
						<span
							className={
								bot.value >= 0 ? styles.positiveValue : styles.negativeValue
							}
						>
							{bot.value}%
						</span>
					</li>
				)
			})}
		</ul>
	)
}

export default Bots
