// import React from 'react'; 
import './index.css'
const UserProfile = (props) => {
  const { userDetails } = props;
  const {  nam, role,url ,className} = userDetails;

  return (
    <div className={`container ${className}`}>
      <div>
        <h2>{nam}</h2>
        <p>{role}</p>
      </div>
      <img src={url} alt={nam}  className="image"/>
    </div>
  );
};

export default UserProfile;
