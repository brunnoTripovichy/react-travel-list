import DataTable from '../components/DataTable';
import Header1 from '../components/Header1';
import { data, type Item } from './data.';
import RemoveItem from './RemoveItem';

const PackingList = () => {
  const columns = [
    {
      key: 'packed',
      header: 'Packed?',
      render: (row: Item) => (row.packed ? '✅' : '❌'),
    },
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
    { key: 'quantity', header: 'Quantity' },
    {
      key: 'actions',
      header: 'Actions',
      render: () => <RemoveItem />,
    },
  ];

  return (
    <div>
      <Header1 className="mb-2">Packing List</Header1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PackingList;
