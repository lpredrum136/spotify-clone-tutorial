import {
	HomeIcon,
	HeartIcon,
	LibraryIcon,
	PlusCircleIcon,
	RssIcon,
	SearchIcon
} from '@heroicons/react/outline'
import IconButton from './IconButton'

const Divider = () => <hr className='border-t-[0.1px] border-gray-900' />

const Sidebar = () => {
	return (
		<div className='text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block'>
			<div className='space-y-4'>
				<IconButton icon={HomeIcon} label='Home' />
				<IconButton icon={SearchIcon} label='Search' />
				<IconButton icon={LibraryIcon} label='Your Library' />

				<Divider />

				<IconButton icon={PlusCircleIcon} label='Create Playlist' />
				<IconButton icon={HeartIcon} label='Liked Songs' />
				<IconButton icon={RssIcon} label='Your episodes' />

				<Divider />

				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
				<p className='cursor-pointer hover:text-white'>PLAYLIST</p>
			</div>
		</div>
	)
}

export default Sidebar
