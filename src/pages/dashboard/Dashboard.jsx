import Bots from '@/components/bots/Bots'
import Capital from '@/components/capital/Capital'
import Graph from '@/components/graph/Graph'
import Loader from '@/components/loader/Loader'
import Range from '@/components/range/Range'
import { TIME } from '@/constants/values'
import useFetchData from '@/hooks/useFetchData'
import useLocalStorage from '@/hooks/useLocalStorage'
import { generateChartData } from '@/utils/chartUtils'
import { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'

const Dashboard = () => {
	const data = useFetchData()
	const [active, setActive] = useLocalStorage('active', TIME[TIME.length - 1])
	const [selectedBot, setSelectedBot] = useLocalStorage('selectedBot', null)
	const [chartData, setChartData] = useState([])

	useEffect(() => {
		if (data) {
			setSelectedBot(data.bots[0])
			setChartData(generateChartData(active))
		}
	}, [data, active])

	const handleBotClick = bot => {
		setSelectedBot(bot)
		setChartData(generateChartData(active))
	}

	if (!data || !data.bots) {
		return <Loader />
	}

	return (
		<section className={styles.dashboard}>
			<Capital {...data} />
			<Graph active={active} chartData={chartData} />
			<Bots
				bots={data.bots}
				active={active}
				setSelectedBot={handleBotClick}
				selectedBot={selectedBot}
			/>
			<Range setActive={setActive} active={active} />
		</section>
	)
}

export default Dashboard
