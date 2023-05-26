import React from 'react';
import backgroundImage from './../../assets/bg.svg';
import HowItWorks from './how_it_works';
import Footer from './footer';
import { Fragment } from 'react';
import Navbar from './navbar';
import FeatureSection from './feature';

import './style.css'
const Card = ({ title, description, icon }) => {
  return (
    <div className="w-full lg:w-1/3 rounded-2xl p-6 flex flex-col flex-grow flex-shrink">
      <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full py-4 px-6 text-xl font-bold text-center">{title}</div>
        <div className="w-full py-4 px-6 text-md text-gray-800 text-center">{description}</div>
        <div className="w-full py-4 px-6 text-md text-gray-800 text-center">{icon}</div>
      </div>
    </div>
  );
};

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");


};

const Body = () => {
  return (
    <div className="center-div max-w-7xl mx-auto" >

      <div className="flex flex-col items-center justify-center text-center text-black my-10 mx-2 ">


        <h1 className="text-4xl font-bold mb-4">Explore, Discover, and Unleash Your Data's Potential with Doxplore</h1>
        <Fragment>
          <div className="flex flex-wrap">
            <Card
              title="Chat with your Document"
              description="Doxplore allows you to chat with your documents! Ask questions and get quick answers without having to read through long documents."
              icon={<i className="fas fa-folder fa-2x"></i>}
              className="p-10"
            />
            <Card
              title="Efficient Document Search"
              description="Doxplore helps you efficiently search through thousands of documents with ease. Our AI-powered search engine can find information in seconds that would take you hours to find manually."
              icon={<i className="fas fa-search fa-2x"></i>}
              className="p-10"
            />
            <Card
              title="Extract Insights"
              description="Doxplore automatically extracts insights from your documents, giving you valuable insights and information at your fingertips. No more sifting through countless pages of data to find what you need."
              icon={<i className="fas fa-chart-bar fa-2x"></i>}
              className="p-10"
            />
            <Card
              title="Efficiency and Effectiveness"
              description="With Doxplore, you can save time and increase your efficiency. No more wasted hours sifting through documents - get the information you need quickly and easily."
              icon={<i className="fas fa-users fa-2x"></i>}
              className="p-10"
            />
            <Card
              title="Security"
              description="Your data is secure with Doxplore. We use state-of-the-art security measures to protect your data, ensuring your documents are safe and secure."
              icon={<i className="fas fa-lock fa-2x"></i>}
              className="p-10"
            />
            <Card
              title="Integration"
              description="Integrate Doxplore with your existing systems for a seamless experience. We support a wide range of integrations, making it easy to get started with our platform."
              icon={<i className="fas fa-plug fa-2x"></i>}
              className="p-10"
            />
          </div>
        </Fragment>
      </div>

      <div className="flex flex-col items-center justify-center text-center text-black m-10">

        <HowItWorks />
      </div>
      <div className="flex flex-col items-center justify-center text-center text-black mx-auto my-10">
        <h1 className="text-5xl font-bold mb-4">Customize Doxplore for Your Business Needs</h1>
        <p className='p-10'>
          At Synacal, we understand that each business has unique needs when it comes to managing documents and extracting valuable insights. That's why we offer customized solutions tailored to your specific requirements. Our platform seamlessly integrates with your existing workflows and systems, making implementation a breeze. Our dedicated support team ensures a smooth transition, with ongoing assistance whenever you need it.

          Whether you're a small startup or a large enterprise, our scalable options grow with you. With Doxplore, you'll have the power to unlock the hidden value in your documents, giving you a competitive edge in your industry. Contact us today to learn more about how we can help your business thrive.

        </p>
        {/* <button onClick={() => openInNewTab("https://rootcodelabs.com/")} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl mr-4">
          Book a Free Consultation
        </button>
         */}
        <button onClick={() => openInNewTab("https://calendly.com/synacal/30min?month=2023-05")} className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-3xl mr-4"
          style={{
            'width': '250px'

          }}
        >
          Book a Free Consultation
        </button>


      </div>
    </div>
  )
}

const HomePage = () => {
  return (
    <>
      <div
        className=''
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <div className="h-screen flex flex-col items-center justify-center "
        // style={{ 'height': '85vh' }}
        >
          <div
            className=" bg-cover bg-center flex flex-col items-center justify-center max-w-7xl"

          >

            <div className="flex flex-col items-center justify-center text-center text-white mx-4">
              <h1 className="text-5xl font-bold mb-4">Welcome to Doxplore!</h1>
              <p className="text-m mb-8 ">
                Your intelligent document assistant! Doxplore is a cutting-edge AI-powered software that helps you find information from large sets of documents in no time. With its powerful machine learning algorithms, Doxplore can quickly and accurately analyze your documents, making it easy to find what you need, when you need it. Say goodbye to hours of tedious searching and get ready to explore your documents like never before with Doxplore!
              </p>
              <div className="flex">
                <button className="bg-indigo-700 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-3xl mr-4"
                  style={{
                    'width': '250px'

                  }}
                >
                  Request a Demo
                </button>
                {/* <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded">
                  Explore
                </button> */}
              </div>
            </div>
          </div>


        </div>

      </div>
      <FeatureSection />
      <Body />
      <Footer />
    </>


  );
};

export default HomePage;
