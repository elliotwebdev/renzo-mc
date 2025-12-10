import Image from 'next/image'
import Link from "next/link"
import HeroImage from '@/public/images/hero.jpg'
import ProgramsImage from '@/public/images/programs.jpg'
import AboutUsImage from '@/public/images/aboutus.jpg'
import ScheduleImage from '@/public/images/RGMC.jpg'
import FreeTrialImage from '@/public/images/freetrial.png'
import MediaImage from '@/public/images/media.jpg'
import TestimonialsImage from '@/public/images/testimonials.jpg'
import ContactImage from '@/public/images/contact.jpg'
import ShopImage from '@/public/images/shop.jpg'
import LocationLogo from '@/public/svg/location-logo.svg'
import Button from '@/public/svg/button.svg'
import Gi from '@/public/svg/gi.svg'
import Medal from '@/public/svg/medal.svg'
import MMA from '@/public/svg/mma.svg'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'

// 'use client'
// import  { useEffect } from 'react';
// import Image from 'next/image'
// import Preview from '@/public/images/preview.png'
// import Banner from '@/public/images/banner.png'
// import MessageForm from "./contact/MessageForm"

// export default function Page() {
// 	useEffect(() => {
// 		// Set the date we're counting down to
// 		var countDownDate = new Date("Feb 28, 2025 23:59:00").getTime();

// 		// Update the count down every 1 second
// 		var x = setInterval(function() {
// 			// Get today's date and time
// 			var now = new Date().getTime();
			
// 			// Find the distance between now and the count down date
// 			var distance = countDownDate - now;
			
// 			// Time calculations for days, hours, minutes and seconds
// 			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
// 			// Output the result in an element with id="demo"
// 			var demoElement = document.getElementById("demo");
// 			var dayElement = document.getElementById("day");
// 			var hourElement = document.getElementById("hour");
// 			var minElement = document.getElementById("min");
// 			var secElement = document.getElementById("sec");
// 			if (dayElement && hourElement && minElement && secElement) {
// 				dayElement.innerHTML = days + "";
// 				hourElement.innerHTML = hours + "";
// 				minElement.innerHTML = minutes + "";
// 				secElement.innerHTML = seconds + "";
// 			}
			
// 			// If the count down is over, write some text 
// 			if (distance < 0) {
// 				clearInterval(x);
// 				if (demoElement) {
// 					demoElement.innerHTML = "EXPIRED";
// 				}
// 			}
// 		}, 1000);

// 		// Clean up the interval when the component unmounts
// 		return () => clearInterval(x);
// 	}, []); // Empty dependency array means this effect runs once after the initial render

// 	return (
// 		<>	
// 			<div className="flex justify-center bg-black" >
// 				<Image
// 				className='saturate-125 rounded-lg'
// 				src={Preview}
// 				alt="Preview Image"
// 				placeholder = 'blur'
// 				blurDataURL="data:image/png;base64,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"
// 				quality={100}
// 				priority={true}
// 				style={{
// 					objectFit: 'cover',
					
// 				}}
// 				/>	
// 			</div>
// 			<div className="flex flex-col justify-around text-center bg-black font-garet text-white pt-8 space-y-2">
// 				<p className='text-base lg:text-xl px-2'>Subscribe for an exclusive </p>
// 				<h2 className='uppercase text-xl lg:text-4xl tracking-tighter font-bold text-orange-500'>founder's rate </h2>
				
// 				<p className='text-base lg:text-xl px-1'>Or call us at (281) 652-7961 for more information!</p>
// 				<h2 className='uppercase text-2xl lg:text-6xl tracking-tighter font-bold bg-orange-500 py-2'>Deal Ends February 28th, 2025</h2>
// 			</div>
// 			<div className="flex flex-col justify-around text-center bg-black font-garet text-white space-y-2">
// 				<h2 className='uppercase text-2xl lg:text-3xl tracking-tighter font-bold bg-orange-500 py-2'>More Information to Follow</h2>
// 			</div>
// 			<div id="demo" className="flex justify-around text-center bg-black py-6 font-garet text-white">
// 				<div className="flex flex-col">
// 					<p id="day" className='flex flex-col text-3xl lg:text-6xl'>0</p>
// 					<p className='text-lg lg:text-2xl'>DAYS</p>
// 				</div>
// 				<div className="flex flex-col">
// 					<p id="hour" className='flex flex-col text-3xl lg:text-6xl'>0</p>
// 					<p className='text-lg lg:text-2xl'>HOURS</p>
// 				</div>
// 				<div className="flex flex-col">
// 					<p id="min" className='flex flex-col text-3xl lg:text-6xl'>0</p>
// 					<p className='text-lg lg:text-2xl'>MINUTES</p>
// 				</div>
// 				<div className="flex flex-col">
// 					<p id="sec" className='flex flex-col text-3xl lg:text-6xl'>0</p>
// 					<p className='text-lg lg:text-2xl'>SECONDS</p>
// 				</div>
				
// 			</div>
			
// 			{/* <div className="lg:px-60 flex flex-col justify-center w-full bg-white"> 
// 				<MessageForm />
// 			</div> */}

// 			<div className="bg-black text-white flex justify-center ">

// 				<div id="schedule" className="flex flex-col rounded-sm text-center items-center h-fit w-full py-12 bg-black">
// 					<button className="block cursor-pointer bg-header hover:scale-110 duration-150 rounded-xl" aria-label='Enroll Here!'>
// 						<a
// 						className="relative inline-block text-left text-white uppercase bg-main text-4xl font-medium p-2 rounded-md "
// 						href="https://renzograciemissouricity.kicksite.net/bizbuilders/landing_pages/eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoibGRwZ18yMDc2NSJ9.K_fHkOoBkMWHNwSCiL9CimfukxJofIj7rePv5D2ZYdk"
						
// 						>
// 						Click Here to Enroll!
// 						</a>
// 					</button>
// 				</div>

// 			</div>

// 			<div>
// 			<Image
// 				className=''
// 				src={Banner}
// 				alt="Banner Image"
// 				placeholder = 'blur'
// 				blurDataURL="data:image/png;base64,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"
// 				quality={100}
// 				priority={true}
// 				style={{
// 					objectFit: 'cover',
					
// 				}}
// 				/>	
// 			</div>
// 		</>
// 	);
// }


export default function Page() {
	return (
		<>
			{/* Hero */}
			<div className="relative w-full">
				<Image
				className='saturate-125'
				src={HeroImage}
				alt="Hero Image"
				placeholder = 'blur'
				blurDataURL="data:image/png;base64,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"
				quality={100}
				priority={true}
				style={{
					width:"100%",
					height:"auto",
					objectFit: 'cover',
					
				}}
				/>	
				{/* Desktop Hero */}
				<div className="pl-2 lg:pl-12 max-w-xl lg:py-8 2xl:py-12 absolute top-0 lg:space-y-2 xl:space-y-8 2xl:space-y-24 text-white bg-gradient-to-r from-black/100 lg:h-full">
					<h1 className="font-arialBlack text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl tracking-tight leading-hero max-w-xs lg:max-w-xl ">Renzo Gracie Missouri City</h1>
					<div className="hidden lg:block max-w-sm 2xl:max-w-lg text-base lg:text-lg 2xl:text-4xl space-y-2 2xl:space-y-8">
						<p className="font-garet">Brazilian Jiu-Jitsu, community, and more in Missouri City.</p> 
						<p className="font-garet lg:text-base 2xl:text-2xl">“We are not in the business of martial arts. We are in the business of building confidence. Confidence not only to defend yourself—we help build the confidence required to face life.”</p> 
						<p className="italic font-garet lg:text-base 2xl:text-2xl">- Master Renzo Gracie</p>
						
					</div>
					<div className="hidden lg:flex lg:flex-col space-y-6 text-lg xl:text-2xl 2xl:text-3xl">
						<a href="https://api.bjjlink.com/pub/664760798b06364ceffb751e">
							<button className="bg-button text-white rounded-lg font-garet ring ring-button grow w-full py-1 hover:scale-110 duration-150">Join a Class</button>
						</a>
						<Link href="/programs">
							<button className="bg-none h-fit text-button rounded-lg ring ring-button font-garet grow w-full py-1 hover:scale-110 duration-150 bg-white">View Programs</button>
						</Link>
					</div>
				</div>
				{/* Mobile Hero */}
				<div className="block lg:hidden h-auto py-4 px-6 bg-white text-black">
					<p className="font-garet text-xl">Brazilian Jiu-Jitsu, community, and more in Missouri City.</p> 
					<p className="font-garet text-base pt-2">We are not in the business of martial arts. We are in the business of building confidence. Confidence not only to defend yourself—we help build the confidence required to face life.</p> 
					<p className="italic font-garet text-base">- Master Renzo Gracie</p>
					<div className="flex flex-col items-center w-full pt-6 space-y-6">
						<a href="https://api.bjjlink.com/pub/664760798b06364ceffb751e">
							<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-80 hover:scale-110 duration-150">Join a Class</button>
						</a>
						<Link href="/programs">
							<button className="bg-none text-lg text-button rounded-lg ring ring-button font-garet grow h-10 w-80 hover:scale-110 duration-150">View Programs</button>
						</Link>
					</div>
				</div>
			</div>

			{/*Main Content */}
			<div className=" bg-white flex flex-col items-center justify-center ">

				{/* Section Break */}
				<div className="w-full bg-white h-fit -translate-y-0 lg:-translate-y-6 grid grid-cols-1 lg:grid-cols-2 gap-6 px-12 lg:px-40 py-6 lg:py-4 text-xl text-black">
					<div className="grid grid-rows-8 grow-0">
						<div className="flex flex-col items-center justify-between">
							<Gi  className="w-24 h-24 pb-4"/>
							<h4 className="row-span-1 text-center font-arialBlack text-black">
								Brazilian Jiu-Jitsu
							</h4>
							<p className="hidden lg:block row-span-2 text-sm 2xl:text-xl text-center font-garet">
								Offering training for the beginner and the experienced adult. Our fundamental training will have you working hard while learning the basics of Jiu Jitsu.
							</p>
							<p className="block lg:hidden row-span-2 text-sm text-center font-garet">
								Learn the fundamentals and train with experts.
							</p>
							<Link className="hidden lg:block" href="/programs">
								<div className="row-span-1 flex justify-center gap-1 hover:scale-110 duration-150">
									<p className="text-sm 2xl:text-base text-black font-arialBlack">Read More</p>
									<Button className="h-5 w-5 " />
								</div>
							</Link>
						</div>
					</div>
					<div className="grid grid-rows-8 grow-0">
						<div className="flex flex-col items-center justify-between">
							<Medal  className="w-24 h-24 pb-4"/>
							<h4 className="row-span-1 text-center text-black font-arialBlack">
								Kids BJJ
							</h4>
							<p className="hidden lg:block row-span-2 text-sm 2xl:text-xl text-center font-garet">
								We provide an environment that allows children 4-15 to experience and understand core values like focus, discipline, persistence, cooperation and respect.
							</p>
							<p className="block lg:hidden row-span-2 text-sm text-center font-garet">
								Classes for kids of all ages and skill levels.
							</p>
							<Link className="hidden lg:block" href="/programs">
								<div className="row-span-1 flex justify-center gap-1 hover:scale-110 duration-150">
									<p className="text-sm 2xl:text-base text-black font-arialBlack">Read More</p>
									<Button className="h-5 w-5" />
								</div>
							</Link>
						</div>
					</div>
				</div>

				{/* Menu Grid */}
				<div className="flex flex-col lg:grid lg:grid-cols-3 py-6 gap-6 w-2/3 lg:w-5/6 2xl:w-3/4">
					
					{/* Row 1 */}
					<Link className="col-span-1" href="/programs">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover saturate-125'
								src={ProgramsImage}
								alt="Programs Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Programs</h2>
						</div>
					</Link>
					<Link className="col-span-1" href="/about">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover saturate-125'
								src={AboutUsImage}
								alt="About Us Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>About Us</h2>
						</div>
					</Link>
					<Link className="col-span-1" href="/schedule">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover'
								src={ScheduleImage}
								alt="Schedule Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Class Schedule</h2>
						</div>
					</Link>
					<a className="col-span-1" href="https://api.bjjlink.com/pub/664760798b06364ceffb751e">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover'
								src={FreeTrialImage}
								alt="Free Trial Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Free Trial</h2>
						</div>
					</a>
					{/* Row 2 */}
					{/* <Link className="col-span-1" href="/media">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover saturate-125'
								src={MediaImage}
								alt="Media Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAEwAAAAC5Pc2mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMjA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE5NDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgra0LUTAAAEPklEQVRIDW3W2U5WSxAF4AJ+FFBRlEEGISqgEIx4Q7iB8Aw80XkOEl4Dn8CBK7hQgtHIoAgqKIPKpKBfaRtMTieb3ru7q9aqVVX9U3Xz5s3Tqqqq8FRXV8fJyUmcO3cuent74+LFi/l+/vz5OD09jYaGhvh1Pr58+RKPHj2KV69exZ07d+LWrVtRX18fT58+jdnZ2WhsbIxPnz4Fu0qlknNtbW3U1NQkxtevX2N0dDRu374dFYuFQJkR8W6Yj46O4vLlywn0/v37mJ+fT4BLly7F4uJiAiL94cOH6OzsTBvf379/z3dBra2tZTDIISMg69UF1Ay4gDtgzey5fv16bGxsxNTUVGxubqY6yNt78uRJvHjxIhWiEsf2RI/4yMhIDAwMZCDNzc1p60xiZph/Ii3vZo4dOj4+TuPDw8N4+PBhTExMJJA0GAVIhJT6/PlzPisrK/H27dtoa2vLyEXd3d0dFy5cSLsSeKW8WPV+dnB448aNXJJvZJaXlzOnFhGUe6qtr69HT09Ppknu9/f34/Hjx7G1tZXys+/o6IgfP378TQv7CkeFRCFgLqkQoYeh/JMUKHmpog7GxsZifHw8rl27lgQ5JrW0PXv2LH01NTVljVCAbUltNQJnRyGhgBxSzeQjJWNFppAQIjcCra2t0d7enueRPTg4yJp4/vx5DA0NJZlv374lcf7sw+G/5hfT/3wUYJFzLscO+wa6urqaKUB2b28vSZVInNMN0qV1OSa9NPCLJD/aj42npaUlrl69+jsFnBYSjEUM1Cxqknrq6uqykF6+fJkk1QNQaokckDqh1ps3b/4qopaopjX5v3LlSmxvb8fr168jU1Ci/7+ZY+BkE5EI+/v7kzBCAKVgYWEhFdOGOzs78fHjx5RelBTSwsDZ8OOcGvmnBhxAQkS7u7spNUfWGVBE4XHqFlNY7gTP5ORkFqh9ttqSetLlG1FF7LLSotLMb3ZBAZYKAwmRWxcdR0Veva3CXdUifffuXfT19WU0uqMQ1y0Aqee9AAoOcd9UTQK/Yf/9W4rR5SFyFY+9ykbm7t27cf/+/XRU2hK43JIceT6QpIphzV2hCAWZBWmxbJoZlRuNbA6qXuCASQpQZOrBDxGVgMzMzOSeb0qxFyXFSmoEw5YS2RUIACmzDYWiQPQullpSdGSzr6A4YaOizWrFGeSBOsMemXv37iUZhcrOKF2TV3Gu/PqDCNYi1UqiBYoAUtZFA5BSnLl2l5aWYnp6OgYHBzNdWlDdIEctpMzs+WfPFomKiMoo8msTuXOQdPJKOuBFBcAccyQVAPS5M34ZkXc1K0SK6Bp+1ZJz1mBXtNDZUfIG3AFXLHmdY2wNKIWQcsEg7uIqqrjl2FFUyxay9ru6utLOHj8VLWKDM/nGLqvzz3tJQflHAlnn5+bm4sGDB0kIseHh4YxQnv3qFWWBlBpj5z4p34L8CUUAF6IIIlyCAAAAAElFTkSuQmCC"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Media</h2>
						</div>
					</Link> */}
					<Link className="col-span-1" href="/testimonials">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover saturate-125'
								src={TestimonialsImage}
								alt="Testimonials Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Testimonials</h2>
						</div>
					</Link>
					{/* <Link className="col-span-1" href="/contact">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover'
								src={ContactImage}
								alt="Contact Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Contact</h2>
						</div>
					</Link> */}
					<Link className="col-span-1" href="https://shop.renzograciehouston.com">	
						<div className="card ease-in-out duration-500 h-64 lg:h-72 2xl:h-96 bg-white hover:bg-header text-black hover:text-white outline outline-1 outline-black rounded-md flex flex-col justify-between">
							<Image
								className='h-5/6 rounded-md object-cover saturate-125'
								src={ShopImage}
								alt="Shop Image"
								placeholder = 'blur'
								blurDataURL="data:image/png;base64,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"
								quality={100}
								
								
							/>
							<h2 className='font-garet uppercase text-2xl 2xl:text-3xl  ml-2'>Shop</h2>
						</div>
					</Link>
				</div>
				{/* <div className="py-16 flex justify-center">
					<LocationLogo className=""/>
				</div> */}

				{/* Testimonial Header */}
				<div className="w-full mb-4 h-fit flex flex-row justify-center">
					<h2 className='font-arialBlack w-auto px-4 text-center bg-white text-xl lg:text-5xl 2xl:text-6xl text-black z-10'>What Our Students Say</h2>
					<div className='h-1 w-11/12 absolute bg-black  translate-y-3 lg:translate-y-5'></div>
				</div>

				{/* Section Break */}
				<TestimonialsCarousel />
	
			</div>
		
		</>
		)
}