import SimpleModuleTemplate from './SimpleModuleTemplate';

function AddNewProduct() {
  return (
    <SimpleModuleTemplate
      title="Add new product"
      summary="Create product records with cleaner data entry and room for later backend validation."
      stats={[
        { label: 'Draft products', value: '14' },
        { label: 'Awaiting pricing', value: '5' },
        { label: 'Ready to publish', value: '23' },
      ]}
    />
  );
}

export default AddNewProduct;
