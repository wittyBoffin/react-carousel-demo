import React from 'react';

interface CardProps {
  key: number;
  image: string;
}

const Card: React.FC<CardProps> = ({ key, image }) => {

  return (
    <li className="carousel-card carousel-li" key={key}>
      <img src={image} alt="" />
    </li>
  );
};

export default Card;
