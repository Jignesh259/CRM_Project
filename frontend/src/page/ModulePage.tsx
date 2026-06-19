import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api, type ModuleSummary } from '../api/api';
import AppLayout from './AppLayout';

function ModulePage() {
  const { moduleId = 'crm' } = useParams();
  const [moduleSummary, setModuleSummary] = useState<ModuleSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getModule(moduleId)
      .then(setModuleSummary)
      .catch((moduleError) =>
        setError(moduleError instanceof Error ? moduleError.message : 'Unable to load module summary.'),
      );
  }, [moduleId]);

  return (
    <AppLayout
      title={moduleSummary?.title ?? 'Module workspace'}
      subtitle={moduleSummary?.summary ?? 'Loading module summary...'}
      actions={
        <button className="primary-button-inline" type="button">
          Create new record
        </button>
      }
    >
      {error ? <div className="message error">{error}</div> : null}
      <section className="panel-grid">
        {moduleSummary?.stats.map((stat) => (
          <article className="glass-card metric-card" key={stat.label}>
            <p>{stat.label}</p>
            <h3>{stat.value}</h3>
          </article>
        ))}
      </section>
      <section className="glass-card panel">
        <h3>Suggested actions</h3>
        <div className="activity-list" style={{ marginTop: 18 }}>
          {moduleSummary?.actions.map((action) => (
            <div className="activity-item" key={action}>
              <h4>{action}</h4>
              <p>{moduleSummary.title} teams can use this flow to keep work moving without leaving the module.</p>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}

export default ModulePage;
