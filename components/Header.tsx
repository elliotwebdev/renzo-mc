import Link from "next/link"
import HeaderLogo from '@/public/svg/header-logo.svg'
import Instagram from '@/public/svg/logo-instagram.svg'
import Facebook from '@/public/svg/logo-facebook.svg'
import NavMenu from "@/components/NavMenu";

export default function Header() {
  return (
	<>
		
		<header id="MainHeader" className="flex justify-between h-16 2xl:h-24 bg-header">
			<div className="flex ml-10 items-center space-x-4">
				<Link href="/">
					<HeaderLogo  className="mb-1"/>
				</Link>

				<NavMenu />
			</div>

			<div className="flex justify-content-end mr-10 items-center space-x-6">
				<div className=" space-x-2 flex">
					<a href="https://www.instagram.com/renzograciemissouricity/">
						<div className=" max-w-10 p-1 bg-white rounded-lg ring-1 ring-white">
							<Instagram className="h-6 w-6" />
						</div>
					</a>

					<a href="https://www.facebook.com/RenzoGraciemissouricitytx/">
						<div  className=" p-1 bg-white rounded-lg ring-1 ring-white ">
							<Facebook className="h-6 w-6"/>
						</div>
					</a>
				</div>
				<a href="https://bjjlink.com/pub/664760798b06364ceffb751e">
					<button id="headerCTA" className="bg-white uppercase text-xs lg:text-sm xl:text-lg w-max  text-button p-1 ring ring-button rounded-lg font-garet tracking-tighter hover:scale-110 duration-150">Free Trial Class</button>
				</a>
			</div>
		</header>
	</>
  )
}