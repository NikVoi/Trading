import Bots from '@/components/Bots'
import Capital from '@/components/Capital'
import Graph from '@/components/Graph'
import Range from '@/components/Range'
import { TIME } from '@/constants/values'
import jsonData from '@/data/data.min.json'
import { useState } from 'react'

const Dashboard = () => {
	const [active, setActive] = useState(TIME[TIME.length - 1])
	const [selectedBot, setSelectedBot] = useState(jsonData.bots[0])
	const [chartData, setChartData] = useState(
		jsonData.bots.map((bot, index) => ({
			date: `${index + 1}.02`,
			value: bot[active],
		}))
	)
	console.log(jsonData)

	const handleBotClick = bot => {
		setSelectedBot(bot)
		setChartData(
			chartData.map(point => ({ ...point, value: Math.random() * 20 }))
		)
	}
	return (
		<section className='flex-1 flex flex-col justify-around'>
			<Capital
				trading_capital={jsonData.trading_capital}
				balance={jsonData.balance}
				on_hold={jsonData.on_hold}
			/>
			<Graph active={active} chartData={chartData} />
			<Bots
				bots={jsonData.bots}
				active={active}
				setSelectedBot={handleBotClick}
			/>
			<Range setActive={setActive} active={active} />
		</section>
	)
}

export default Dashboard
