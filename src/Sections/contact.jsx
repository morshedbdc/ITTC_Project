function Contact() {
    return (
        <section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm lg:max-w-screen-md">
            <h2 className="mb-4 mt-20 text-4xl tracking-tight font-extrabold text-center text-[#1d0e6a] animate-bounce">
            Contact Us
            </h2>
            <form className="space-y-8">
            <div>
                <label
                for="email"
                className="block mb-2 text-sm font-medium text-[#1d0e6a]"
                >
                Your email
                </label>
                <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-[#1d0e6a] text-sm rounded-lg block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
                />
            </div>
            <div>
                <label
                for="subject"
                className="block mb-2 text-sm font-medium text-[#1d0e6a]"
                >
                Subject
                </label>
                <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-[#1d0e6a] bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                placeholder="Let us know how we can help you"
                required
                />
            </div>
            <div className="sm:col-span-2">
                <label
                for="message"
                className="block mb-2 text-sm font-medium text-[#1d0e6a]"
                >
                Your message
                </label>
                <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-[#1d0e6a] bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
                ></textarea>
            </div>
            <button
                type="submit"
                className="group relative px-4 py-2 font-medium text-[#1d0e6a] transition-colors duration-[400ms] hover:text-[#6c00ff]">
                Send message
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#1d0e6a] transition-all duration-100 group-hover:w-full" />
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#1d0e6a] transition-all delay-100 duration-100 group-hover:h-full" />
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#1d0e6a] transition-all delay-200 duration-100 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#1d0e6a] transition-all delay-300 duration-100 group-hover:h-full" />
            </button>
            </form>
        </div>
        </section>
    );
}

export default Contact;
