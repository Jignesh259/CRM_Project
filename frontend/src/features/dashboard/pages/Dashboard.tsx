import { useEffect, useState } from 'react';
import { api, type DashboardResponse } from '../../../shared/api/client';
import AppLayout from '../../../shared/layouts/AppLayout';

function Dashboard() {
  const [data, setData] = useState<DashboardResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    api
      .getDashboard()
      .then((response) => {
        if (!cancelled) {
          setData(response);
        }
      })
      .catch((dashboardError) => {
        if (!cancelled) {
          setError(dashboardError instanceof Error ? dashboardError.message : 'Unable to load dashboard.');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AppLayout
      title="Executive overview"
      subtitle="Revenue, pipeline, and team activity in one clear command center."
      actions={
        <>
          <button className="pill-button" type="button">
            AI insights
          </button>
          <button className="primary-button-inline" type="button">
            New opportunity
          </button>
        </>
      }
    >
      {error ? <div className="message error">{error}</div> : null}
      <section className="panel-grid">
        {data?.metrics.map((metric) => (
          <article className="glass-card metric-card" key={metric.label}>
            <p>{metric.label}</p>
            <h3>{metric.value}</h3>
            <span className={`metric-change ${metric.trend}`}>{metric.change}</span>
          </article>
        ))}
      </section>

      <section className="dual-grid">
        <article className="glass-card panel">
          <div className="panel-header">
            <div>
              <h3>Revenue run rate</h3>
              <div className="subtle">Current vs target by month</div>
            </div>
          </div>
          <div className="bar-chart">
            {data?.revenue.map((point) => (
              <div className="bar-row" key={point.month}>
                <div className="bar-meta">
                  <span>{point.month}</span>
                  <span>
                    ${point.revenue.toLocaleString()} / ${point.target.toLocaleString()}
                  </span>
                </div>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ width: `${Math.min((point.revenue / point.target) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card panel">
          <div className="panel-header">
            <div>
              <h3>Pipeline mix</h3>
              <div className="subtle">Open work across each stage</div>
            </div>
          </div>
          <div className="activity-list">
            {data?.pipeline.map((stage) => (
              <div className="activity-item" key={stage.stage}>
                <h4>{stage.stage}</h4>
                <p>{stage.count} active deals</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="glass-card panel">
        <div className="panel-header">
          <div>
            <h3>Recent activity</h3>
            <div className="subtle">What changed across sales, service, and operations</div>
          </div>
        </div>
        <div className="activity-list">
          {data?.activities.map((activity) => (
            <div className="activity-item" key={activity.id}>
              <h4>{activity.title}</h4>
              <p>{activity.description}</p>
              <div className="tag-row">
                <span className="tag">{activity.type}</span>
                <span className="tag">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AppLayout>
  );
}

export default Dashboard;
