import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import './StudentProfilePage.css';

const StudentProfilePage = () => {
  const [studentData, setStudentData] = useState({
    fullName: '',
    gender: '',
    passportStatus: '',
    rollNo: '',
    department: '',
    yearOfStudy: '',
    cgpa: '',
    phoneNumber: '',
    email: '',
    cvUrl: '',
    transcriptUrl: '',
    profilePictureUrl: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/student-profile')
      .then(response => setStudentData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const formData = new FormData();
    formData.append('file', files[0]);

    axios.post(`/api/upload/${name}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        setStudentData(prevState => ({
          ...prevState,
          [`${name}Url`]: response.data.url
        }));
      })
      .catch(error => console.error('Error uploading file:', error));
  };

  const handleSave = () => {
    axios.post('/api/update-student-profile', studentData)
      .then(response => {
        console.log('Data saved successfully');
        setIsEditing(false);
      })
      .catch(error => console.error('Error saving data:', error));
  };

  const handlePassportStatusChange = (status) => {
    setStudentData(prevState => ({
      ...prevState,
      passportStatus: status
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {isEditing ? (
          <>
            <div>
              <h2>About</h2>
              <label>
                Full name:
                <input type="text" name="fullName" value={studentData.fullName} onChange={handleChange} />
              </label>
              <label>
                Gender:
                <input type="text" name="gender" value={studentData.gender} onChange={handleChange} />
              </label>
              <label>
                Passport Status:
                <div>
                  <button
                    className={`passport-button ${studentData.passportStatus === 'Having' ? 'selected' : ''}`}
                    onClick={() => handlePassportStatusChange('Having')}
                  >
                    Having
                  </button>
                  <button
                    className={`passport-button ${studentData.passportStatus === 'Not Having' ? 'selected' : ''}`}
                    onClick={() => handlePassportStatusChange('Not Having')}
                  >
                    Not Having
                  </button>
                  <button
                    className={`passport-button ${studentData.passportStatus === 'In Process' ? 'selected' : ''}`}
                    onClick={() => handlePassportStatusChange('In Process')}
                  >
                    In Process
                  </button>
                </div>
              </label>
              <label>
                Profile Picture:
                <input type="file" name="profilePicture" onChange={handleFileChange} />
              </label>
              {studentData.profilePictureUrl && <img src={studentData.profilePictureUrl} alt="Profile" className="profileImage" />}
            </div>
            <div>
              <h2>Academic Details</h2>
              <label>
                Roll No.:
                <input type="text" name="rollNo" value={studentData.rollNo} onChange={handleChange} />
              </label>
              <label>
                Department/Centre/School:
                <input type="text" name="department" value={studentData.department} onChange={handleChange} />
              </label>
              <label>
                Year of Study:
                <input type="text" name="yearOfStudy" value={studentData.yearOfStudy} onChange={handleChange} />
              </label>
              <label>
                CGPA:
                <input type="text" name="cgpa" value={studentData.cgpa} onChange={handleChange} />
              </label>
            </div>
            <div>
              <h2>Contact Details</h2>
              <label>
                Phone Number:
                <input type="text" name="phoneNumber" value={studentData.phoneNumber} onChange={handleChange} />
              </label>
              <label>
                Alternate Email:
                <input type="text" name="email" value={studentData.email} onChange={handleChange} />
              </label>
            </div>
            <div>
              <h2>Uploads</h2>
              <label>
                Upload CV:
                <input type="file" name="cv" onChange={handleFileChange} />
              </label>
              <label>
                Upload Transcript:
                <input type="file" name="transcript" onChange={handleFileChange} />
              </label>
            </div>
            <div className="button-container">
              <button onClick={handleSave}>Save Profile</button>
            </div>
          </>
        ) : (
          <>
            <div>
              {studentData.profilePictureUrl ? <img src={studentData.profilePictureUrl} alt="Profile" className="profileImage" /> : <p>Loading image...</p>}
              <p>Full name: {studentData.fullName}</p>
              <p>Gender: {studentData.gender}</p>
              <p>Passport Status: {studentData.passportStatus}</p>
            </div>
            <div>
              <h2>Academic Details</h2>
              <p>Roll No.: {studentData.rollNo}</p>
              <p>Department/Centre/School: {studentData.department}</p>
              <p>Year of Study: {studentData.yearOfStudy}</p>
              <p>CGPA: {studentData.cgpa}</p>
            </div>
            <div>
              <h2>Contact Details</h2>
              <p>Phone Number: {studentData.phoneNumber}</p>
              <p>Alternate Email: {studentData.email}</p>
            </div>
            <div>
              <h2>Uploads</h2>
              {studentData.cvUrl && <p><a href={studentData.cvUrl} target="_blank" rel="noopener noreferrer">View CV</a></p>}
              {studentData.transcriptUrl && <p><a href={studentData.transcriptUrl} target="_blank" rel="noopener noreferrer">View Transcript</a></p>}
            </div>
            <div className="button-container">
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
          border-bottom: 2px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 20px;
        }

        label, p {
          margin-bottom: 10px;
          display: block;
        }

        input {
          padding: 8px;
          margin-bottom: 10px;
          width: calc(100% - 16px);
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        .button-container {
          margin-top: 20px;
          text-align: center;
        }

        .profileImage {
          display: block;
          width: 100px;
          height: 100px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin: 20px auto;
        }

        .passport-button {
          padding: 8px 16px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
        }

        .passport-button.selected {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default StudentProfilePage;

