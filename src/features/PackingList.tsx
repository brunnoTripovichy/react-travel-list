import { useCallback, useState } from 'react';
import Checkbox from '../components/Checkbox';
import DataTable from '../components/DataTable';
import Header1 from '../components/Header1';
import { data, type Item } from './data.';
import ItemForm from './ItemForm';
import RemoveItem from './RemoveItem';
import ItemsSummary from './ItemsSummary';

const PackingList = () => {
  const [items, setItems] = useState<Item[]>(data);

  // Callback to Add a New Item
  const handleAddItem = useCallback((newItem: Item): void => {
    setItems((prevItems) => [...prevItems, newItem]);
  }, []);

  // Callback to Remove an Item
  const handleRemoveItem = useCallback((id: string): void => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  // Callback to Update an Item packed status
  const handleUpdatePacked = useCallback(
    (id: string, packed: boolean): void => {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, packed } : item)),
      );
    },
    [],
  );

  const columns = [
    {
      key: 'packed',
      header: 'Packed?',
      render: (row: Item) => (
        <Checkbox
          id={row.id}
          label=""
          checked={row.packed}
          onChange={(checked: boolean) => handleUpdatePacked(row.id, checked)}
        />
      ),
    },
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
    { key: 'quantity', header: 'Quantity' },
    {
      key: 'actions',
      header: 'Actions',
      render: (row: Item) => (
        <RemoveItem onRemoveItem={() => handleRemoveItem(row.id)} />
      ),
    },
  ];

  return (
    <div>
      <Header1 className="mb-6">Packing List</Header1>

      {/* Pass `handleAddItem` to ItemForm */}
      <div className="mb-4">
        <ItemForm onAddItem={handleAddItem} />
      </div>

      <div className="mb-4">
        <DataTable columns={columns} data={items} />
      </div>

      <ItemsSummary items={items} />
    </div>
  );
};

export default PackingList;
