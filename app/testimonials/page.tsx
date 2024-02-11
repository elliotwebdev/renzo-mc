
import { longReviews } from "./longReviews"

export default function Page() {
	return (
	<>
		<div className="w-full bg-white h-16  flex flex-col items-center justify-center ">
			<div className="flex flex-row justify-center">
				<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>Testimonials</h2>
				<div className='h-1 w-11/12 absolute bg-black translate-y-4 '></div>
			</div>
		</div>

		<div className=" bg-white flex flex-col items-center justify-center font-garet">

			<div className="flex flex-col lg:grid lg:grid-cols-2 text-black w-11/12 lg:w-10/12 2xl:w-9/12 place-items-start justify-center pb-8 gap-6">
				
				<div className="flex flex-col lg:grid lg:grid-cols-1 gap-6">
					{longReviews.map((review, index) => (
						index < 6 && (
							<div key={index} className="bg-white p-4 mr-0 lg:mr-4 flex flex-col rounded-xl">
								<div className="flex flex-col">
									<p className=" basis-3/4 font-garet text-base lg:text-xl 2xl:text-2xl">"{review.text}"</p>
									<p className="mt-2 text-end italic"> - {review.name}</p>
								</div>
							</div>
						)
					))}
				</div>

				<div className="flex flex-col lg:grid lg:grid-cols-1 gap-6">
					{longReviews.map((review, index) => (
						index >= 6 && (
							<div key={index} className="bg-white p-4 ml-0 lg:ml-4 flex flex-col rounded-xl">
								<div className="flex flex-col">
									<p className="basis-3/4 font-garet text-base lg:text-xl 2xl:text-2xl">"{review.text}"</p>
									<p className="mt-2 text-end italic"> - {review.name}</p>
								</div>
							</div>
						)
					))}
				</div>

			</div>

		</div>
	</>
	)
}