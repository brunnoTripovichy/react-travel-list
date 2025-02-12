import Checkbox from '../components/Checkbox';
import DataTable from '../components/DataTable';
import Header1 from '../components/Header1';
import { data, type Item } from './data.';
import ItemForm from './ItemForm';
import RemoveItem from './RemoveItem';

const PackingList = () => {
  const columns = [
    {
      key: 'packed',
      header: 'Packed?',
      render: (row: Item) => (
        <Checkbox
          id={row.id}
          label=""
          checked={row.packed}
          onChange={(checked) => console.log(checked)}
        />
      ),
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
      <Header1 className="mb-6">Packing List</Header1>

      <div className="mb-4">
        <ItemForm />
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PackingList;
