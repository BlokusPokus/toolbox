import React from 'react';
import './GridContainer.css';

interface GridItem {
  title: string;
  content: React.ReactNode;
}

interface GridContainerProps {
  items: GridItem[];
  containerTitle?: string;
}

const GridContainer: React.FC<GridContainerProps> = ({ items, containerTitle }) => {
  return (
    <div className="grid-container">
      {containerTitle && <h2 className="container-title">{containerTitle}</h2>}
      <div className="grid-layout">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            <h3 className="item-title">{item.title}</h3>
            <div className="item-content">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridContainer;