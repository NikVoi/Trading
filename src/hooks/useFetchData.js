import { useEffect, useState } from 'react'

const fetchData = async () => {
	const module = await import('@/data/data.min.json')
	return module.default || module
}

const useFetchData = () => {
	const [data, setData] = useState(null)

	useEffect(() => {
		fetchData().then(setData)
	}, [])

	return data
}

export default useFetchData
