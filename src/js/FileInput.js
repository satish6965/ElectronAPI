// Your React component file

import React, { useState } from 'react';
const FileInputExample = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Submit clicked');
  };

  const handleDownload = () => {
    // Handle download logic here
    console.log('Download clicked');
  };

  return (
    <div>
      <div className="file-input-wrapper">
        <label className="file-input-label">
          Choose a file
          <input
            type="file"
            className="file-input"
            onChange={handleFileChange}
          />
        </label>
        {selectedFile && (
          <div className="file-name">Selected file: {selectedFile.name}</div>
        )}
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      <button className="download-button">
        Download
      </button>
    </div>
  );
};

export default FileInputExample;
