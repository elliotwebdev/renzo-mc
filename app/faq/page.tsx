'use client'
import Link from "next/link"
import { Disclosure } from '@headlessui/react'

export default function Page() {
	
	return (
		<>
			{/*Main Content */}
			<div className=" bg-white flex flex-col items-center justify-center space-y-6">

				{/* Page Header */}
				<div className="w-full bg-white h-16  flex flex-col items-center justify-center ">
					<div className="flex flex-row justify-center">
						<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>FAQ</h2>
						<div className='h-1 w-11/12 absolute bg-header translate-y-4 '></div>
					</div>
				</div>

				<div className="w-5/6 flex flex-col lg:flex-row font-garet text-base lg:text-lg space-y-4 lg:space-x-12">
					{/* FAQ */}
					<div className=" w-full space-y-4 rounded-2xl bg-white tracking-tighter">
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>Do you allow drop-ins?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
							We allow drop-ins only for BJJ. A visitor day pass is $20 which allows you to train in as many 
							classes as your schedule allows. If you're from a Renzo Gracie affiliate school, a day pass is 
							FREE. (Must bring visitor card)
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>I'm not a member. As a visitor, may I wear my own Gi?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
							Absolutely! We welcome all affiliates and levels of students. 
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>I do not have a Gi. Can I still attend a class?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
							Absolutely! If you forget your Gi or need to borrow one, they can be rented for $10.
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>What other gym items should I bring?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
								<ul className="list-disc">
									<li>Bring a bottle of water and a towel if you would like to shower.</li>
									<li>Bring a pair of flip flops to get from the changing room to the mats and around the gym.</li>
									<li>Safety is always encouraged, we also sell mouth guards if preferred.</li>
								</ul>
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>How many classes am I allowed to take per month?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
							Our membership is unlimited so for one set price, you'll be allowed to take as many classes as your schedule permits.
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						
					</div>
					{/* FAQ 2*/}
					<div className=" w-full space-y-4 rounded-2xl bg-white tracking-tighter">
					<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>What are the general benefits for a membership?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
								<ul className="list-disc">
									<li>No long-term contracts! </li>
									<li>Month to month ongoing payments. </li>
									<li>Option to freeze membership if you're out of town.</li>
									<li>If you need to cancel, just give us a 60-day notice.</li>
								</ul>
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>How is your facility and amenities?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
								<ul className="list-disc">
									{/* <li>The Academy has over 2,500 square ft. of training area. It is matted with the latest Zebra mats, 
										and is conveniently located close to 59 and HWY 6. Our facility is climate controlled to maintain 
										a comfortable training environment.</li> */}
									{/* <li>We provide separate men and women changing rooms, each equipped with cubbies and showers 
										(Soap is included in each stall, but please feel free to bring your own toiletries).</li> */}
									<li>We strive in keeping a clean, safe, family-like environment. We are confident that you will enjoy your 
										experience at the Renzo Gracie Houston.</li>
									
								</ul>
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>What can I expect for my first class?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
								<ul className="list-disc">
									<li>We provide you with a Gi and a belt for your first class.</li>
									<li>If you've never done BJJ, we recommend you first come to our fundamental or all levels BJJ class.</li>
									<li>Please arrive 15 mins before class so you have ample time to fill out the waiver and change for class.</li>
								</ul>
								We recommend you sign up for the trial class online to save time.
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>
						<Disclosure >
						{({ open }) => (
							<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left  font-medium text-white hover:text-black bg-header hover:bg-white hover:ring hover:ring-header">
							<span>Can I trial a class before signing up?</span>
							<div>&or;</div>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2  text-black">
							If you're serious about joining our team, we do allow a free trial class. Join up by selecting the button below!
							</Disclosure.Panel>
							</>
						)}
						</Disclosure>

						<div className="flex flex-row justify-center pt-4">
							<a className="justify-center" href="https://renzograciehouston.sites.zenplanner.com/freeTrial.cfm">
								<button className="bg-none text-xl lg:text-2xl 2xl:text-3xl text-button rounded-lg ring ring-button font-garet grow h-10 lg:h-fit w-80 lg:w-72 hover:scale-110 duration-150">Try a Free Class</button>
							</a>
						</div>
						
					</div>
				</div>
				
				<h2 className="text-center text-black text-3xl font-garet underline underline-offset-8 uppercase">Renzo Gracie Houston Academy Etiquette</h2>
				
				<div className="w-5/6 flex flex-col lg:flex-row lg:space-x-12 justify-center font-garet  pb-12">
					{/* Etiquette */}
					<div className="w-full lg:w-1/2 text-black pt-2 lg:p-2">
						<ul className="font-garet space-y-1 list-disc">
							<li>Leave your ego outside and be humble and respectful to others.</li>
							<li>Arrive early for class.</li>
							<li>Sign in for every class.</li>
							<li>Enter and exit the mat with permission from instructors.</li>
							<li>Bow to the center of the mats when entering or exiting the mats.</li>
							<li>Remove shoes prior to stepping on the mats.</li>
							<li>Always wear shoes off the mats.</li>
							<li>Keep quiet while the instructor is teaching.</li>
							<li>No foul language or poor attitudes.</li>
							<li>Personal hygiene is a must. Please bathe and use deodorant to prevent body odor, and keep nails trimmed.</li>
							<li>Students must wear a clean and appropriate uniform for class.</li>
							<li>Students are required to wear a rash-guard underneath their Gi.</li>
							<li>Keep your uniform and equipment clean. (wash after EVERY class)</li>
							<li>Remove all jewelry before class.</li>
							<li>Give higher ranked students preferred space during training.</li>
							<li>Refer to Black Belt Instructors as “Professor”</li>
							<li>Refer to non Black Belt Instructors as “Coaches”</li>
							
						</ul>
					</div>
					{/* Etiquette 2*/}
					<div className="w-full lg:w-1/2 text-black pb-2 lg:p-2">
						<ul className="font-garet space-y-1 list-disc">
							
							<li>Be aware of your surroundings. Maintain a safe environment while training.</li>
							<li>Use proper Tap Out procedures. Remember this is a training session, not a World Championship.</li>
							<li>Open cuts will be covered at all times.</li>
							<li>Show your training partner courtesy during training.</li>
							<li>Mouth guards are encouraged during training.</li>
							<li>If you are sick, stay home.</li>
							<li>You are responsible for your child's behavior if they are not participating in class.</li>
							<li>Respect those you train with and the Instructors. Rank is a symbol of knowledge and wisdom.</li>
							<li>Respect the facility. Pick up after yourself.</li>
							<li>NO COACHING from off the mats. Please be respectful to the instructors.</li>
							<li>What you are taught is for your personal development as a student and citizen, and should be used as a last resort when everything else has failed.</li>
							
						</ul>
					</div>

				</div>
				

			</div>
		</>
		)
}