const Capital = ({ trading_capital, balance, on_hold }) => {
	return (
		<section className='uppercase  '>
			<span className='flex justify-around relative '>
				<h3
					className={'text-xl absolute -top-7 left-10.5 font-bold opacity-50'}
				>
					trading capital
				</h3>
				<span className='text-6xl'>{trading_capital} BTC</span>

				<div className='text-xl flex flex-col justify-center font-bold'>
					<div className='flex justify-between'>
						<span className='opacity-50'>balance:</span>
						<span>{balance}</span>
					</div>

					<div className='flex justify-between min-w-[110px] '>
						<span className='opacity-50'>on hold:</span>
						<span>{on_hold}</span>
					</div>
				</div>
			</span>
		</section>
	)
}

export default Capital
