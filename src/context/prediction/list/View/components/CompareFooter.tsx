import React from 'react';
import { Button, Badge } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import './CompareFooter.css';

interface CompareFooterProps {
  count: number;
  isVisible: boolean;
  onCompare: () => void;
}

const CompareFooter: React.FC<CompareFooterProps> = ({ count, isVisible, onCompare }) => {
  if (!isVisible) return null;

  return (
    <div className="compare-footer">
      <div className="compare-content">
        <Badge count={count} size="small" offset={[10, 0]}>
          <CarOutlined style={{ fontSize: 24, color: '#405FF2' }} />
        </Badge>
        <span className="compare-text">{count} vehículo{count !== 1 ? 's' : ''} seleccionado{count !== 1 ? 's' : ''}</span>
        <Button
          type="primary"
          onClick={onCompare}
          disabled={count !== 2}
        >
          Comparar
        </Button>
      </div>
    </div>
  );
};

export default CompareFooter;
