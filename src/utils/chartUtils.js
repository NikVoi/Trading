export const generateChartData = active => {
	const generateValue = () => (Math.random() * (35 - 20) + 20).toFixed(2)

	const lengthMap = {
		'24h': 24,
		'7d': 7,
		'30d': 30,
		all: 60,
	}

	const length = lengthMap[active] || 7

	return Array.from({ length }, (_, i) => ({
		date: active === '24h' ? `${i}:00` : `${i + 1}.04`,
		value: generateValue(),
	}))
}
