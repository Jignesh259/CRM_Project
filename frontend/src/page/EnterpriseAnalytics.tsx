import { useEffect, useState } from 'react';
import { api, type AnalyticsResponse } from '../api/api';
import AppLayout from './AppLayout';

function EnterpriseAnalytics() {
  const [data, setData] = useState<AnalyticsResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getAnalytics()
      .then(setData)
      .catch((analyticsError) =>
        setError(analyticsError instanceof Error ? analyticsError.message : 'Unable to load analytics.'),
      );
  }, []);

  return (
    <AppLayout
      title="Enterprise analytics"
      subtitle="A compact view of growth, regional performance, and product contribution."
      actions={
        <button className="ghost-button" type="button">
          Export snapshot
        </button>
      }
    >
      {error ? <div className="message error">{error}</div> : null}
      <section className="panel-grid">
        <article className="glass-card metric-card">
          <p>Win rate</p>
          <h3>{data?.winRate ?? '--'}%</h3>
          <span className="metric-change up">Quarter over quarter</span>
        </article>
        <article className="glass-card metric-card">
          <p>Customer growth</p>
          <h3>{data?.customerGrowth ?? '--'}%</h3>
          <span className="metric-change up">Active accounts</span>
        </article>
        <article className="glass-card metric-card">
          <p>Recurring revenue</p>
          <h3>${data?.recurringRevenue.toLocaleString() ?? '--'}</h3>
          <span className="metric-change flat">Contracted run rate</span>
        </article>
      </section>

      <section className="dual-grid">
        <article className="glass-card panel">
          <div className="panel-header">
            <div>
              <h3>Regional performance</h3>
              <div className="subtle">Revenue and customer concentration by market</div>
            </div>
          </div>
          <div className="table-like">
            {data?.regionPerformance.map((region) => (
              <div className="table-row" key={region.region}>
                <strong>{region.region}</strong>
                <span>${region.revenue.toLocaleString()}</span>
                <span>{region.customers} customers</span>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card panel">
          <h3>Top products</h3>
          <div className="activity-list" style={{ marginTop: 18 }}>
            {data?.topProducts.map((product) => (
              <div className="activity-item" key={product.name}>
                <h4>{product.name}</h4>
                <p>{product.sales.toLocaleString()} units sold</p>
                <div className="tag-row">
                  <span className="tag">{product.margin}% margin</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </AppLayout>
  );
}

export default EnterpriseAnalytics;
