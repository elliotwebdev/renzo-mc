
export default function MessageForm() {

    const accessKey = '4d584c95-9bd9-4d16-9044-c38cf41ab372';

    return (
        <>
        <div className="bg-white/90 mx-auto w-full sm:w-4/5  lg:rounded-md lg:shadow-sm p-2">
            <div className="text-center">
                <h2 className="font-semibold text-center text-black text-2xl lg:text-3xl font-arialBlack underline underline-offset-8 uppercase py-1">Subscribe Here</h2>
                {/* <p className="text-black">Complete the form to submit your message</p> */}
            </div>
            <div className="m-2 text-black">
                <form action="https://api.web3forms.com/submit" method="POST" id="form" className="space-y-2">
                    <input type="hidden" name="access_key" value={accessKey} />
                    <input type="hidden" name="from_name" value="RGMC Website"></input>
                    <input type="hidden" name="subject" value="Founder's Rate Sign Up" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="checkbox" name="botcheck" id="" style={{display: "none"}} />
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@email.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm text-gray-600">Phone Number</label>
                        <input type="text" name="phone" id="phone" placeholder="+1 (123) 456-7890" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Your Message (Optional)</label>
                        <textarea rows={4} name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" />
                    </div>
                    <div className=" flex justify-center">
                        <button type="submit" className="px-3 bg-button text-lg inline-block text-white rounded-lg font-garet ring ring-button h-10 w-64 hover:scale-110 duration-150">
                            Sign Up
                        </button>
                    </div>
                    <p className="text-base text-center text-gray-400" id="result"></p>
                </form>
            </div>
        </div>
        </>
    )
}