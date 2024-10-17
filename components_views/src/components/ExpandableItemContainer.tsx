import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ExpandableItemContainer.css';

interface ExpandableItem {
  title: string;
  content: React.ReactNode;
}

interface ExpandableItemContainerProps {
  items: ExpandableItem[];
  containerTitle?: string;
}

const ExpandableItemContainer: React.FC<ExpandableItemContainerProps> = ({ items, containerTitle }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="expandable-container">
      {containerTitle && <h2 className="container-title">{containerTitle}</h2>}
      <div className="expandable-grid">
        {items.map((item, index) => (
          <div key={index} className="expandable-item">
            <button
              className="expandable-title"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              {item.title}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="expandable-content">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableItemContainer;