import SimpleModuleTemplate from './SimpleModuleTemplate';

function InventoryStockOptimization() {
  return (
    <SimpleModuleTemplate
      title="Inventory stock optimization"
      summary="Spot low-stock pressure, reorder timing, and warehouse balancing in a stable view."
      stats={[
        { label: 'Low stock SKUs', value: '18' },
        { label: 'Overstock alerts', value: '6' },
        { label: 'Reorder this week', value: '9' },
      ]}
    />
  );
}

export default InventoryStockOptimization;
