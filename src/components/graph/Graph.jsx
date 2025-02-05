import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'
import styles from './Graph.module.css'

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.tooltip}>
				<p className={styles.tooltipText}>{`+${payload[0].value}%`}</p>
			</div>
		)
	}
	return null
}

const Graph = ({ chartData }) => {
	return (
		<div className={styles.graphContainer}>
			<ResponsiveContainer width='110%'>
				<AreaChart data={chartData}>
					<CartesianGrid strokeWidth='1' stroke='rgba(255, 255, 255, 0.1)' />
					<XAxis
						dataKey='date'
						stroke='rgba(255, 255, 255, 0.5)'
						tick={{ fontSize: 10 }}
						className={styles.xAxis}
					/>
					<YAxis tickCount={8} hide domain={['dataMin - 10', 'dataMax + 10']} />

					<Tooltip
						content={<CustomTooltip />}
						cursor={{ stroke: '#00BFFF', strokeWidth: 0 }}
					/>

					<Area
						type='monotone'
						dataKey='value'
						stroke='#00BFFF'
						fill='url(#gradient)'
						fillOpacity={0.8}
						strokeWidth={2}
					/>
					<defs>
						<linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#00BFFF' stopOpacity={0.5} />
							<stop offset='90%' stopColor='#00BFFF' stopOpacity={0} />
						</linearGradient>
					</defs>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	)
}

export default Graph
