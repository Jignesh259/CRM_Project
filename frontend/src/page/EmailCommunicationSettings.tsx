import SimpleModuleTemplate from './SimpleModuleTemplate';

function EmailCommunicationSettings() {
  return (
    <SimpleModuleTemplate
      title="Email communication settings"
      summary="Manage sender profiles, notification rules, and outbound communication defaults."
      stats={[
        { label: 'Connected inboxes', value: '3' },
        { label: 'Templates live', value: '12' },
        { label: 'Bounce rate', value: '0.8%' },
      ]}
    />
  );
}

export default EmailCommunicationSettings;
