import { TIME, TIME_LABELS } from '@/constants/values'

const Range = ({ active, setActive }) => {
	return (
		<section className='flex justify-around items-center p-4 '>
			<h3 className='text-2xl font-bold opacity-50 border border-indigo-600'>
				Time Range:
			</h3>
			{TIME.map(item => (
				<button
					key={item}
					className={`flex justify-center items-center text-xl transition-all duration-300 border-b border-solid border-pink-500 rounded-3xl px-5 py-1 ${
						active === item ? 'opacity-100' : 'opacity-50'
					}`}
					onClick={() => setActive(item)}
				>
					{TIME_LABELS[item]}
				</button>
			))}
		</section>
	)
}

export default Range
