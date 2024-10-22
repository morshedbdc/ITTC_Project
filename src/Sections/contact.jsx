
function Contact() {
    return (
    <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
            <form className="space-y-8">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@flowbite.com" required/>
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm" placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-semibold text-center rounded-lg sm:w-fit focus:ring-4 focus:outline-none" style={{
                    backgroundImage:
                        "linear-gradient(-45deg, #5A4FCF, #f1f2f6, #FF3503, #FFD700)",
                    }}>Send message</button>
            </form>
        </div>
    </section>
    )
}

export default Contact