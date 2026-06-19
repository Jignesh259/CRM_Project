import SimpleModuleTemplate from './SimpleModuleTemplate';

function InvoiceDocumentPreview() {
  return (
    <SimpleModuleTemplate
      title="Invoice document preview"
      summary="Preview invoice output, approval status, and customer-ready document timing."
      stats={[
        { label: 'Draft invoices', value: '11' },
        { label: 'Awaiting approval', value: '4' },
        { label: 'Sent today', value: '17' },
      ]}
    />
  );
}

export default InvoiceDocumentPreview;
