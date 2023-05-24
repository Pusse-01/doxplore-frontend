import React from 'react';
import doxplore from './../../assets/dox.png';
const FeatureSection = () => {
    return (
        <section className="max-w-6xl mx-auto mt-0 py-16 px-10">
            <div className=" mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Turn your knowledge base into a customized ChatGPT chatbot
                    </h2>
                    <p className="text-lg text-gray-800">
                        Doxplore is not just another AI bot platform—it's a cutting-edge NLP-based AI chatbot builder powered by the advanced GPT-4 technology. With Doxplore, you can unleash the true potential of natural language processing to create a dynamic and engaging user experience while ensuring consistent and accurate customer interactions.
                    </p>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <img src={doxplore} alt="Chatbot Image" />
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;