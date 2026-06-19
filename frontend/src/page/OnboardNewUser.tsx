import SimpleModuleTemplate from './SimpleModuleTemplate';

function OnboardNewUser() {
  return (
    <SimpleModuleTemplate
      title="Onboard new user"
      summary="Set up role-based access, invite details, and activation progress with a clean fallback screen."
      stats={[
        { label: 'Pending invites', value: '7' },
        { label: 'Admins', value: '4' },
        { label: 'Sales users', value: '19' },
      ]}
    />
  );
}

export default OnboardNewUser;
