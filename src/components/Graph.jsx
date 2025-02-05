import {
	Area,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className=' rounded-lg text-xl text-green-400'>
				<p className='font-bold'>{`${payload[0].value}%`}</p>
			</div>
		)
	}
	return null
}

const Graph = ({ chartData }) => {
	return (
		<div className='w-full text-white '>
			<ResponsiveContainer width='100%' height={200}>
				<AreaChart data={chartData}>
					<XAxis
						dataKey='date'
						stroke='white'
						tick={{ fontSize: 12 }}
						className='opacity-50'
					/>
					<YAxis hide domain={['dataMin', 'dataMax + 0']} />

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
