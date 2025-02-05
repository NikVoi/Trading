import { CiCircleList } from 'react-icons/ci'
import { GoGraph } from 'react-icons/go'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineMonetizationOn } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'

export const NAVIGATION = [
	{ title: 'Dashboard', image: <CiCircleList /> },
	{ title: 'Megabot', image: <GoGraph /> },
	{ title: 'Bot market', image: <SlBasket /> },
	{ title: 'Coin prices', image: <MdOutlineMonetizationOn /> },
	{ title: 'Profile', image: <IoSettingsOutline /> },
]

export const TIME = ['24h', '7d', '30d', 'all_time']

export const TIME_LABELS = {
	'24h': '24h',
	'7d': '7 days',
	'30d': '30 days',
	all_time: 'All time',
}

export const BOTS_COLOR = {
	yellowbot: '#ffff00',
	whitebot: '#000',
	greenbot: '#008000',
	redbot: '#ff0000',
	bluebot: '#0000ff',
	orangebot: '#ffa500',
}
