"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const ProfProfilePage = () => {
  const [profData, setProfData] = useState({
    fullName: "",
    university: "",
    projectoffered: "",
    phoneNumber: "",
    email: "",
    profilePictureUrl: "",
  });
  const [imageUrl, setImageUrl] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    axios
      .get("/api/prof-profile")
      .then((response) => setProfData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("/api/prof-profile-image");
        if (response.status === 200) {
          setImageUrl(response.data.imageUrl);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const formData = new FormData();
    formData.append("file", files[0]);

    axios
      .post(`/api/upload/${name}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setProfData((prevState) => ({
          ...prevState,
          [`${name}Url`]: response.data.url,
        }));
      })
      .catch((error) => console.error("Error uploading file:", error));
  };

  const handleSave = () => {
    axios
      .post("/api/update-prof-profile", profData)
      .then((response) => {
        console.log("Data saved successfully");
        setIsEditing(false);
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <div className="container">
      {isEditing ? (
        <>
          <div>
            <h2>About</h2>
            <label>
              Full name:
              <input
                type="text"
                name="fullName"
                value={profData.fullName}
                onChange={handleChange}
              />
            </label>
            <label>
              Profile Picture:
              <input
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
              />
            </label>
            {profData.profilePictureUrl && (
              <img
                src={profData.profilePictureUrl}
                alt="Profile"
                className="profileImage"
              />
            )}
          </div>
          <div>
            <h2>Academic Details</h2>
            <label>
              University:
              <input
                type="text"
                name="university"
                value={profData.university}
                onChange={handleChange}
              />
            </label>
            <label>
              Project offered:
              <input
                type="text"
                name="projectoffered"
                value={profData.projectoffered}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <h2>Contact Details</h2>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={profData.phoneNumber}
                onChange={handleChange}
              />
            </label>
            <label>
              Alternate Email:
              <input
                type="text"
                name="email"
                value={profData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="buttonContainer">
            <button onClick={handleSave}>Save Profile</button>
          </div>
        </>
      ) : (
        <>
          {imageUrl ? (
            <img src={imageUrl} alt="Profile" className="passportImage" />
          ) : (
            <p>Loading image...</p>
          )}
          <div>
            <p>Full name: {profData.fullName}</p>
          </div>
          <div>
            <h2>Academic Details</h2>
            <p>University: {profData.university}</p>
            <p>Project offered: {profData.projectoffered}</p>
          </div>
          <div>
            <h2>Contact Details</h2>
            <p>Phone Number: {profData.phoneNumber}</p>
            <p>Alternate Email: {profData.email}</p>
          </div>
          <div className="buttonContainer">
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        </>
      )}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-width: 20px;
        }

        h2 {
          border-bottom: 5px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 20px;
        }

        label,
        p {
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
          background-color: #00ff1168;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #00b3488a;
        }

        .buttonContainer {
          margin-top: 20px;
          text-align: center;
        }

        .passportImage,
        .profileImage {
          display: block;
          width: 100px;
          height: 100px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
};

export default ProfProfilePage;