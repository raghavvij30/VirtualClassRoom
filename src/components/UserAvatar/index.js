import React from 'react';
import './styles.css';

const UserAvatar = ({ name, image }) => (
  <div className="user-avatar">
    <img src={image} alt={name} className="avatar-image" />
    <span className="avatar-name">{name}</span>
  </div>
);

export default UserAvatar;
