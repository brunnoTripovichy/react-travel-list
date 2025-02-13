import { useCallback } from 'react';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Form from '../components/Form';
import Header3 from '../components/Header3';
import InputText from '../components/InputText';

const ItemForm = () => {
  const handleSubmit = useCallback((event) => {
    console.log('Form submitted', event);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 ...">
          <Header3>Add an Item</Header3>
        </div>

        <div className="...">
          <InputText id="name" label="Name" placeholder="Enter a name" />
        </div>

        <div className="...">
          <InputText
            id="description"
            label="Description"
            placeholder="Enter a description"
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
            value={null}
            placeholder="Select a quantity"
            onChange={(value) => console.log(value)}
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
