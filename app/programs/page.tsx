
import Image from 'next/image';
import adultBJJImage from './images/adultsBJJ.jpg';
import kidsBJJImage from './images/kidsBJJ.jpg';
import MTImage from './images/muaythai.jpg';
import WrestlingImage from './images/wrestling.jpg';
import AdultBJJ from './adultBJJ';
import KidsBJJ from './kidsBJJ';
import Link from 'next/link';
import DesktopViewImport from './DesktopView'

export default function Page() {
	return (
		<>
			{/* Page Header */}
			<div className="w-full bg-white h-16  flex flex-col items-center justify-center">
				<div className="flex flex-row justify-center">
					<h2 className="font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase">
						Programs
					</h2>
					<div className="h-1 w-11/12 absolute bg-black translate-y-4 "></div>
				</div>
			</div>

			<div className="lg:hidden flex flex-col w-full p-4 space-y-2 text-left bg-black text-white">
				<Image
				src={adultBJJImage}
				alt="Adult Brazilian Jiu Jitsu Image"
				placeholder="blur"
				blurDataURL="data:image/png;base64,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"
				quality={100}
				priority={false}
				className="w-full saturate-125 h-full object-cover rounded-xl"
				/>
				<AdultBJJ />

				<div className="flex flex-col items-center w-full py-6 space-y-6">
					<a href="https://api.bjjlink.com/pub/664760798b06364ceffb751e">
						<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-80 hover:scale-110 duration-150">Join a Class</button>
					</a>
					<Link id="kids-bjj" href="/media">
						<button className="bg-white text-lg text-button rounded-lg ring ring-button font-garet grow h-10 w-80 hover:scale-110 duration-150">View Media</button>
					</Link>
				</div>

				<Image
				src={kidsBJJImage}
				alt="Kids Brazilian Jiu Jitsu Image"
				placeholder="blur"
				blurDataURL="data:image/png;base64,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"
				quality={100}
				priority={false}
				className="w-full saturate-125 h-full object-cover rounded-xl"
				
				/>
				<KidsBJJ />

				<div className="flex flex-col items-center w-full py-6 space-y-6">
					<a href="https://api.bjjlink.com/pub/664760798b06364ceffb751e">
						<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-80 hover:scale-110 duration-150">Join a Class</button>
					</a>
					<Link id="wrestling" href="/media">
						<button className="bg-white text-lg text-button rounded-lg ring ring-button font-garet grow h-10 w-80 hover:scale-110 duration-150">View Media</button>
					</Link>
				</div>

					
			</div>
			
			<div className="hidden lg:block bg-black text-white">
				<DesktopViewImport />
			</div>
	
		</>
	);
}

