import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const StudentProfile = () => {
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
    transcriptUrl: ''
  });

  useEffect(() => {
    axios.get('/api/student-profile')
      .then(response => setStudentData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <div>
        <h2>About</h2>
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
        <Link to="/edit-profile">
          <button>Edit Profile</button>
        </Link>
      </div>
    </div>
  );
};

const EditStudentProfile = () => {
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
    transcriptUrl: ''
  });

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
        navigate('/'); // Navigate back to the profile page
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
    <div className="container">
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

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <StudentProfile />
      <EditStudentProfile />
    </div>
  );
};

export default App;

// CSS code (should be included in the same JSX file using a <style> tag)
<style>
.container{
  max-width:800px;
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
</style>
