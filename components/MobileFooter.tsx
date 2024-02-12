import Link from "next/link"
import Image from 'next/image'
import Instagram from '../public/svg/logo-instagram.svg'
import Facebook from '../public/svg/logo-facebook.svg'
import FooterLogo from '../public/images/footer-logo.png'

export default function Footer() {
	return (
	<>
		<div className="flex flex-col bg-header h-fit py-2 justify-around items-center font-garet">
			<div className="grid grid-rows-2 mx-4 gap-8 justify-center align-middle text-white py-1">
				<div className="flex flex-col justify-evenly items-center space-y-4 p-4">
					<Image
					className="h-1/2 w-auto"
					src={FooterLogo}
					alt="Logo Image"
					quality={100}
					/>
					<div className=" space-x-2 flex justify-center">
						<a href="https://www.instagram.com/renzograciemissouricity/">
							<div className=" max-w-10 p-1 rounded-lg bg-white">
								<Instagram className="h-8 w-8" />
							</div>
						</a>

						<a href="https://www.facebook.com/renzograciemissouricitytx/">
							<div  className=" p-1 bg-white rounded-lg ">
								<Facebook className="h-8 w-8"/>
							</div>
						</a>
					</div>
					
				</div>
				<div className="flex flex-col justify-around "> 
					<p className="footerText">Renzo Gracie Missouri City</p>
					<p>1021 Lake Olympia Pkwy Ste 950, Missouri City, TX 77489</p>
					<a href="tel:281-652-7961">(281) 652-7961</a>
					<a href = "mailto:info@renzograciemissouricity.com">info@renzograciemissouricity.com</a>
				</div>
				{/* <div className="flex flex-row text-xs justify-between">
					<div className="flex flex-col justify-between "> 
						<Link href="/programs">
							<p>Programs</p>
						</Link>
						<Link href="/programs/#bjj">
							<p>Brazilian Jiu-Jitsu</p>
						</Link>
						<Link href="/programs/#kids-bjj">
							<p>Kids BJJ</p>
						</Link>
						<Link href="/programs/#wrestling">
							<p>Wrestling</p>
						</Link>
						<Link href="/programs/#muaythai">
							<p>Muay Thai</p>
						</Link>
						<a href="https://renzograciehouston.sites.zenplanner.com/freeTrial.cfm">
							<p>Join a Free Class</p>
						</a>
						<Link href="/schedule">
							<p>Class Schedule</p>
						</Link>
					</div>
					<div className="flex flex-col justify-between "> 
						<Link href="/about">
							<p>About Us</p>
						</Link>
						<Link href="/about#coaches">
							<p>Coaches</p>
						</Link>
						<Link href="/faq">
							<p>FAQ</p>
						</Link>
						<Link href="/contact">
							<p>Contact Us</p>
						</Link>
						<Link href="/media">
							<p>Media</p>
						</Link>
						<Link href="/testimonials">
							<p>Testimonials</p>
						</Link>
						<Link href="/affiliate-academies">
							<p>Texas Affiliate Academies</p>
						</Link>
					</div>
				</div> */}
			</div> 

			<p className="text-center text-sm text-white pt-8">
			2024 © Renzo Gracie Missouri City. All Rights Reserved.
			</p>
		</div>	
	</>
	)
}