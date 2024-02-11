'use client' 
import Link from "next/link"
import Button from '../public/svg/button.svg'
import { useState, useEffect } from 'react';

const testimonialsData = [
	{
		id: 1,
		name: 'Jason C Powell PhD',
		text: "My Panda couldn't be happier.  What a great group of instructors and Prof Brian does a great job with the kiddos. I have and will continue to recommend my friends and family!"
	},
	{
		id: 2,
		name: 'Tobin Thomas',
		text: "Dropped in for about a month since I was on vacation. Prof. Brian and everyone else at the gym is super friendly. 10/10 classes, I got so many useful tips and tricks especially from the after class!"
	},
	{
		id: 3,
		name: 'Henry Torres',
		text: "Fantastic gym. Great culture, clean facility, and professional staff. Definitely worth dropping in and trying a class."
	},
	{
		id: 4,
		name: 'Smitha T',
		text: "My son has been training here for about a year and a half. He absolutely loves it and has learned so much. You will always be greeted with a smile and Professor Brian is amazing with the kids."
	},
	{
		id: 5,
		name: 'Random Joe',
		text: "This is a wonderful gym. Professor Brian has created a very welcoming and patient environment for anyone and everyone, I genuinely enjoy spending time here."
	},
	{
		id: 6,
		name: 'Caleb Johnson',
		text: "One of the best communities I've ever been a part of. They truly care about your development and success. I cant wait to get to class each day. Seriously cant say enough good things! Check it out for yourself!"
	},
	{
		id: 7,
		name: 'Cory Kellett',
		text: "Super nice gym I had a great time. I love the open mat concept on Sunday."
	},
	{
		id: 8,
		name: 'Cleburn Walker',
		text: "Exceptional! Very rare to find a place like this where the atmosphere is very positive and supportive, and the instruction is technical and explained in ways that make it easy to implement!"
	},
];

const TestimonialsCarousel = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const handlePrev = () => {
		setCurrentTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
	};
	  // Function to automatically switch testimonials after a certain time
	  const autoSwitchTestimonials = () => {
		// Switch to the next testimonial
		handleNext();
	    };
	  
	    // Set the timer to switch testimonials every 10 seconds (adjust as needed)
	    useEffect(() => {
		const timer = setTimeout(autoSwitchTestimonials, 10000); 
		// Clean up the timer when the component unmounts or when the current testimonial changes
		return () => clearTimeout(timer);
	    }, [currentTestimonial]);

	return (
		<div className="w-full bg-white h-80 flex flex-col items-center justify-center pb-12">
			<div className="h-5/6 w-full flex items-center justify-around">
				<Button onClick={handlePrev} className="h-8 lg:h-12 w-8 lg:w-12 rotate-180 basis-1/8 cursor-pointer hover:scale-110 duration-150" />
				<div className="text-black text-center  basis-3/4 font-garet text-base lg:text-xl 2xl:text-2x">
					<p>"{testimonialsData[currentTestimonial].text}"</p>
					<p className="mt-2 text-end italic">- {testimonialsData[currentTestimonial].name}</p>
				</div>
				<Button onClick={handleNext} className="h-8 lg:h-12 w-8 lg:w-12 basis-1/8 cursor-pointer hover:scale-110 duration-150 " />
			</div>

			<div className="flex justify-center">
				<Link href="/testimonials">
					<button className="bg-none text-xl lg:text-2xl 2xl:text-3xl text-button rounded-lg ring ring-button font-garet grow w-80 2xl:w-72 py-1 hover:scale-110 duration-150">View Testimonials</button>
				</Link>
			</div>
		</div>
	);
};

export default TestimonialsCarousel;


