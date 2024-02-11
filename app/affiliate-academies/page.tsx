
import { academiesHouston } from "./academiesHouston"
import { academiesSanAntonio } from "./academiesSanAntonio"
import { academiesAustin } from "./academiesAustin"
import { academiesOther } from "./academiesOther"

export default function Page() {
	return (
	<>
		<div className="w-full bg-white h-16  flex flex-col items-center justify-center ">
			<div className="flex flex-row justify-center">
				<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>Texas Affiliate Academies</h2>
				<div className='h-1 w-11/12 absolute bg-black translate-y-4 '></div>
			</div>
		</div>
		
		
		<div className=" bg-white flex flex-col items-center justify-center font-garet">
			<h2 className="text-center text-black text-2xl lg:text-3xl font-garet underline underline-offset-8 uppercase">Houston Locations</h2>

			<div className="flex flex-col lg:grid lg:grid-cols-2 py-6 gap-6 w-2/3 lg:w-5/6 2xl:w-3/4 items-center">
				{academiesHouston.map((academy, index) => (
					<div key={index} className="bg-white px-8 py-0 text-center h-64 flex flex-col justify-evenly items-center">
						<div>
							<p className="text-black font-arialBlack mb-4">{academy.name}</p>
							<p className="text-black mb-2 leading-5">
								{academy.address.split(', ').map((line, i) => (
								<span key={i}>
									{i === 1 ? <br /> : (i > 0 ? ', ' : '')}
									{line}
								</span>
								))}
							</p>
							<p className="text-black mb-2">{academy.phone}</p>
							<p className="text-black">{academy.email}</p>
						</div>
						<a href={academy.href}>
							<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-64 hover:scale-110 duration-150">Visit Website</button>
						</a>
					</div>
				))}
			</div>

			<h2 className="text-center text-black text-2xl lg:text-3xl font-garet underline underline-offset-8 uppercase">Austin Locations</h2>

			<div className="flex flex-col lg:grid lg:grid-cols-2 py-6 gap-6 w-2/3 lg:w-5/6 2xl:w-3/4 items-center">
				{academiesAustin.map((academy, index) => (
					<div key={index} className="bg-white px-8 py-0 text-center h-64 flex flex-col justify-evenly items-center">
						<div>
							<p className="text-black font-arialBlack mb-4">{academy.name}</p>
							<p className="text-black mb-2 leading-5">
								{academy.address.split(', ').map((line, i) => (
								<span key={i}>
									{i === 1 ? <br /> : (i > 0 ? ', ' : '')}
									{line}
								</span>
								))}
							</p>
							<p className="text-black mb-2">{academy.phone}</p>
							<p className="text-black">{academy.email}</p>
						</div>
						<a href={academy.href}>
							<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-64 hover:scale-110 duration-150">Visit Website</button>
						</a>
					</div>
				))}
			</div>
			
			<h2 className="text-center text-black text-2xl lg:text-3xl font-garet underline underline-offset-8 uppercase pt-8">San Antonio Locations</h2>
			
			<div className="flex flex-col lg:grid lg:grid-cols-2 py-6 gap-6 w-2/3 lg:w-5/6 2xl:w-3/4 items-center">
				{academiesSanAntonio.map((academy, index) => (
					<div key={index} className="bg-white px-8 py-0 text-center h-64 flex flex-col justify-evenly items-center">
						<div className="flex flex-col justify-evenly w-80">
							<p className="text-black font-arialBlack mb-4">{academy.name}</p>
							<p className="text-black mb-2 leading-5">
								{academy.address.split(', ').map((line, i) => (
								<span key={i}>
									{i === 1 ? <br /> : (i > 0 ? ', ' : '')}
									{line}
								</span>
								))}
							</p>
							<p className="text-black mb-2">{academy.phone}</p>
							<p className="text-black">{academy.email}</p>
						</div>
						<a href={academy.href}>
							<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-64 hover:scale-110 duration-150">Visit Website</button>
						</a>
					</div>
				))}
			</div>

			<h2 className="text-center text-black text-2xl lg:text-3xl font-garet underline underline-offset-8 uppercase">Other Locations</h2>

			<div className="flex flex-col lg:grid lg:grid-cols-2 py-6 gap-6 w-2/3 lg:w-5/6 2xl:w-3/4 items-center">
				{academiesOther.map((academy, index) => (
					<div key={index} className="bg-white px-8 py-0 text-center h-64 flex flex-col justify-evenly items-center">
						<div>
							<p className="text-black font-arialBlack mb-4">{academy.name}</p>
							<p className="text-black mb-2 leading-5">
								{academy.address.split(', ').map((line, i) => (
								<span key={i}>
									{i === 1 ? <br /> : (i > 0 ? ', ' : '')}
									{line}
								</span>
								))}
							</p>
							<p className="text-black mb-2">{academy.phone}</p>
							<p className="text-black">{academy.email}</p>
						</div>
						<a href={academy.href}>
							<button className="bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button grow h-10 w-64 hover:scale-110 duration-150">Visit Website</button>
						</a>
					</div>
				))}
			</div>
		</div>
	</>
	)
}