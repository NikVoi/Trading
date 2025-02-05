import { useEffect, useState } from 'react'
import { LiaRobotSolid } from 'react-icons/lia'

const Bots = ({ bots, active, setSelectedBot }) => {
	const [updatedBots, setUpdatedBots] = useState(bots)

	useEffect(() => {
		setUpdatedBots(bots.map(bot => ({ ...bot, value: bot[active] })))
	}, [active, bots])

	return (
		<ul className='flex flex-wrap justify-center w-full gap-1'>
			{updatedBots.map((bot, index) => (
				<li
					key={index}
					onClick={() => setSelectedBot(bot)}
					className='flex flex-col justify-center items-center min-w-[32%] min-h-[120px] bg-[#1b293e] rounded-xl text-xl font-bold cursor-pointer hover:bg-[#25364f] transition-all'
				>
					<LiaRobotSolid className='text-5xl' />
					<span className='uppercase'>{bot.name.replace('_', ' ')}</span>
					<span className={bot.value >= 0 ? 'text-green-400' : 'text-red-400'}>
						{bot.value}%
					</span>
				</li>
			))}
		</ul>
	)
}

export default Bots
