import { useEffect, useState } from 'react';
import { api, type ActivityItem } from '../api/api';
import AppLayout from './AppLayout';

function ActivityFeed() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getActivities()
      .then(setActivities)
      .catch((activityError) =>
        setError(activityError instanceof Error ? activityError.message : 'Unable to load activity feed.'),
      );
  }, []);

  return (
    <AppLayout
      title="Activity feed"
      subtitle="A unified stream of operational updates, team actions, and customer-facing events."
    >
      {error ? <div className="message error">{error}</div> : null}
      <section className="glass-card panel">
        <div className="activity-list">
          {activities.map((activity) => (
            <article className="activity-item" key={activity.id}>
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
              <div className="tag-row">
                <span className="tag">{activity.type}</span>
                <span className="tag">{activity.time}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}

export default ActivityFeed;
