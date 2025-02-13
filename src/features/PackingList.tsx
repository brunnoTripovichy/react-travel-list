import { useCallback, useMemo, useState } from 'react';
import Checkbox from '../components/Checkbox';
import DataTable from '../components/DataTable';
import Header1 from '../components/Header1';
import { data, type Item } from './data.';
import ItemForm from './ItemForm';
import RemoveItem from './RemoveItem';
import ItemsSummary from './ItemsSummary';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

const PackingList = () => {
  // Items state
  const [items, setItems] = useState<Item[]>(data);

  // Sort state
  const [sort, setSort] = useState<string>('');

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

  // Callback to clear up items
  const handleClearItems = useCallback(() => {
    setItems([]);
  }, []);

  // Compute sorted items
  const sortedItems = useMemo<Item[]>(() => {
    if (sort === 'name') {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === 'description') {
      return [...items].sort((a, b) =>
        (a.description ?? '').localeCompare(b.description ?? ''),
      );
    }
    if (sort === 'quantity') {
      return [...items].sort((a, b) => (a.quantity ?? 0) - (b.quantity ?? 0));
    }
    return items;
  }, [items, sort]);

  // Available sort options
  const sortOptions = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'description', label: 'Sort by Description' },
    { value: 'quantity', label: 'Sort by Quantity' },
  ];

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

      <div className="mb-10">
        <DataTable columns={columns} data={sortedItems} />

        {/* Table actions */}
        <div className="grid grid-cols-4 gap-4 mt-4 flex items-end">
          {/* Sort Dropdown */}
          <div className="col-start-2">
            <Dropdown
              id="sort"
              label="Sort by:"
              options={sortOptions}
              value={sort}
              onChange={(value) => setSort(value)}
              placeholder="Select a sort option..."
            />
          </div>

          {/* Clear list */}
          <div className="col-start-3 flex justify-center">
            <Button
              variant="danger"
              onClick={handleClearItems}
              size="sm"
              ariaLabel="Clear List"
            >
              Clear List
            </Button>
          </div>
        </div>
      </div>

      <ItemsSummary items={items} />
    </div>
  );
};

export default PackingList;
