import { useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : defaultValue
		} catch (error) {
			console.error('Error reading from localStorage', error)
			return defaultValue
		}
	})

	const setValue = value => {
		try {
			setStoredValue(value)
			localStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.error('Error writing to localStorage', error)
		}
	}

	return [storedValue, setValue]
}

export default useLocalStorage
