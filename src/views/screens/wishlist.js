import React from 'react';
import Navbar from '../components/navbar';
import backgroundImage from './../../assets/bg.svg';
import './styles.css'
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const ContainerWithInput = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
        // Redirect to '/contact' page

        navigate('/contact');
    };

    return (
        <div className="flex items-center justify-center bor mt-10 "

        >
            <div className="p-6 bg-white bg-white rounded-3xl overflow-hidden shadow-lg container"
                style={{ 'width': '900px' }}
            >
                <h2 className="text-xl font-bold mb-4 ">Join Our Exclusive Waitlist and Enjoy a 50% Discount for the First 500 Users</h2>
                <p className='text-gray-400 mb-4'>Be among the first to experience the game-changing capabilities of Doxplore at an unbeatable price! Join our exclusive waitlist today and secure your spot to receive a special 50% discount on your subscription as one of the first 500 users.</p>
                <div className="flex flex-col items-center justify-center">
                    <form onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                className="rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your Email Address..."
                                style={{ 'width': '500px' }}
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 h-8 w-8 m-1 rounded-full flex items-center justify-center text-white container"
                            >
                                <span className="text-2xl pb-1 pl-1 text-gray-400" style={{ lineHeight: '0' }}>></span>
                                <i className="fas fa-check"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



const PricingPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submit logic here
        // Redirect to '/contact' page

        navigate('/contact');
    };
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");


    };
    return (
        <>
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Navbar />
                <div className="flex flex-col items-center justify-center "
                    style={{ 'height': '85vh' }}>
                    <div
                        className="h-screen bg-cover bg-center flex flex-col items-center justify-center max-w-7xl"

                    >

                        <div className="flex flex-col items-center justify-center text-center text-white m-20">
                            <h1 className="text-3xl font-bold mb-4">Unlock the Power of Doxplore: Choose Your Path to Customer Engagement Excellence</h1>
                            <p className="text-m mb-6 text-gray-300">
                                Choose the perfect plan to unlock the full potential of Doxplore and revolutionize your customer interactions. Whether you're a small business looking for a solid foundation or an enterprise seeking unlimited possibilities, we have the right package to meet your needs.
                            </p>
                            <ContainerWithInput />
                            {/* <div className="flex">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                                    Free Trial
                                </button>
                                <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
                                    Explore
                                </button>
                            </div> */}
                        </div>
                    </div>


                </div>

            </div>
            <div className="flex flex-col items-center justify-center">
                {/* <h1 className="text-4xl font-bold text-center mb-4">Pricing</h1>
                <p className="text-lg text-gray-800 mb-8">Join our waitlist for exclusive offers!</p> */}
                {/* <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-bold mb-4">JOIN WAITLIST NOW</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 font-medium text-gray-800">Email Address:</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
                            Submit
                        </button>
                    </form>
                </div> */}
                <div className="flex flex-wrap justify-center mt-8">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg p-8 shadow-md text-center h-full">
                            <h3 className="text-2xl font-bold mb-4">Base</h3>
                            <p className="text-gray-800 mb-4 text-sm">Lay the foundation for exceptional customer interactions with essential features, seamless integration, and up to 1,000 customer interactions per month.</p>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-blue-500">$15</span>
                                <span className="text-gray-800">/month</span>
                            </div>
                            <ul className="text-gray-700 list-disc list-inside text-left text-md flex-grow">
                                <li className="mb-2">Ideal for small businesses and startups</li>
                                <li className="mb-2">Get started with essential features</li>
                                <li className="mb-2">Up to 1,000 customer interactions per month</li>
                                <li className="mb-2">Access to NLP-based AI chatbot builder</li>
                                <li className="mb-2">Seamless integration with your platforms</li>
                                {/* <li className="mb-2">Email support</li> */}
                            </ul>
                            <button onClick={handleSubmit} className=" text-white font-bold py-2 px-4 mt-10 rounded-3xl bg-indigo-700 hover:bg-indigo-600">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg p-8 shadow-md text-center h-full">
                            <h3 className="text-2xl font-bold mb-4">Standard</h3>
                            <p className="text-gray-800 mb-4 text-sm">Take your customer interactions to new heights with advanced capabilities and up to 5,000 customer interactions per month.</p>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-blue-500">$99</span>
                                <span className="text-gray-800">/month</span>
                            </div>
                            <ul className="text-gray-700 list-disc list-inside text-left text-md flex-grow">
                                <li className="mb-2">Perfect for growing businesses</li>
                                <li className="mb-2">Unlock advanced capabilities for enhanced interactions</li>
                                <li className="mb-2">Up to 5,000 customer interactions per month</li>
                                <li className="mb-2">All features from the Base package</li>
                                <li className="mb-2">Workflow automation and task optimization</li>
                                {/* <li className="mb-2">Priority email and chat support</li> */}
                            </ul>
                            <button onClick={handleSubmit} className=" text-white font-bold py-2 px-4 mt-9 rounded-3xl bg-indigo-700 hover:bg-indigo-600">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                        <div className="bg-white rounded-lg p-8 shadow-md text-center h-full">
                            <h3 className="text-2xl font-bold mb-4">Premium</h3>
                            <p className="text-gray-800 mb-4 text-sm">Experience unlimited possibilities for enterprise-level organizations with unlimited customer interactions to scale your business without limitations.</p>
                            <div className="mb-4">
                                <span className="text-4xl font-bold text-blue-500">$199</span>
                                <span className="text-gray-800">/month</span>
                            </div>
                            <ul className="text-gray-700 list-disc list-inside text-left text-md flex-grow">
                                <li className="mb-2">Tailored for enterprise-level organizations</li>
                                <li className="mb-2">Scale your customer interactions to new heights</li>
                                <li className="mb-2">Unlimited customer interactions per month</li>
                                <li className="mb-2">All features from the Standard package</li>
                                <li className="mb-2">Enhanced reporting and analytics</li>
                                {/* <li className="mb-2">Priority email and chat support</li> */}
                            </ul>
                            <button onClick={handleSubmit} className=" text-white font-bold py-2 px-4 mt-4 rounded-3xl bg-indigo-700 hover:bg-indigo-600">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
                <section className="bg-gray-100 rounded-xl mb-10">
                    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">
                                Not Sure Which Package to Choose? Get a Free Consultation!
                            </h2>
                            <p className='m-10'>We understand that selecting the right package for your business needs can be a tough decision. That's why we're here to help! At Synacal, we offer a complimentary consultation to guide you towards the perfect package that aligns with your goals and requirements.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                            {/* Step 1 */}
                            <div className="text-left">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7.071-2.929a8 8 0 1111.314 0L10 15.657l-2.929-2.929z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="mt-2 text-lg font-medium text-gray-900">Tailored Recommendations:</h3>
                                <p className="mt-1 text-md text-gray-500">Our expert team will assess your unique business needs, objectives, and customer interaction goals. We'll provide personalized recommendations to help you make an informed decision on the best package for your specific requirements.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-left">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0l2.828 2.828a1 1 0 01-1.414 1.414l-2.828-2.828a1 1 0 010-1.414z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm-6 8a6 6 0 1112 0A6 6 0 014 10z" clipRule="evenodd" />
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </div>
                                <h3 className="mt-2 text-lg font-medium text-gray-900">Maximize Value</h3>
                                <p className="mt-1 text-md text-gray-500">By understanding your business challenges and growth potential, we can ensure you get the maximum value from your Doxplore subscription. We'll help you optimize your customer interactions, streamline workflows, and enhance user experiences for exceptional results.</p>
                            </div>
                            {/* Step 3 */}
                            <div className="text-left">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7.071-2.929a8 8 0 1111.314 0L10 15.657l-2.929-2.929z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="mt-2 text-lg font-medium text-gray-900">Custom Solutions</h3>
                                <p className="mt-1 text-md text-gray-500"> If your business demands require specialized features or enterprise-level solutions, our consultation will explore customized options to meet your specific needs. We'll tailor the package to ensure it aligns perfectly with your organization's goals and objectives.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-left">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0l2.828 2.828a1 1 0 01-1.414 1.414l-2.828-2.828a1 1 0 010-1.414z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm-6 8a6 6 0 1112 0A6 6 0 014 10z" clipRule="evenodd" />
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </div>
                                <h3 className="mt-2 text-lg font-medium text-gray-900"> Seize Opportunities</h3>
                                <p className="mt-1 text-md text-gray-500">With our consultation, you'll stay up to date with the latest industry trends and best practices. We'll highlight opportunities for leveraging AI technology to gain a competitive edge, exceed customer expectations, and drive business growth.</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center bor mt-10 "

                        >
                            <div className="p-6 bg-white bg-white rounded-3xl overflow-hidden shadow-lg container"
                                style={{ 'width': '900px' }}
                            >
                                <h2 className="text-xl font-bold mb-4 text-white text-center">Schedule Your Free Consultation Today</h2>
                                <p className='text-gray-400 mb-4 text-center'>Don't let uncertainty hold you back from unlocking the full potential of Doxplore. Take advantage of our complimentary consultation to receive expert guidance and make an informed decision about the right package for your business.</p>
                                <div className="flex flex-col items-center justify-center">
                                    {/* <form onSubmit={handleSubmit}>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter your Email Address..."
                                                style={{ 'width': '500px' }}
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-0 top-0 h-8 w-8 m-1 rounded-full flex items-center justify-center text-white container"
                                            >
                                                <span className="text-2xl pb-1 pl-1 text-gray-400" style={{ lineHeight: '0' }}>></span>
                                                <i className="fas fa-check"></i>
                                            </button>
                                        </div>
                                    </form> */}
                                    <button onClick={() => openInNewTab("https://calendly.com/synacal/30min?month=2023-05")} className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-3xl mr-4"
                                        style={{
                                            'width': '250px'

                                        }}
                                    >
                                        Book a Free Consultation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div></div>
                <Footer />
            </div>
        </>

    );
};

export default PricingPage;
