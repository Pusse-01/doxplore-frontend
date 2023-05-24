// import React from 'react';

// const HowItWorks = () => {
//   return (
//     <div className="bg-gray-100 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-left">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">
//             How It Works
//           </h2>
//           <p className='m-10'>Doxplore takes the hassle out of searching through large sets of documents by utilizing natural language queries and advanced AI algorithms, allowing you to quickly and easily find the information you need. With doxplore, you can maximize productivity and save valuable time that can be put towards more important tasks.</p>
//         </div>
//         <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 Upload Your Documents
//               </h3>
//               <div className="mt-2 text-sm text-gray-500">
//                 <p>
//                   Easily upload and organize all of your important documents to the doxplore platform with just a few clicks.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 Use Natural Language Queries
//               </h3>
//               <div className="mt-2 text-sm text-gray-500">
//                 <p>
//                   Search for specific information within your documents using natural language queries, just like you would ask a question to a person.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 View Accurate and Relevant Results
//               </h3>
//               <div className="mt-2 text-sm text-gray-500">
//                 <p>
//                   Doxplore quickly and accurately identifies the most relevant information from your documents, displaying highlighted text and previews of the relevant sections.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white overflow-hidden shadow rounded-lg">
//             <div className="px-4 py-5 sm:p-6">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">
//                 Chat with Your Selected Document
//               </h3>
//               <div className="mt-2 text-sm text-gray-500">
//                 <p>
//                   Chat with a document to get exact information you need, without having to manually dig through pages of text.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// 

import { Fragment } from 'react';

function HowItWorks() {
  return (
    <section className="bg-gray-100 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">
            How It Works
          </h2>
          <p className='m-10'>Doxplore takes the hassle out of searching through large sets of documents by utilizing natural language queries and advanced AI algorithms, allowing you to quickly and easily find the information you need. With doxplore, you can maximize productivity and save valuable time that can be put towards more important tasks.</p>
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
            <h3 className="mt-2 text-lg font-medium text-gray-900">Upload Your Documents</h3>
            <p className="mt-1 text-md text-gray-500">Easily upload and organize all of your important documents to the doxplore platform with just a few clicks.</p>
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
            <h3 className="mt-2 text-lg font-medium text-gray-900">Use Natural Language Queries</h3>
            <p className="mt-1 text-md text-gray-500">Search for specific information within your documents using natural language queries, just like you would ask a question to a person.</p>
          </div>
          {/* Step 3 */}
          <div className="text-left">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7.071-2.929a8 8 0 1111.314 0L10 15.657l-2.929-2.929z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900"> View Relevant Documents</h3>
            <p className="mt-1 text-md text-gray-500">Doxplore quickly and accurately identifies the most relevant documents from your 1000's of document database.</p>
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
            <h3 className="mt-2 text-lg font-medium text-gray-900"> Chat with Your Document</h3>
            <p className="mt-1 text-md text-gray-500">Chat with a document to get exact information you need, without having to manually dig through pages of text.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HowItWorks;

        //   {/* Step 3
        //   <div className="text-left">
        //     <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue- */}
