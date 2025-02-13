import type React from 'react';
import Button from '../components/Button';

export interface RemoveItemProps {
  onRemoveItem: () => void;
}

const RemoveItem: React.FC<RemoveItemProps> = ({ onRemoveItem }) => {
  return (
    <Button
      variant="danger"
      size="sm"
      ariaLabel="Remove"
      onClick={onRemoveItem}
    >
      Remove
    </Button>
  );
};

export default RemoveItem;
