import React from 'react';
import { Trash2 } from 'lucide-react';

const Dock = ({ onTrashClick }) => {
  return (
    <div className="dock-container">
      <div className="dock-label">🗑️ Trash</div>
      <div className="dock">
        <button
          type="button"
          className="dock-item dock-trash"
          onClick={onTrashClick}
          title="Rejected content ideas"
          data-testid="trash-can-btn"
          aria-label="Open the bin of rejected content ideas"
        >
          <div className="dock-item-icon">
            <Trash2 size={28} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Dock;
