import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import './Team.css';

interface TeamMember {
  name: string;
  photo: string;
  linkedIn: string;
  facebook: string;
  github: string;
  contact: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'ABCD',
    photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg',
    linkedIn: 'https://www.linkedin.com/in/member1',
    facebook: 'https://www.facebook.com/member1',
    github: 'https://www.github.com/member1',
    contact: '1234567890',
    email: 'abcd32@iitk.ac.in'
  },
  // Add more members as needed
];

const Team: React.FC = () => {
  return (
    <div className="team-box">
      <h2>Developed By</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.photo} alt={member.name} className="team-photo" />
            <div className="hover-info">
              <h3>{member.name}</h3>
              <p>{member.contact}</p>
              <p>{member.email}</p>
              <div className="social-icons">
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
