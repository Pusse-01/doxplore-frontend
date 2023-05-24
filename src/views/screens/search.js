// import React, { useState } from 'react';

// const PolicyPage = () => {
//     const [query, setQuery] = useState('');
//     const [response, setResponse] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const handleQueryChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleSearch = async () => {
//         try {
//             setIsLoading(true);
//             const response = await fetch('http://127.0.0.1:8000/answer', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     query: query
//                 }),
//             });
//             const data = await response.json();
//             setResponse(data);
//             setIsLoading(false);
//         } catch (error) {
//             console.error(error);
//             setIsLoading(false);
//         }
//     };
//     const renderCards = () => {
//         if (!response || isLoading) {
//             return null;
//         }

//         const { docs } = response;

//         return (
//             <div className="grid gap-6">
//                 {docs.map((doc, index) => (
//                     <div key={index} className="bg-white shadow rounded p-6">
//                         <h2 className="text-lg font-bold mb-4">{`Document ${index + 1}`}</h2>
//                         <p>{doc.text}</p>
//                         <div className="mt-4 text-sm text-gray-500">
//                             <p>{`Source: ${doc.metadata.source}`}</p>
//                             <p>{`Page Number: ${doc.metadata.page_number}`}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <div className="flex justify-center mb-8">
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={handleQueryChange}
//                     className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
//                 />
//                 <button
//                     onClick={handleSearch}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
//                 >
//                     Search
//                 </button>
//             </div>
//             <div className="bg-gray-100 p-6 mb-8">

//                 {isLoading & response?.answer.output_text ? <p>Loading...</p> :
//                     <div>
//                         <h1 className="text-md font-bold mb-4">Answer</h1>
//                         <p>{response?.answer.output_text}</p>
//                     </div>
//                 }
//             </div>
//             {renderCards()}
//         </div>
//     );
// };

// export default PolicyPage;


import React, { useState } from 'react';

const PolicyPage = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showFullDocument, setShowFullDocument] = useState(false);

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('http://127.0.0.1:8000/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: query
                }),
            });
            const data = await response.json();
            setResponse(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const toggleShowFullDocument = () => {
        setShowFullDocument(!showFullDocument);
    };

    const renderDocumentText = (text) => {
        if (showFullDocument) {
            return text;
        }
        return text.split('\n').slice(0, 3).join('\n');
    };


    const renderAnswerSection = () => {
        if (isLoading) {
            return <p className="mx-auto px-20">Loading...</p>;
        }

        if (response && response.answer) {
            console.log(response);
            return (
                <div

                    className="bg-gray-100 px-10 py-6 mb-8 flex items-center justify-center">
                    <div>
                        <h1 className="text-md font-bold mb-4">Answer</h1>
                        <p
                        >{response.answer}</p>
                        <p className="mt-4 text-sm text-gray-500">{`Source: ${response.source}`}</p>

                    </div>

                </div>
            );
        }

        return null;
    };

    const renderCards = () => {
        if (!response || isLoading) {
            return null;
        }

        const { docs } = response;

        return (
            <div className="grid gap-6 mx-10">
                {docs.map((doc, index) => (
                    <div key={index} className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-bold mb-4">{`${doc.metadata.source}`}</h2>
                        {/* <p>{doc.text}</p>
                        <div className="mt-4 text-sm text-gray-500">
                            <p>{`Source: ${doc.metadata.source}`}</p>
                            <p>{`Page Number: ${doc.metadata.page_number + 1}`}</p>
                        </div> */}
                        <p>{renderDocumentText(doc.text)}</p>
                        {!showFullDocument && (
                            <button
                                className="text-blue-500 font-medium mt-2 hover:text-blue-700 focus:outline-none"
                                onClick={toggleShowFullDocument}
                            >
                                Show More
                            </button>
                        )}
                        {showFullDocument && (
                            <button
                                className="text-blue-500 font-medium mt-2 hover:text-blue-700 focus:outline-none"
                                onClick={toggleShowFullDocument}
                            >
                                See Less
                            </button>
                        )}
                        <div className="mt-4 text-sm text-gray-500">
                            {/* <p>{`Source: ${doc.metadata.source}`}</p> */}
                            <p>{`Page Number: ${doc.metadata.page_number + 1}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder='Type Something...'
                    style={{ width: '600px' }}
                    className="border border-gray-300 rounded-l px-4 w-300 py-2 focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    style={{ backgroundColor: '#0C0F35' }}
                    className="text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none"
                >
                    Search
                </button>
            </div>
            {renderAnswerSection()}
            {renderCards()}
        </div>
    );
};

export default PolicyPage;
