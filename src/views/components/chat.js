// import { useState } from 'react';

// function ChatInterface() {
//   const [selectedDoc, setSelectedDoc] = useState(null);
  
//   const handleDocSelection = (doc) => {
//     setSelectedDoc(doc);
//   };

//   return (
//     <div className="flex flex-row h-screen w-screen">
//       {/* Sidebar */}
//       <div className="flex-none w-1/3 bg-gray-100">
//         <h2 className="text-lg font-semibold mb-4 px-6 pt-6">Documents</h2>
//         <ul className="divide-y divide-gray-200">
//           <li className="px-6 py-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleDocSelection("Doc 1")}>
//             <span className="block font-medium">Doc 1</span>
//             <span className="text-gray-500 block">Description of Doc 1</span>
//           </li>
//           <li className="px-6 py-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleDocSelection("Doc 2")}>
//             <span className="block font-medium">Doc 2</span>
//             <span className="text-gray-500 block">Description of Doc 2</span>
//           </li>
//           <li className="px-6 py-4 hover:bg-gray-200 cursor-pointer" onClick={() => handleDocSelection("Doc 3")}>
//             <span className="block font-medium">Doc 3</span>
//             <span className="text-gray-500 block">Description of Doc 3</span>
//           </li>
//         </ul>
//       </div>
      
//       {/* Main Chat Interface */}
//       <div className="flex-grow bg-white p-6">
//         {selectedDoc ? (
//           <div>
//             <h2 className="text-lg font-semibold mb-4">{selectedDoc}</h2>
//             {/* Chat messages */}
//             <div className="flex flex-col space-y-2">
//               <div className="flex flex-row items-center space-x-2">
//                 <div className="h-8 w-8 rounded-full bg-gray-300"></div>
//                 <div className="bg-gray-100 rounded-xl p-2">
//                   <p>Hi, I'm ChatGPT. How can I help you today?</p>
//                 </div>
//               </div>
//               <div className="flex flex-row-reverse items-center space-x-2">
//                 <div className="bg-gray-200 rounded-xl p-2">
//                   <p>Can you tell me more about this document?</p>
//                 </div>
//                 <div className="h-8 w-8 rounded-full bg-gray-300"></div>
//               </div>
//               <div className="flex flex-row items-center space-x-2">
//                 <div className="h-8 w-8 rounded-full bg-gray-300"></div>
//                 <div className="bg-gray-100 rounded-xl p-2">
//                   <p>Sure! This document is about XYZ. What would you like to know?</p>
//                 </div>
//               </div>
//               {/* Add more chat messages here */}
//             </div>
//           </div>
//         ) : (
//           <p m-100>Please select a document to start chatting</p>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';

function ChatInterface() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleDocSelect = (doc) => {
    setSelectedDoc(doc);
    setMessages([]);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    
    setMessages([...messages, { user: 'You', text: message }]);
    // setMessages([...messages, { user: 'Bot', text: "Hi! How can I help you today?" }]);
    event.target.elements.message.value = '';
  };

  return (
    <div className="flex flex-row w-screen h-screen font-sans">
      {/* Sidebar */}
      <div className="bg-gray-200 w-1/4 px-4 py-8">
        <h2 className="text-lg font-medium mb-4">Documents</h2>
        <ul className="space-y-4">
          <li>
            <button
              className="block w-full py-2 text-left hover:bg-gray-300"
              onClick={() => handleDocSelect('Document 1')}
            >
              Document 1
            </button>
          </li>
          <li>
            <button
              className="block w-full py-2 text-left hover:bg-gray-300"
              onClick={() => handleDocSelect('Document 2')}
            >
              Document 2
            </button>
          </li>
          <li>
            <button
              className="block w-full py-2 text-left hover:bg-gray-300"
              onClick={() => handleDocSelect('Document 3')}
            >
              Document 3
            </button>
          </li>
        </ul>
      </div>

      {/* Main Chat Window */}
      <div className="bg-gray-100 flex-1 flex flex-col justify-between">
        {/* Chat Messages */}
        <div className="overflow-y-auto p-4">
          <h2 className="text-lg font-medium mb-4">{selectedDoc || 'Select a document'}</h2>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex flex-col mb-2 ${
                message.user === 'You' ? 'items-end' : 'items-start'
              }`}
            >
              <span className="text-gray-500 text-xs">{message.user}</span>
              <div
                className={`inline-block rounded-lg px-3 py-1 ${
                  message.user === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <form onSubmit={handleSendMessage}>
          <div className="flex items-center justify-center border-t border-gray-300 py-2 px-4">
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-lg py-2 px-4"
            />
            <button
              type="submit"
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-4"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ChatInterface;
