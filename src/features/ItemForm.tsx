import Form from '../components/Form';
import Header3 from '../components/Header3';

const ItemForm = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()}>
      <Header3>Add an Item</Header3>
      <input type="text" />
      <button type="submit">Add</button>
    </Form>
  );
};

export default ItemForm;
