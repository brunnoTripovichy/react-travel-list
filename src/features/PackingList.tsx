import { useCallback, useState } from 'react';
import Checkbox from '../components/Checkbox';
import DataTable from '../components/DataTable';
import Header1 from '../components/Header1';
import { data, type Item } from './data.';
import ItemForm from './ItemForm';
import RemoveItem from './RemoveItem';

const PackingList = () => {
  const [items, setItems] = useState<Item[]>(data);

  // Callback to Add a New Item
  const handleAddItem = useCallback((newItem: Item): void => {
    setItems((prevItems) => [...prevItems, newItem]);
  }, []);

  const columns = [
    {
      key: 'packed',
      header: 'Packed?',
      render: (row: Item) => (
        <Checkbox
          id={row.id}
          label=""
          checked={row.packed}
          onChange={(checked) =>
            setItems((prevItems) =>
              prevItems.map((item) =>
                item.id === row.id ? { ...item, packed: checked } : item,
              ),
            )
          }
        />
      ),
    },
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
    { key: 'quantity', header: 'Quantity' },
    {
      key: 'actions',
      header: 'Actions',
      render: (row: Item) => <RemoveItem />,
    },
  ];

  return (
    <div>
      <Header1 className="mb-6">Packing List</Header1>

      {/* Pass `handleAddItem` to ItemForm */}
      <div className="mb-4">
        <ItemForm onAddItem={handleAddItem} />
      </div>

      <DataTable columns={columns} data={items} />
    </div>
  );
};

export default PackingList;
