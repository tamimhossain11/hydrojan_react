import React from 'react';
import { Link } from 'react-router-dom';
import SocialShare from './SocialShare';

const SingleLeader = ({ speaker }) => {
  const { id, thumb, name, designation } = speaker;

  return (
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <img 
            src={`/src/assets/images/teams/${thumb}`} 
            alt={name} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/path/to/default/image.png';
            }}
          />
        </figure>
      </div>
      <div className="info-box">
        <div className="inner">
          <h4 className="name">
            <Link to={`/speakers-detail/${id}`}>{name}</Link>
          </h4>
          <span className="designation">{designation}</span>
          <ul className="social-links social-icon-colored">
            <SocialShare name={name} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleLeader;