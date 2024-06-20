// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './EditStudentProfile.css';

// const EditStudentProfile = () => {
//   const [studentData, setStudentData] = useState({
//     fullName: '',
//     gender: '',
//     passportStatus: '',
//     rollNo: '',
//     department: '',
//     yearOfStudy: '',
//     cgpa: '',
//     phoneNumber: '',
//     email: ''
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get('/api/student-profile')
//       .then(response => setStudentData(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudentData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSave = () => {
//     axios.post('/api/update-student-profile', studentData)
//       .then(response => {
//         console.log('Data saved successfully');
//         navigate('/'); // Navigate back to the profile page
//       })
//       .catch(error => console.error('Error saving data:', error));
//   };

//   const handlePassportStatusChange = (status) => {
//     setStudentData(prevState => ({
//       ...prevState,
//       passportStatus: status
//     }));
//   };

//   return (
//     <div className="container">
//       <div>
//         <h2>About</h2>
//         <label>
//           Full name:
//           <input type="text" name="fullName" value={studentData.fullName} onChange={handleChange} />
//         </label>
//         <label>
//           Gender:
//           <input type="text" name="gender" value={studentData.gender} onChange={handleChange} />
//         </label>
//         <label>
//           Passport Status:
//           <div>
//             <button
//               className={`passport-button ${studentData.passportStatus === 'Having' ? 'selected' : ''}`}
//               onClick={() => handlePassportStatusChange('Having')}
//             >
//               Having
//             </button>
//             <button
//               className={`passport-button ${studentData.passportStatus === 'Not Having' ? 'selected' : ''}`}
//               onClick={() => handlePassportStatusChange('Not Having')}
//             >
//               Not Having
//             </button>
//             <button
//               className={`passport-button ${studentData.passportStatus === 'In Process' ? 'selected' : ''}`}
//               onClick={() => handlePassportStatusChange('In Process')}
//             >
//               In Process
//             </button>
//           </div>
//         </label>
//       </div>

//       <div>
//         <h2>Academic Details</h2>
//         <label>
//           Roll No.:
//           <input type="text" name="rollNo" value={studentData.rollNo} onChange={handleChange} />
//         </label>
//         <label>
//           Department/Centre/School:
//           <input type="text" name="department" value={studentData.department} onChange={handleChange} />
//         </label>
//         <label>
//           Year of Study:
//           <input type="text" name="yearOfStudy" value={studentData.yearOfStudy} onChange={handleChange} />
//         </label>
//         <label>
//           CGPA:
//           <input type="text" name="cgpa" value={studentData.cgpa} onChange={handleChange} />
//         </label>
//       </div>

//       <div>
//         <h2>Contact Details</h2>
//         <label>
//           Phone Number:
//           <input type="text" name="phoneNumber" value={studentData.phoneNumber} onChange={handleChange} />
//         </label>
//         <label>
//           Alternate Email:
//           <input type="text" name="email" value={studentData.email} onChange={handleChange} />
//         </label>
//       </div>

//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default EditStudentProfile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditStudentProfile.css';

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

export default EditStudentProfile;
