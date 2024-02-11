'use client'
import Link from "next/link"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function NavMenu() {
	return (
	<>
		<div className="lg:space-x-2 xl:space-x-8 2xl:space-x-16 font-garet text-white text-xs xl:text-base 2xl:text-2xl">
			{/* Home */}
			<Link className="relative inline-block text-left" href="/">
				<button className="inline-flex justify-center w-full p-3   hover:bg-white hover:text-header hover:font-black rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Home</button>
			</Link>

			{/* These buttons are giving me an error, but everything seems to work, will adjust if needed */}

			{/* Programs */}
			<div className="relative inline-block text-left">
				<Menu>
				{({ open }) => (
				<>
					<Menu.Button className="inline-flex justify-center w-full p-3  hover:bg-white hover:text-header hover:font-black rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					Programs &darr;
					</Menu.Button>
					<Transition
					show={open}
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
					>
					<Menu.Items
					static
					className="absolute left-0 w-max mt-2 origin-top-left bg-header divide-y rounded-lg shadow-lg focus:outline-none"
					>
					<div className="px-1 py-1 border border-white rounded-lg">
						<Menu.Item>
						{({ active }) => (
							<Link href="/programs">
								<button
								className={`${
								active ? 'bg-white text-header ' : 'text-white'
								} group flex rounded-md items-center w-full px-2 py-2 `}
								>
								Brazilian Jiu-Jitsu
								</button>
							</Link>
						)}
						</Menu.Item>
						<Menu.Item>
						{({ active }) => (
							<Link href="/programs">
								<button
								className={`${
								active ? 'bg-white text-header ' : 'text-white'
								} group flex rounded-md items-center w-full px-2 py-2 `}
								>
								Kids BJJ
								</button>
							</Link>
						)}
						</Menu.Item>
						<Menu.Item>
						{({ active }) => (
							<Link href="/programs">
								<button
								className={`${
								active ? 'bg-white text-header ' : 'text-white'
								} group flex rounded-md items-center w-full px-2 py-2 `}
								>
								Wrestling
								</button>
							</Link>
						)}
						</Menu.Item>
						<Menu.Item>
						{({ active }) => (
							<Link href="/programs">
								<button
								className={`${
								active ? 'bg-white text-header ' : 'text-white'
								} group flex rounded-md items-center w-full px-2 py-2 `}
								>
								Muay Thai
								</button>
							</Link>
						)}
						</Menu.Item>
						<Menu.Item>
						{({ active }) => (
							<a href="https://renzograciehouston.sites.zenplanner.com/freeTrial.cfm">
								<button
								className={`${
								active ? 'bg-white text-header ' : 'text-white'
								} group flex rounded-md items-center w-full px-2 py-2 `}
								>
								Join a Free Class
								</button>
							</a>
						)}
						</Menu.Item>
						
					</div>
					</Menu.Items>
					</Transition>
				</>
				)}
				</Menu>
   			</div>

			{/* Information */}
			<div className="relative inline-block text-left">
			<Menu>
			{({ open }) => (
			<>
				<Menu.Button className="inline-flex justify-center w-full p-3  hover:bg-white hover:text-header hover:font-black rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
				Information &darr;
				</Menu.Button>
				<Transition
				show={open}
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
				>
				<Menu.Items
				static
				className="absolute left-0 w-max mt-2 origin-top-left bg-header divide-x rounded-lg shadow-lg focus:outline-none"
				>
				<div className="px-1 py-1 border border-white rounded-lg">
					<Menu.Item>
					{({ active }) => (
						<Link href="/about">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							About Us
							</button>
						</Link>
					)}
					</Menu.Item>
					<Menu.Item>
					{({ active }) => (
						<Link href="/about/#coaches">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							Coaches
							</button>
						</Link>
					)}
					</Menu.Item>
					<Menu.Item>
					{({ active }) => (
						<Link href="/media">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							Media
							</button>
						</Link>
					)}
					</Menu.Item>
					<Menu.Item>
					{({ active }) => (
						<Link href="/testimonials">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							Testimonials
							</button>
						</Link>
					)}
					</Menu.Item>
					<Menu.Item>
					{({ active }) => (
						<Link href="/faq">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							FAQ
							</button>
						</Link>
					)}
					</Menu.Item>
					<Menu.Item>
					{({ active }) => (
						<Link href="/schedule">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							Class Schedule
							</button>
						</Link>
					)}
					</Menu.Item>
					<Menu.Item>
					{({ active }) => (
						<Link href="/contact">
							<button
							className={`${
							active ? 'bg-white text-header ' : 'text-white'
							} group flex rounded-md items-center w-full px-2 py-2 `}
							>
							Contact Us
							</button>
						</Link>
					)}
					</Menu.Item>
					
				</div>
				</Menu.Items>
				</Transition>
				</>
				)}
				</Menu>
			</div>

			{/* Affiliate Academies */}
			<Link className="relative inline-block text-left" href="/affiliate-academies">
				<button className="inline-flex justify-center w-full p-3   hover:bg-white hover:text-header hover:font-black rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Texas Affiliate Academies</button>
			</Link>

			{/* Shop */}
			<a className="relative inline-block text-left" href="https://renzograciehouston.sites.zenplanner.com/retail.cfm">
				<button className="inline-flex justify-center w-full p-3   hover:bg-white hover:text-header hover:font-black rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">Shop</button>
			</a>
			
		</div>
	</>
	)
}