import AppLayout from '../../../shared/layouts/AppLayout';

type SimpleModuleTemplateProps = {
  title: string;
  summary: string;
  stats: Array<{ label: string; value: string }>;
};

function SimpleModuleTemplate({ title, summary, stats }: SimpleModuleTemplateProps) {
  return (
    <AppLayout title={title} subtitle={summary}>
      <section className="panel-grid">
        {stats.map((stat) => (
          <article className="glass-card metric-card" key={stat.label}>
            <p>{stat.label}</p>
            <h3>{stat.value}</h3>
          </article>
        ))}
      </section>
      <section className="glass-card panel">
        <h3>{title} summary</h3>
        <p className="subtle" style={{ lineHeight: 1.7 }}>
          This screen was rebuilt as a stable placeholder so the route remains usable while the team iterates on
          richer workflows from the design exports.
        </p>
      </section>
    </AppLayout>
  );
}

export default SimpleModuleTemplate;
