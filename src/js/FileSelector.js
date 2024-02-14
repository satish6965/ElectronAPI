// FileSelectorPage.js

import React, { useState } from 'react';
import '../../src/style.css'

const FileSelector = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [fileRemoved, setFileRemoved] = useState(null);

const removeFile = () =>{
    // setSelectedFile(null);
    // console.log(selectedFile);
    // setFileRemoved(true);
    window.location.reload();
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setDisabled(true);
    setFileRemoved(false);

    // You can perform additional actions with the selected file if needed
    // For example, you might want to upload the file or read its contents.
  };

  const handleSubmit = async() => {
    if (selectedFile) {
        electron.notificationApi.sendNotification("Download available now!");

      // You can perform actions with the selected file here, e.g., upload to a server.
      console.log('Selected file:', selectedFile);
      try {
        const response = await fetch('https://reqres.in/api/users?page=2'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setDisabled(false);
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        console.log(false);
      }
    
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div>
    <div className='form-wrapper'>
      <h1>File Selector for API</h1>
      <div className='input-file-area'>
      <div className="file-input-wrapper">
      <label className="file-input-label">
        Choose a file
        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />
      </label>
      {/* {selectedFile && (
        <div className="file-name">Selected file: {selectedFile.name}</div>
      )} */}
    </div>
     <div className='remove-file'>
        <p onClick={removeFile}><a href='#' className='no-underline'>remove file</a></p>
    </div> 
    </div>
    {/* <div className='button-wrapper'>
    <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      <button className="download-button" disabled={disabled}>
        Download
      </button>
      </div> */}

        <div className='button-wrapper'>
            <button className="button-30" role="button" onClick={handleSubmit}>Submit</button>
            <button className="button-30 download-30" disabled={disabled} role="button">Download</button>
        </div>
    </div>
      {selectedFile && (
        <div className='file-summary'>
          <p>Selected File: {selectedFile.name}</p>
          <p>File Size: {selectedFile.size} bytes</p>
          <p>File Type: {selectedFile.type}</p>
        </div>
      )}
    </div>
  );
};

export default FileSelector;




