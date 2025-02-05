const Capital = ({ trading_capital, balance, on_hold }) => {
	return (
		<section>
			<h3 className={''}>trading capital</h3>

			<span className='flex justify-evenly text-xl uppercase'>
				<span className='text-6xl'>{trading_capital} BTC</span>

				<div className='text-2xl flex flex-col justify-center'>
					<div className='flex justify-between'>
						<span className='opacity-50'>balance:</span>
						<span>{balance}</span>
					</div>

					<div className='flex justify-between min-w-[120px]'>
						<span className='opacity-50'>on hold:</span>
						<span>{on_hold}</span>
					</div>
				</div>
			</span>
		</section>
	)
}

export default Capital
