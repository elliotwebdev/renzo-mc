import Image from 'next/image'
import AboutUsImg from './images/AboutUsImg.jpg'
import CoachImage1 from './images/coach1.jpg'
import { bios } from "./bios"
export default function Page() {
	return (
		<>
			{/*Main Content */}
			<div className=" bg-white flex flex-col items-center justify-center ">

				{/* Page Header */}
				<div className="w-full bg-white h-16  flex flex-col items-center justify-center ">
					<div className="flex flex-row justify-center">
						<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>About Us</h2>
						<div className='h-1 w-11/12 absolute bg-black translate-y-4 '></div>
					</div>
				</div>

				<div className="relative w-full md:h-full min-h-[400px] max-h-[1280px] overflow-hidden">
					<Image
						src={AboutUsImg}
						alt="About Us Image"
						placeholder = 'blur'
						blurDataURL="data:image/png;base64,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"
						quality={100}
						priority={true}
						className="w-full saturate-125 h-full object-cover"
						/>

						<div className='sm:absolute sm:top-0 sm:m-0 bg-black/10 flex flex-col w-full h-full items-center justify-center md:justify-end'> 
							<div className='w-full h-full sm:pb-4 xl:px-36 xl:pb-10 bg-white sm:bg-transparent bg-gradient-to-b sm:from-black/60 md:from-transparent sm:to-black/80 md:to-black/80 from-40% to-90% flex flex-col justify-center md:justify-end items-center'>
								<div className='mb-0 md:m-5 lg:mb-5 pl-0 py-5 sm:py-0 sm:pl-2 md:pl-8 w-5/6 md:max-w-[700px] lg:max-w-[850px] 2xl:w-2/3 text-center md:text-left xl:font-bold font-garet text-base lg:text-lg xl:text-xl sm:border-2 sm:border-t-0 sm:border-r-0 sm:border-b-0 border-button md:backdrop-blur-sm text-black sm:text-white'>
									<p className='leading-6 xl:leading-8'>
									We are a Houston based academy, dedicated to helping individuals unlock their potential through Jiu-Jitsu. Whether you're a beginner or a seasoned martial artist, our academy is committed to helping you improve your skills and reach your goals.
									</p>
									<br></br>
									<p className='leading-6 xl:leading-8'>
									At Renzo Gracie Houston, we believe in the power of Jiu Jitsu to transform lives. We are passionate about martial arts and dedicated to providing a fun, sustainable training environment for our students. Our coaches are not just instructors, but lifelong students of Jiu Jitsu, constantly learning and evolving to provide the best training possible.
									</p>
								</div>
							</div>
						</div>
					
				</div>
			
				{/* <div id="coaches" className="w-full bg-white h-16  flex flex-col items-center justify-center target-element ">
					<div className="flex flex-row justify-center">
						<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>Academy Coaches</h2>
						<div className='h-1 w-11/12 absolute bg-black translate-y-4 '></div>
					</div>
				</div>

				<div className='text-black text-center md:text-left w-5/6 md:w-4/6 2xl:w-4/6 py-10 text-base lg:text-lg xl:text-xl font-garet'>
				Renzo Gracie SAT Academy is led by a team of highly experienced coaches who are passionate about Jiu Jitsu. They are dedicated to teaching, guiding, and inspiring our students. Our coaches are not just instructors, they are mentors committed to helping our students reach their full potential.
				</div>

				<div className="flex align-center flex-col lg:grid lg:grid-cols-2 gap-4 w-full lg:w-11/12 2xl:w-5/6 text-black font-garet h-fit mb-12">
				{bios.map((bio, index) => (
					<div className="col-1" key={index}>
						<div  className="bg-white p-4 rounded-lg shadow-md text-center h-fit flex flex-col justify-center items-center contrast-125">
							<Image
								src={CoachImage1}
								alt={bio.name}
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								style={{
									width:"100%",
									height:"100%",
									objectFit: 'cover',
									
								}}
								/>
				
								<div className="flex flex-col w-full mt-4 text-left">

									<p className='text-3xl'>
										{bio.name}
									</p>
									<p className='text-xl'>
										{bio.position}
									</p>
								</div>
						
							
						</div>
						<div className="flex flex-col px-4">
						
							<div className="flex flex-col w-full mt-4 space-y-2 text-left">
								<p className='text-base'>
									{bio.bio}
								</p>

								{bio.list.map((item, itemIndex) => (
									<li key={itemIndex} className="list-desc list-inside">
										{item}
									</li>
								))}
								
							</div>
						</div>
					</div>
					))}
				</div> */}
			</div>

		</>
		)
}
