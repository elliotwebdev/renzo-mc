'use client'
import Link from "next/link";
import { useState } from "react";
import HeaderLogo from '@/public/svg/header-mobile.svg'
import Instagram from '../public/svg/logo-instagram.svg'
import Facebook from '../public/svg/logo-facebook.svg'

export default function NavMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [programsSubMenuOpen, setProgramsSubMenuOpen] = useState(false);
	const [informationSubMenuOpen, setInformationSubMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const toggleProgramsMenu = () => {
		setProgramsSubMenuOpen(!programsSubMenuOpen);
		setInformationSubMenuOpen(false); // Close the other submenu
	};

	const toggleInformationMenu = () => {
		setInformationSubMenuOpen(!informationSubMenuOpen);
		setProgramsSubMenuOpen(false); // Close the other submenu
	};

	return (
		<>
			<header id="MainHeader" className="flex justify-between h-fit 2xl:h-24 bg-header ">
				<div className="flex ml-2 items-center">
					<Link href="/">
						<HeaderLogo className="mb-1" />
					</Link>
				</div>

				{/* Hamburger Icon */}
				<div className="lg:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className="py-4 px-8 text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
					>
						<svg
							className="w-6 h-6 fill-white"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							{menuOpen ? (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18 5H6a1 1 0 01-1-1V4a1 1 0 011-1h12a1 1 0 011 1v19a1 1 0 01-1 1H6a1 1 0 01-1-1v-1a1 1 0 011-1h12a1 1 0 011 1V6a1 1 0 01-1-1zm0 2a1 1 0 00-1 1v14H7V7a1 1 0 00-1-1h12z"
								/>
							) : (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M4 6H20a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
								/>
							)}
						</svg>
					</button>
				</div>
			</header>

			{/* Responsive Navigation Menu */}
			{menuOpen && (
				<div className="flex flex-col text-xl h-screen bg-header text-white">
					<ul className="px-4 font-garet font-thin">
						<Link href="/" onClick={toggleMenu}>
							<li className="py-3 footerText">
								Home
							</li>
						</Link>

						<div className="w-5/6 h-px bg-white"></div>

						<li onClick={toggleProgramsMenu} className="py-3 footerText">Programs
							{programsSubMenuOpen && (
								<ul className="py-1 px-12  relative">
									<div className="absolute left-0 top-0 h-full bg-white w-px"></div>
									<li className="py-2">
										<Link href="/programs/#bjj" onClick={toggleMenu}>Brazilian Jiu-Jitsu</Link>
									</li>
									<li className="py-2">
										<Link href="/programs/#kids-bjj" onClick={toggleMenu}>Kids BJJ</Link>
									</li>
									<li className="py-2">
										<a href="https://bjjlink.com/pub/664760798b06364ceffb751e" onClick={toggleMenu}>Join a Free Class</a>
									</li>
								</ul>
							)}
						</li>

						<div className="w-5/6 h-px bg-white"></div>

						<li onClick={toggleInformationMenu} className="py-3 footerText">Information
							{informationSubMenuOpen && (
								<ul className="py-1 px-12 relative">
									<div className="absolute left-0 top-0 h-full bg-white w-px"></div>
									{/* <li className="py-2">
										<Link href="/about" onClick={toggleMenu}>About Us</Link>
									</li>
									<li className="py-2">
										<Link href="/about/#coaches" onClick={toggleMenu}>Coaches</Link>
									</li>
									<li className="py-2">
										<Link href="/media" className="disabled" onClick={toggleMenu}>Media</Link>
									</li> */}
									<li className="py-2">
										<Link href="/testimonials" onClick={toggleMenu}>Testimonials</Link>
									</li>
									<li className="py-2">
										<Link href="/faq" onClick={toggleMenu}>FAQ</Link>
									</li>
									<li className="py-2">
										<Link href="/schedule" onClick={toggleMenu}>Class Schedule</Link>
									</li>
									{/* <li className="py-2">
										<Link href="/contact" onClick={toggleMenu}>Contact Us</Link>
									</li> */}
								</ul>
							)}
						</li>

						<div className="w-5/6 h-px bg-white"></div>

						
						<Link href="/affiliate-academies" onClick={toggleMenu}>
							<li className="py-3 footerText">
							Texas Affiliate Academies
							</li>
						</Link>

						<div className="w-5/6 h-px bg-white"></div>

						<a onClick={toggleMenu} href="https://shop.renzograciehouston.com">
							<li className="py-3 footerText">
							Shop
							</li>
						</a>

						<div className="w-5/6 h-px bg-white"></div>
						
						<a onClick={toggleMenu} href="https://bjjlink.com/pub/664760798b06364ceffb751e">
							<li className="py-3 footerText">
							Free Trial Class
							</li>
						</a>

						<div className="w-5/6 h-px bg-white"></div>
					</ul>
					<div className="flex flex-col p-4 font-garet text-sm space-y-2"> 
						<p className="footerText">Renzo Gracie Houston</p>
						<p>Renzo Gracie Houston 3527 Hwy 6, Suite 240 Sugar Land, TX 77478</p>
						<a href="tel:281-652-7961">(281) 652-7961</a>
						<a href = "mailto:info@renzograciehouston.com">info@renzograciehouston.com</a>
					</div>
					<div className=" space-x-4 flex justify-center">
						<a href="https://www.instagram.com/renzograciehouston/">
							<div className=" max-w-10 p-1 bg-white rounded-lg ring-1 ring-white">
								<Instagram className="h-8 w-8" />
							</div>
						</a>

						<a href="https://www.facebook.com/RenzoGracieHouston/">
							<div  className=" p-1 bg-white rounded-lg ring-1 ring-white ">
								<Facebook className="h-8 w-8"/>
							</div>
						</a>
					</div>
				</div>
				
			)}
		</>
	);
}