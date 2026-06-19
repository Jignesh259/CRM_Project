import SimpleModuleTemplate from './SimpleModuleTemplate';

function LeadManagementBoard() {
  return (
    <SimpleModuleTemplate
      title="Lead management board"
      summary="Track lead movement and assign next actions without the broken export markup."
      stats={[
        { label: 'New leads', value: '48' },
        { label: 'Qualified', value: '21' },
        { label: 'Needs follow-up', value: '13' },
      ]}
    />
  );
}

export default LeadManagementBoard;
