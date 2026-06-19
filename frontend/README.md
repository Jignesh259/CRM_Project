# Frontend Structure

The active frontend is now organized into feature-based folders:

- `src/app/`: app entry and route wiring
- `src/features/auth/`: login, register, OTP, reset flows
- `src/features/dashboard/`: executive overview page
- `src/features/analytics/`: analytics page
- `src/features/activity/`: activity feed page
- `src/features/modules/`: dynamic module view and reusable module template
- `src/shared/api/`: API client and shared response types
- `src/shared/layouts/`: app shell and auth shell
- `src/shared/styles/`: reusable UI styling

Older generated screens remain under `src/page/` as legacy artifacts until they are migrated feature by feature.
