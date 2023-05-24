import React, { useState, useEffect } from 'react';

const FileList = () => {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchFiles = async () => {
            try {
                const response = await fetch('http://localhost:8000/files');
                const data = await response.json();
                setFiles(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        };

        fetchFiles();
    }, []);

    const handleFileClick = (file) => {
        setSelectedFile(file.base64_string);
    };

    return (
        <div className="container m-6 py-8">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {files.map((file) => (
                        <div
                            key={file.id}
                            className={`bg-white shadow rounded-lg p-2 cursor-pointer my-2 ${selectedFile && selectedFile.id === file.id ? 'border border-blue-500' : ''}`}
                            onClick={() => handleFileClick(file)}
                        >
                            <h2 className="text-sm font-bold mb-2">{file.filename}</h2>
                            <p className="mt-4 text-sm text-gray-500">{file.author}</p>
                        </div>
                    ))}
                </div>
            )}

            {selectedFile && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">{selectedFile.filename}</h2>
                    <iframe
                        src={`data:application/pdf;base64,${selectedFile}`}
                        width="100%"
                        height="600"
                        title="Document"
                    />
                </div>
            )}
        </div>
    );
};

export default FileList;
