import DataTable from '../components/DataTable';

const PackingList = () => {
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    {
      key: 'actions',
      header: 'Actions',
      render: () => (
        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700">
          View
        </button>
      ),
    },
  ];

  const data = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Charlie', age: 42 },
  ];

  return (
    <div>
      <h1>Packing List</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PackingList;
