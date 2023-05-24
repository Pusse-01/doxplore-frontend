
import React, { useState } from 'react';
import { FiUpload, FiX } from 'react-icons/fi';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCancelClick = () => {
    setFile(null);
  };

  function convertPdfToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = true
      console.log(response)
      //response.ok
      // if (response) {
      //   alert('File uploaded successfully');
      //   setUploadedFiles((prevFiles) => [...prevFiles, file]);
      //   console.log(uploadedFiles)
      //   setFile(null);
      // }
      if (file) {
        convertPdfToBase64(file)
          .then((base64String) => {
            console.log(file.name);
            // Do something with the base64String, such as sending it to a server
            fetch('http://127.0.0.1:5000/upload', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                base64String: base64String,
                folderPath: '',
                filename: file.name
              }),
            })
              .then((response) => {
                if (response.ok) {
                  console.log('PDF uploaded successfully');
                } else {
                  throw new Error('Error uploading PDF');
                }
              })
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
        // window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = (index) => {
    const newFiles = [...uploadedFiles];
    newFiles.splice(index, 1);
    setUploadedFiles(newFiles);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">

      <h1 className="text-2xl font-bold mb-4">Upload Your Documents</h1>
      <p className='mb-8'>Upload documents or add links to your knowledge base to train Doxplore on your own data.</p>

      <div className="relative bg-gray-100 rounded-md p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center bg-white rounded-md shadow-md p-12">
            {file ? (
              <div>
                <p className="text-grey-500">{file.name} selected</p>
                <div className="mt-4 flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
                  >
                    Upload
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center cursor-pointer"
                >
                  <FiUpload className="text-4xl text-gray-400 mb-4" />
                  <span className="text-gray-400">Click or drag file to upload</span>
                  <span className="text-gray-400">Up to 100MB in size. PDF, PPT, PPTX, DOC, DOCX</span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileInputChange}
                />
              </>
            )}
          </div>
        </form>
      </div>

      {/* {uploadedFiles.length > 0 && (
        <div className='mt-20'>
          <h2 className="text-xl font-bold mb-2">Uploaded Documents:</h2>
          <ul className="list-disc pl-8">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex items-center">
                <span>{file.name}</span>
                <FiX
                  className="text-red-500 ml-10 cursor-pointer"
                  onClick={() => handleDeleteClick(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default DocumentUpload;
