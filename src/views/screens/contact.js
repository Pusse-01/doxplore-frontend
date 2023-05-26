import React from 'react';
import backgroundImage from './../../assets/bg.svg';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
function Form() {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-2xl w-full  shadow-md rounded-lg px-4 py-2">
                {/* <h2 className="text-2xl font-bold mb-4">Contact Us</h2> */}
                <form action="https://submit-form.com/WuI1mBS8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-300 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-300 font-bold mb-2">
                            Company / Organization
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-2xl py-2 px-3 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-300 font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            className="w-full border border-gray-300 rounded-2xl py-2 px-3 h-32 resize-none focus:outline-none focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-3xl mr-4"
                        style={{ 'width': '100px' }}
                    >
                        Send
                    </button>
                </form>
                <div className='my-10'></div>
            </div>
        </div>
    );
}

const ContactUs = () => {

    return (
        <div
            className=''
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Navbar />
            <div className=" flex flex-col items-center justify-center "
            // style={{ 'height': '85vh' }}
            >
                <div
                    className=" bg-cover bg-center flex flex-col items-center justify-center max-w-7xl"

                >

                    <div className="flex flex-col items-center justify-center text-center text-white mx-4 my-14" >
                        <h1 className="text-5xl font-bold mb-4">Request a Demo and Experience the Power of Doxplore in Action!</h1>
                        <p className="text-m mb-8 ">
                            Ready to witness the game-changing capabilities of Doxplore firsthand? Request a demo today and discover how our NLP-based AI chatbot builder can transform your customer interactions, streamline workflows, and elevate your business to new heights.
                        </p>
                        <div className="flex">
                            {/* <button className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-3xl mr-4"
                                style={{
                                    'width': '250px'

                                }}
                            >
                                Request a Demo
                            </button> */}
                            {/* <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
                  Explore
                </button> */}
                        </div>
                    </div>
                </div>


            </div>
            <Form />
            <Footer />
        </div>
    )
}

export default ContactUs;
