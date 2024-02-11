
// use client
import Gallery from "../../components/Gallery"

export default function Page() {
	return (
		<>
			<div className="w-full bg-white h-16  flex flex-col items-center justify-center ">
				<div className="flex flex-row justify-center">
					<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>MEDIA</h2>
					<div className='h-1 w-11/12 absolute bg-black translate-y-4 '></div>
				</div>
			</div>

			<div className="mx-auto w-full">
				<Gallery />
			</div>
		</>
		)
}
