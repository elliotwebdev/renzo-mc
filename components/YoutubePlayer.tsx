'use client'
import { useState, useEffect, useCallback, useRef} from "react";
import { Disclosure } from '@headlessui/react'


interface IProps {
  videoId: string;
  autoPlay?: boolean;
}

const VideoIframe: React.FC<IProps> = (props) => {
  const { videoId, autoPlay } = props;
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=1" : ""
  }`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const defaultHeight = 320;
  const [windowWidth, setWindowWidth] = useState<number | 1000>(1000);
  const [videoHeight, setVideoHeight] = useState<number>(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );
  const handleChangeVideoWidth = useCallback(() => {
	const ratio =
	  windowWidth > 990
	    ? 1.0
	    : windowWidth > 522
	    ? 1.2
	    : windowWidth > 400
	    ? 1.45
	    : 1.85;
	const height = iframeRef.current
	  ? iframeRef.current.offsetWidth * 0.5625
	  : defaultHeight;
	setVideoHeight(Math.floor(height * ratio));
    }, [windowWidth]);
    useEffect(() => {
	// Update the window width when the component mounts
	setWindowWidth(window.innerWidth);
  
	// Listen for window resize events and update the window width
	const handleResize = () => {
	  setWindowWidth(window.innerWidth);
	};
  
	window.addEventListener('resize', handleResize);
  
	return () => {
	  // Cleanup: Remove the resize event listener
	  window.removeEventListener('resize', handleResize);
	};
    }, []);
    useEffect(() => {
	// Update the video height whenever the window width changes
	handleChangeVideoWidth();
    }, [windowWidth, handleChangeVideoWidth]);

  return (
      
      <>
		<div className="w-screen bg-black flex justify-center border-t-2 border-b-2 border-black">	
			<iframe
				ref={iframeRef}
				width={windowWidth > 768 ? '60%' : '100%'}
				height={`${videoHeight}px`}
				src={videoURL}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
            </div>
			
				
      
		{/* Reasons to join */}
		<div className="w-full bg-white h-fit flex flex-col items-center justify-center py-4 font-garet">
			<h2 className="text-center text-black text-xl lg:text-3xl font-garet underline underline-offset-8 uppercase">10 Reasons to Join</h2>
			<div className="w-5/6 flex flex-col lg:flex-row text-base lg:text-lg ">

				{/* 5 Reasons */}
				<div className="w-full lg:w-1/2 space-y-4 rounded-2xl bg-white pt-4 lg:p-4 lg:my-4 tracking-tighter">
					<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
						<span>1. RGSAT Jiu Jitsu is a truly exciting way to get fit.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
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
						<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
						<span>2. RGSAT members are committed to your progress in learning.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
						The folks at RGSAT make our school what it is, and you too will soon be one of us. You'll be 
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
						<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
						<span>3. The renowned RGSAT structure makes your journey in learning smooth & enjoyable.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
						The class structure is the trademark of Renzo Gracie SAT. Classes start on time and adhere to 
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
						<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
						<span>4. RGSAT community will change your life forever.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
						When you join Renzo Gracie SAT, you are not just getting classes. You become part of a community 
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
						<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
						<span>5. You can train all over the world.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
						There are over 100 Renzo Gracie academies worldwide. When you join Renzo Gracie SAT, you are free to train 
						at any location while traveling.
						</Disclosure.Panel>
						</>
					)}
					</Disclosure>
							
				</div>
				{/* 5 Reasons */}
				<div className="w-full lg:w-1/2 space-y-4 rounded-2xl bg-white pt-4 lg:p-4 lg:my-4 tracking-tighter">
				<Disclosure >
					{({ open }) => (
						<>
						<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
						<span>6. RGSAT fighting techniques will be useful outside of the mats, in real-life situations.</span>
						<div>&or;</div>
						</Disclosure.Button>
						<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
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
					<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
					<span>7. RGSAT is a family for the whole family.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
					One of the most unique characteristics about our schools is our family-orientated approach. Renzo Gracie SAT 
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
					<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
					<span>8. You will train in germ-free facilities.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
					Cleanliness is a top priority. Our schools adhere to the strict standard of cleanliness and hygiene set by Renzo 
					Gracie SAT. Our staff cleans the facilities constantly, and all RGSAT uniforms are washed regularly. Our 
					mats are cleaned on a daily basis with a specially designed cleaning agent that neutralizes bacteria, fungus and 
					odors without detriment to the equipment.
					</Disclosure.Panel>
					</>
				)}
				</Disclosure>
				<Disclosure >
				{({ open }) => (
					<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
					<span>9. You won't find a safer environment.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
					Student safety is our instructors' primary goal. Training sessions are supervised at all times, and we have 
					CPR-trained personnel on duty during every class.
					</Disclosure.Panel>
					</>
				)}
				</Disclosure>
				<Disclosure >
				{({ open }) => (
					<>
					<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-button bg-button hover:bg-white hover:ring hover:ring-button">
					<span>10. Our 30 years of experience assure you a link to our art's roots.</span>
					<div>&or;</div>
					</Disclosure.Button>
					<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
					A certified Renzo Gracie SAT black belt instructor is responsible for teaching class & supervises 
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
};

export default VideoIframe;