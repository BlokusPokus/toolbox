import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="benefit-card">
      <a
        href={link}
        className="benefit-content"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="benefit-text">
          <h3 className="benefit-title">{title}</h3>
          <p className="benefit-description">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;