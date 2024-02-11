'use client'
import { SetStateAction, useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react'
import YouTube from 'react-youtube';

export default function YTPlayer() {
  const [player, setPlayer] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // State for hover
  const [isButtonVisible, setIsButtonVisible] = useState(true); // State for button visibility
  const [isGrayscale, setIsGrayscale] = useState(true); // State for grayscale effect
  const [windowWidth, setWindowWidth] = useState (320);
  const [videoOptions, setVideoOptions] = useState({});
  const videoId = 'xD-JP8Xokhw'
  const onReady = (event: { target: SetStateAction<null>; }) => {
	if (event && event.target && typeof event.target !== 'undefined') {
	  setPlayer(event.target);
	}
    };
    //   const [videoOptions, setVideoOptions] = useState({
// 	width: windowWidth >= 960 ? 960 : 320,
// 	height:windowWidth >= 960 ? 540 : 180,
//    	playerVars: {
// 	autoplay: 1,
// 	controls: 0,
// 	showinfo: 0,
// 	loop: 1,
// 	mute: 1,
// 	playlist: [videoId]
//     },
//   });

//   const generateNewOptions = () => {
//     const newOptions = {
// 	//Controls given
// 	width: windowWidth >= 960 ? 960 : 320,
// 	height:windowWidth >= 960 ? 540 : 180,
// 	playerVars: {
// 	autoplay: 1,
// 	controls: 1, 
// 	showinfo: 0,
// 	loop: 1,
// 	mute: 0,
// 	color: 'white',
// 	playlist: [videoId]
// 	},
//     };
//     setVideoOptions(newOptions);
//     setIsButtonVisible(false); // Hide the button when clicked
//     setIsGrayscale(false); // Remove the grayscale effect when clicked
//   };

  

  return (
	<>
		{/* Youtube Video */}
		<div className={`relative flex flex-col items-center justify-center w-full h-full bg-black ${isGrayscale ? 'grayscale' : ''}`}>
			<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			>
				<YouTube videoId={videoId} opts={videoOptions} onReady={onReady} />
				{isHovered && isButtonVisible && (
					<button
					// onClick={generateNewOptions}
					className="bg-white xl:text-xl text-section rounded-lg font-garet ring ring-button w-56 hover:scale-110 duration-150 absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-80 hover:opacity-100 transition-opacity"
					>
					Watch with Sound
					</button>
				)}
			</div>
			<div className="lg:hidden">
			{isButtonVisible && (<button
					// onClick={generateNewOptions}
					className="bg-white xl:text-xl text-section rounded-lg font-garet ring ring-button w-56 hover:scale-110 duration-150 absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-80 hover:opacity-100 transition-opacity"
					>
					Watch with Sound
					</button>
			)}
			</div>
		</div>

		{/* Reasons to join */}
		<div className="w-full bg-section h-fit flex flex-col items-center justify-center border-t-2 border-b-2 border-black py-4 font-garet">
			<h2 className="text-center text-white text-xl lg:text-3xl font-garet underline underline-offset-8 uppercase">10 Reasons to Join</h2>
			<div className="w-5/6 flex flex-col lg:flex-row text-base lg:text-lg ">

				{/* 5 Reasons */}
				<div className="w-full lg:w-1/2 space-y-4 rounded-2xl bg-section pt-4 lg:p-4 lg:my-4 tracking-tighter">
					<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
						<span>1. RGH Jiu Jitsu is a truly exciting way to get fit.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-white ">
						Brazilian Jiu-Jitsu is often likened to a game of human chess. If you don't like to work out at a 
						gym because you get bored, you're not alone. Many of our students were tired of going to the gym, 
						and they couldn't find new songs or audio books to entertain them on the treadmill. They found BJJ 
						to be the perfect workout because it requires a high level of concentration proportional to the 
						amount of calories burned and pounds lost. What's more, you'll still learn to defend yourself. 
						It's a win-win situation.
						</Disclosure.Panel>
						</>
					)}
					</Disclosure>
					<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
						<span>2. RGH members are committed to your progress in learning.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
						The folks at RGH make our school what it is, and you too will soon be one of us. You'll be 
						impressed by how committed each and every team member is to your learning. The instructors, staff 
						and other students make our environment friendly yet demanding and challenging, which stimulates 
						all of us to achieve our best.
						</Disclosure.Panel>
						</>
					)}
					</Disclosure>
					<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
						<span>3. The renowned RGH structure makes your journey in learning smooth & enjoyable.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
						The class structure is the trademark of Renzo Gracie Houston. Classes start on time and adhere to 
						a standardized curriculum and class structure. As a student, you know up front what is expected of 
						you and have a clear understanding of what to expect from your instructors and training partners. 
						The consistency of this structure combined with the creativity and innovation of our devoted instructors 
						blend perfectly to facilitate your progress.
						</Disclosure.Panel>
						</>
					)}
					</Disclosure>
					<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
						<span>4. RGH community will change your life forever.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
						When you join Renzo Gracie Houston, you are not just getting classes. You become part of a community 
						united by the ideals of the Brazilian Jiu-Jitsu lifestyle. Special classes and side events coupled with 
						ordinary classes create a fun and exciting calendar of activities that you and your family will love to 
						take part in.
						</Disclosure.Panel>
						</>
					)}
					</Disclosure>
					<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
						<span>5. You can train all over the world.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
						There are over 100 Renzo Gracie academies worldwide. When you join Renzo Gracie Houston, you are free to train 
						at any location while traveling.
						</Disclosure.Panel>
						</>
					)}
					</Disclosure>
							
				</div>
				{/* 5 Reasons */}
				<div className="w-full lg:w-1/2 space-y-4 rounded-2xl bg-section pt-4 lg:p-4 lg:my-4 tracking-tighter">
				<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
						<span>6. RGH fighting techniques will be useful outside of the mats, in real-life situations.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
						You don't come to class just to learn how to fight. You also work hard toward mastering the underlying 
						principles that allow you to succeed on the mats. When applied to your life off the mats, these 
						principles can bring more balance to your routine and help you reach your true potential.
						</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				
				<Disclosure >
				{({ open }) => (
					<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
					<span>7. RGH is a family for the whole family.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
					One of the most unique characteristics about our schools is our family-orientated approach. Renzo Gracie Houston 
					is proud to be a powerhouse with the most stalwart champions of world Jiu-Jitsu while still maintaining a training 
					environment that is welcoming for the whole family: husband, wife and kids. AtRenzo Gracie Riverstone, families 
					find marvelous activities through which to spend quality time together.
					</Disclosure.Panel>
					</>
				)}
				</Disclosure>
				<Disclosure >
				{({ open }) => (
					<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
					<span>8. You will train in germ-free facilities.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
					Cleanliness is a top priority. Our schools adhere to the strict standard of cleanliness and hygiene set by Renzo 
					Gracie Houston. Our staff cleans the facilities constantly, and all RGH uniforms are washed regularly. Our 
					mats are cleaned on a daily basis with a specially designed cleaning agent that neutralizes bacteria, fungus and 
					odors without detriment to the equipment.
					</Disclosure.Panel>
					</>
				)}
				</Disclosure>
				<Disclosure >
				{({ open }) => (
					<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
					<span>9. You won't find a safer environment.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
					Student safety is our instructors' primary goal. Training sessions are supervised at all times, and we have 
					CPR-trained personnel on duty during every class.
					</Disclosure.Panel>
					</>
				)}
				</Disclosure>
				<Disclosure >
				{({ open }) => (
					<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left  font-medium text-section hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-header focus-visible:ring-opacity-75">
					<span>10. Our 30 years of experience assure you a link to our art's roots.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-white">
					A certified Renzo Gracie Houston black belt instructor is responsible for teaching class & supervises 
					each school. Our team of instructors was trained in the teaching philosophy and methods of Master Carlos 
					Gracie Jr., the founder of Gracie Barra. A legacy of over 30 years of teaching experience is at your service, 
					so you don't have to worry. You and your family are in great hands.
					</Disclosure.Panel>
					</>
				)}
				</Disclosure>
				</div>
			</div>
		</div>
	</>
	
    );
  }
  //   useEffect(() => {
// 	setWindowWidth(window.innerWidth);
// 	const handleResize = () => {
// 	  setWindowWidth(window.innerWidth);
// 	}
	
// 	window.addEventListener("resize", handleResize);
// 	return () => {
// 	  window.removeEventListener("resize", handleResize);
// 	};
//     }, []);
//   const [videoOptions, setVideoOptions] = useState({
// 	width: windowWidth >= 960 ? 960 : 320,
// 	height:windowWidth >= 960 ? 540 : 180,
//    	playerVars: {
// 	autoplay: 1,
// 	controls: 0,
// 	showinfo: 0,
// 	loop: 1,
// 	mute: 1,
// 	playlist: [videoId]
//     },
//   });

//   const generateNewOptions = () => {
//     const newOptions = {
// 	//Controls given
// 	width: windowWidth >= 960 ? 960 : 320,
// 	height:windowWidth >= 960 ? 540 : 180,
// 	playerVars: {
// 	autoplay: 1,
// 	controls: 1, 
// 	showinfo: 0,
// 	loop: 1,
// 	mute: 0,
// 	color: 'white',
// 	playlist: [videoId]
// 	},
//     };
//     setVideoOptions(newOptions);
//     setIsButtonVisible(false); // Hide the button when clicked
//     setIsGrayscale(false); // Remove the grayscale effect when clicked
//   };

