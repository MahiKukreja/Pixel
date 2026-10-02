import React from 'react';
import DesktopIcon from './DesktopIcon';

const SectionBox = ({ title, subtitle, items, onIconClick, style }) => {
  return (
    <div className="section-box" style={style}>
      <div className="section-box-header">
        <h2 className="section-box-title"><span aria-hidden="true">▸ </span>{title}</h2>
        {subtitle && <p className="section-box-subtitle">{subtitle}</p>}
      </div>
      <div className="section-box-icons">
        {items.map((item) => (
          <DesktopIcon
            key={item.id}
            project={item}
            onClick={onIconClick}
            inline={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionBox;
