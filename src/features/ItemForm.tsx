import Dropdown from '../components/Dropdown';
import Form from '../components/Form';
import Header3 from '../components/Header3';
import InputText from '../components/InputText';

const ItemForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Header3>Add an Item</Header3>

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

      <InputText id="name" label="Name" />

      <button type="submit">Add</button>
    </Form>
  );
};

export default ItemForm;
