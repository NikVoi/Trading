import { BOTS_COLOR } from '@/constants/values'
import { useEffect, useState } from 'react'
import { LiaRobotSolid } from 'react-icons/lia'

const Bots = ({ bots, active, setSelectedBot, selectedBot }) => {
	const [updatedBots, setUpdatedBots] = useState(bots)

	useEffect(() => {
		setUpdatedBots(bots.map(bot => ({ ...bot, value: bot[active] })))
	}, [active, bots])

	return (
		<ul className='flex flex-wrap justify-center w-full gap-1'>
			{updatedBots.map((bot, index) => {
				const botNameKey = bot.name.toLowerCase().replace('_', '')
				const iconColor = BOTS_COLOR[botNameKey] || BOTS_COLOR.default

				const isSelected = selectedBot.name === bot.name // Проверяем, активен ли бот

				return (
					<li
						key={index}
						onClick={() => setSelectedBot(bot)}
						className={`flex flex-col justify-center items-center min-w-[30%] h-36 rounded-xl text-lg font-bold cursor-pointer transition-all ${
							isSelected
								? 'bg-[#1a3450] shadow-[inset_0_0_15px_3px_rgba(255,255,255,0.1)]'
								: 'bg-[#1b293e]'
						}`}
					>
						<LiaRobotSolid
							className='text-4xl'
							style={{
								fill: iconColor,
							}}
						/>
						<span className='uppercase'>{bot.name.replace('_', ' ')}</span>
						<span
							className={bot.value >= 0 ? 'text-green-400' : 'text-red-400'}
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
