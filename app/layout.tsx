import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import MobileMenu from '@/components/MobileMenu'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileFooter from '@/components/MobileFooter'
 
// Font files in public/fonts
const Garet = localFont({
	src:'../public/fonts/Garet-Book.otf',
	display: "block",
	variable: '--font-garet'
})
const GaretHeavy = localFont({
	src:'../public/fonts/Garet-Heavy.otf',
	variable: '--font-garetHeavy'
})
const ArialBlack = localFont({
	src:'../public/fonts/ariblk.ttf',
	display: "block",
	variable: '--font-arialBlack'
})

export const metadata: Metadata = {
	title: 'Renzo Gracie Missouri City',
	description: 'Experience the art of Brazilian Jiu-Jitsu at our academy, offering specialized classes for both kids and adults. Our expert instructors provide a welcoming environment for skill development, discipline, and community engagement.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={` ${Garet.variable} ${GaretHeavy.variable} ${ArialBlack.variable} `}>
			<body>
				{/* <header className="lg:hidden sticky top-0 z-20">
					<MobileMenu />
				</header>
				<header className="hidden lg:block sticky top-0 z-20">
					<Header />
				</header> */}
				{children}
				<footer className="lg:hidden">
					<MobileFooter />
				</footer>
				<footer className="hidden lg:block">
					<Footer />
				</footer>
			</body>
		</html>
	)
}
