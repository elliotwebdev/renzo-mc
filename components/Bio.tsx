'use client'
import { Transition } from '@headlessui/react'
import { useState } from 'react'


export default function Bio() {
	const [isShowing, setIsShowing] = useState(false)

	return (
		<>
			<button className="text-black" onClick={() => setIsShowing((isShowing) => !isShowing)}>
				Toggle
			</button>
			<Transition
				show={isShowing}
				enter="transition-opacity duration-500"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-500"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				className="text-black"
			>
				I will fade in and out
			</Transition>
			
		</>
	)
}
