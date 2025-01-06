import React from 'react';
import './ShopCard.css';

interface ShopCardProps {
  name: string;
    image: string;
      onClick: () => void;
      }

      const ShopCard: React.FC<ShopCardProps> = ({ name, image, onClick }) => {
        return (
            <div className="shop-card" onClick={onClick}>
                  <img src={image} alt={`${name} shop`} className="shop-card-image" />
                        <h3 className="shop-card-name">{name}</h3>
                            </div>
                              );
                              };

                              export default ShopCard;