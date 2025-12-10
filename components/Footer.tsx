import Link from "next/link"
import Image from 'next/image'
import FooterLogo from '../public/images/footer-logo.png'
import Instagram from '../public/svg/logo-instagram.svg'
import Facebook from '../public/svg/logo-facebook.svg'

export default function Footer() {
	return (
	<>
		<div className="flex flex-col bg-header h-fit py-4 justify-around items-center font-garet">
			<div className="grid grid-cols-4 lg:h-64 xl:h-70 2xl:h-80 lg:gap-x-4 xl:gap-x-12 2xl:gap-x-24 mx-2 lg:mx-4 2xl:mx-10 justify-center align-middle lg:text-xs xl:text-base 2xl:text-2xl text-white py-4">
				<div className="flex flex-col justify-evenly items-center space-y-4">
					<Image
					className="h-auto w-1/3"
					src={FooterLogo}
					alt="Logo Image"
					quality={100}
					/>
					<div className=" space-x-4 flex justify-center">
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
				<div className="flex flex-col justify-between "> 
					<p className="footerText">Renzo Gracie Missouri City</p>
					<p>1021 Lake Olympia Pkwy Ste 950, Missouri City, TX 77489</p>
					<a href="tel:346-579-4676">(346) 579-4676</a>
					<a href = "mailto:info@renzograciemissouricity.com">info@renzograciemissouricity.com</a>
				</div>
				<div className="flex flex-col justify-between "> 
					<Link href="/programs">
						<p>Programs</p>
					</Link>
					<Link href="/programs">
						<p>Brazilian Jiu-Jitsu</p>
					</Link>
					<Link href="/programs">
						<p>Kids BJJ</p>
					</Link>
					<a href="https://api.bjjlink.com/pub/664760798b06364ceffb751e">
						<p>Join a Free Class</p>
					</a>
				</div>
				<div className="flex flex-col justify-between"> 
					<Link href="/schedule">
						<p>Class Schedule</p>
					</Link>
					<Link href="/faq">
						<p>FAQ</p>
					</Link>
					<Link href="/testimonials">
						<p>Testimonials</p>
					</Link>
					<Link href="/affiliate-academies">
						<p>Texas Affiliate Academies</p>
					</Link>
				</div>
				
			</div> 

			<p className="place-content-center text-xs text-white pt-8">
			2025 © Renzo Gracie Missouri City. All Rights Reserved.
			</p>
		</div>	
	</>
	)
}