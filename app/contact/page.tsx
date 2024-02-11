
import { academiesHouston } from "../affiliate-academies/academiesHouston"
import MessageForm from "./MessageForm"
import GoogleMap from "./GoogleMap"
import Image from 'next/image'
import ContactImage from './images/contactImage.jpg'

export default function Page() {
	return (
		<>
		<div className="w-full bg-white h-16 flex flex-col items-center justify-center">
			<div className="flex flex-row justify-center">
				<h2 className='font-arialBlack w-auto px-2 text-center bg-white text-2xl lg:text-3xl text-black z-10 uppercase'>Contact Us</h2>
				<div className='h-1 w-11/12 absolute bg-black translate-y-4 '></div>
			</div>
		</div>

		<div className="relative w-full md:h-full min-h-[400px] max-h-[1280px] overflow-hidden">
			<Image
				src={ContactImage}
				alt="Contact Image"
				placeholder = 'blur'
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAATCAYAAADxlA/3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAEwAAAAC5Pc2mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACymlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4zMjA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE5NDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgra0LUTAAAEPklEQVRIDW3W2U5WSxAF4AJ+FFBRlEEGISqgEIx4Q7iB8Aw80XkOEl4Dn8CBK7hQgtHIoAgqKIPKpKBfaRtMTieb3ru7q9aqVVX9U3Xz5s3Tqqqq8FRXV8fJyUmcO3cuent74+LFi/l+/vz5OD09jYaGhvh1Pr58+RKPHj2KV69exZ07d+LWrVtRX18fT58+jdnZ2WhsbIxPnz4Fu0qlknNtbW3U1NQkxtevX2N0dDRu374dFYuFQJkR8W6Yj46O4vLlywn0/v37mJ+fT4BLly7F4uJiAiL94cOH6OzsTBvf379/z3dBra2tZTDIISMg69UF1Ay4gDtgzey5fv16bGxsxNTUVGxubqY6yNt78uRJvHjxIhWiEsf2RI/4yMhIDAwMZCDNzc1p60xiZph/Ii3vZo4dOj4+TuPDw8N4+PBhTExMJJA0GAVIhJT6/PlzPisrK/H27dtoa2vLyEXd3d0dFy5cSLsSeKW8WPV+dnB448aNXJJvZJaXlzOnFhGUe6qtr69HT09Ppknu9/f34/Hjx7G1tZXys+/o6IgfP378TQv7CkeFRCFgLqkQoYeh/JMUKHmpog7GxsZifHw8rl27lgQ5JrW0PXv2LH01NTVljVCAbUltNQJnRyGhgBxSzeQjJWNFppAQIjcCra2t0d7enueRPTg4yJp4/vx5DA0NJZlv374lcf7sw+G/5hfT/3wUYJFzLscO+wa6urqaKUB2b28vSZVInNMN0qV1OSa9NPCLJD/aj42npaUlrl69+jsFnBYSjEUM1Cxqknrq6uqykF6+fJkk1QNQaokckDqh1ps3b/4qopaopjX5v3LlSmxvb8fr168jU1Ci/7+ZY+BkE5EI+/v7kzBCAKVgYWEhFdOGOzs78fHjx5RelBTSwsDZ8OOcGvmnBhxAQkS7u7spNUfWGVBE4XHqFlNY7gTP5ORkFqh9ttqSetLlG1FF7LLSotLMb3ZBAZYKAwmRWxcdR0Veva3CXdUifffuXfT19WU0uqMQ1y0Aqee9AAoOcd9UTQK/Yf/9W4rR5SFyFY+9ykbm7t27cf/+/XRU2hK43JIceT6QpIphzV2hCAWZBWmxbJoZlRuNbA6qXuCASQpQZOrBDxGVgMzMzOSeb0qxFyXFSmoEw5YS2RUIACmzDYWiQPQullpSdGSzr6A4YaOizWrFGeSBOsMemXv37iUZhcrOKF2TV3Gu/PqDCNYi1UqiBYoAUtZFA5BSnLl2l5aWYnp6OgYHBzNdWlDdIEctpMzs+WfPFomKiMoo8msTuXOQdPJKOuBFBcAccyQVAPS5M34ZkXc1K0SK6Bp+1ZJz1mBXtNDZUfIG3AFXLHmdY2wNKIWQcsEg7uIqqrjl2FFUyxay9ru6utLOHj8VLWKDM/nGLqvzz3tJQflHAlnn5+bm4sGDB0kIseHh4YxQnv3qFWWBlBpj5z4p34L8CUUAF6IIIlyCAAAAAElFTkSuQmCC"
				quality={100}
				priority={true}
				className="w-full saturate-125 min-w-[400px] h-full min-h-[400px] object-cover transform scale-[180%] translate-x-[10rem] -translate-y-32 sm:transform-none sm:scale-100 sm:translate-x-0"
				/>

			<div className="absolute top-0 w-full h-full min-h-[300px] flex flex-col lg:grid lg:grid-cols-2 font-garet items-center"> {/* grid */}
				<div className="flex flex-col w-full h-full text-left justify-evenly items-center"> {/* left container */}
						<div className="text-black flex flex-col ml-8 lg:ml-24 mr-auto w-fit min-h-[340px] sm:min-h-[350px] lg:max-h-[500px] lg:min-h-[450px] justify-between bg-white/90 lg:bg-white-90 p-2 rounded-md">{/* info */}
							<p className="my-3 text-2xl lg:text-3xl">Renzo Gracie Houston</p>
							<div>
								<h3 className="text-sm sm:text-base font-bold font-garet underline underline-offset-8">ADDRESS</h3>
								<p className="my-3 font-semibold text-sm sm:text-base lg:text-lg">
									{academiesHouston[2].address.split(', ').map((line, i) => (
										<span className="self-end" key={i}>
											{i === 1 ? <br /> : (i > 0 ? ', ' : '')}
											{line}
										</span>
									))}
								</p>
							</div>
							<div>
								<h3 className="text-sm sm:text-base font-bold font-garet underline underline-offset-8">PHONE</h3>
								<a className="my-3 font-semibold text-sm sm:text-base lg:text-lg" href="tel:281-652-7961">{academiesHouston[2].phone}</a>
							</div>
							<div>
								<h3 className=" text-sm sm:text-base font-bold font-garet underline underline-offset-8">EMAIL</h3>
								<a className="my-3 font-semibold text-sm sm:text-base lg:text-lg" href = "mailto:info@renzograciehouston.com">{academiesHouston[2].email}</a>
							</div>
						</div>
				</div>
				<div className="hidden lg:flex flex-col justify-center w-full lg:bg-transparent"> {/* right container */}
					<MessageForm />
				</div>
			</div>
		</div>

		<div className="lg:hidden flex flex-col justify-center w-full bg-white"> 
			<MessageForm />
		</div>

		<div className="border border-x-0 border-y-0 lg:border-t-white lg:border-t-2">
			<GoogleMap />
		</div>
		</>
		)
}