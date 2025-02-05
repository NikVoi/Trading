import { useState } from 'react'
import { NAVIGATION } from '../constants/values'

const Navigation = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handleClick = index => {
		setActiveIndex(index)
	}

	return (
		<nav className='' role='navigation'>
			<ul className='flex justify-evenly items-center h-24 w-full bg-[#18283c]'>
				{NAVIGATION.map(({ title, image }, index) => (
					<li
						key={title}
						className={`flex flex-col justify-evenly items-center text-xl h-full cursor-pointer hover:opacity-100 hover:duration-200  ${
							activeIndex === index ? 'opacity-100' : 'opacity-50'
						}`}
						onClick={() => handleClick(index)}
					>
						<p className='text-4xl mb-10'>{image}</p>
						<p className=''>{title}</p>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
