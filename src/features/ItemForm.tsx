import { useCallback, useState } from 'react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Form from '../components/Form';
import Header3 from '../components/Header3';
import InputText from '../components/InputText';
import type { Item } from './data.';

interface ItemFormProps {
  onAddItem: (item: Item) => void; // Callback function from parent
}

const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<number | undefined>(undefined);

  const handleSubmit = useCallback(() => {
    if (!name.trim()) return;

    // Create new item object
    const newItem: Item = {
      id: Math.random().toString(36).substring(2, 9), // Unique ID
      name,
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem); // Send data to parent

    // Clear form fields
    setName('');
    setDescription('');
    setQuantity(undefined);
  }, [description, name, onAddItem, quantity]);

  return (
    <Form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 ...">
          <Header3>Add an Item</Header3>
        </div>

        <div className="...">
          <InputText
            id="name"
            label="Name"
            placeholder="Enter a name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="...">
          <InputText
            id="description"
            label="Description"
            placeholder="Enter a description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="...">
          <Dropdown
            id="quantity"
            label="Quantity"
            options={[
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
              { value: 6, label: '6' },
              { value: 7, label: '7' },
              { value: 8, label: '8' },
              { value: 9, label: '9' },
              { value: 10, label: '10' },
            ]}
            value={quantity}
            placeholder="Select a quantity"
            onChange={(value) => setQuantity(value)}
          />
        </div>

        <div className="col-span-2 col-start-2 ... flex justify-end">
          <Button type="submit" variant="secondary">
            Add Item
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ItemForm;
