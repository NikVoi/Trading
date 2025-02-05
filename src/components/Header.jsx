import { TfiReload } from 'react-icons/tfi'

const Header = () => {
	return (
		<header
			className={`flex justify-between items-center relative h-30 opacity-50 before:content[' '] before:size-100 before:bg-blue-500 before:rounded-full before:absolute before:left-1/2 before:-top-11/12 before:-translate-x-1/2 before:-translate-y-1/2 before:blur-3xl `}
		>
			<button className='w-30 h-16 flex justify-center items-center'>
				<span className='block w-10 h-1 bg-[white] relative'>
					<span className='before:block before:w-10 before:h-1 before:bg-[white] before:content-"" before:absolute before:top-[-10px]'></span>
					<span className='after:block after:w-10 after:h-1 after:bg-[white] after:content-"" after:absolute after:bottom-[-10px]'></span>
				</span>
			</button>

			<h2 className='text-4xl relative z-10 text-opacity-50'>Dashboard</h2>

			<button className='w-24 text-4xl'>
				<TfiReload />
			</button>
		</header>
	)
}

export default Header
