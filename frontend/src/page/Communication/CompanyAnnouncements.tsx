import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  role: string;
  date: string;
  category: string; // 'Company Targets' | 'Operational' | 'HR & Policy' | 'System Maintenance' | 'Product Update'
}

export const CompanyAnnouncements: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(true); // Default to true to allow administration
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Operational');
  const [submitting, setSubmitting] = useState(false);

  // Fetch Announcements
  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const response = await api.getAnnouncements();
      if (response && response.success) {
        setAnnouncements(response.data);
      } else {
        setAnnouncements([]);
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching announcements:', err);
      setError('Failed to fetch announcements.');
    } finally {
      setLoading(false);
    }
  };

  // Check user role
  const checkUserRole = async () => {
    try {
      const response = await api.getMe();
      if (response && response.data) {
        const role = response.data.role || (response.data.roles && response.data.roles[0]);
        setIsAdmin(role === 'Administrator' || role === 'Manager');
      }
    } catch (err) {
      console.error('Failed to fetch user profile:', err);
      // Default to no admin rights on error — never grant elevated access on failure
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    checkUserRole();
  }, []);

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      setSubmitting(true);
      const newAnn = {
        title,
        content,
        category,
      };
      const response = await api.createAnnouncement(newAnn);
      if (response && response.success) {
        // Reset form & close modal
        setTitle('');
        setContent('');
        setCategory('Operational');
        setIsModalOpen(false);
        // Refresh list
        fetchAnnouncements();
      } else {
        alert('Failed to create announcement.');
      }
    } catch (err) {
      console.error('Error creating announcement:', err);
      alert('An error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  // Featured Hero Announcement (the newest one, or custom selected)
  const featured = announcements.length > 0 ? announcements[0] : null;
  // Recent ones are the rest
  const recentUpdates = announcements.length > 1 ? announcements.slice(1) : announcements;

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              className="topbar-icon-btn md:hidden"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="topbar-title">CommSync</h1>
          </div>
          
          <div className="topbar-search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search announcements..." />
          </div>

          <div className="topbar-actions">
            {isAdmin && (
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
                style={{ fontSize: '13px', padding: '6px 12px' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                New Announcement
              </button>
            )}
            <button className="topbar-icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div style={{ marginLeft: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#9a25ae',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: '#f9f9ff', minHeight: 'calc(100vh - 64px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Page Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                paddingBottom: '16px',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#181c21', margin: 0 }}>
                  Announcements
                </h2>
                <p style={{ fontSize: '15px', color: '#414752', margin: '4px 0 0 0' }}>
                  Stay updated with the latest news, maintenance, and policy changes.
                </p>
              </div>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: '#414752' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading announcements...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '24px' }}>
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="bento-grid">
                
                {/* Main Feed Column */}
                <div className="col-span-8 space-y-md" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* Featured Hero Card */}
                  {featured && (
                    <div
                      className="glass-panel"
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                        borderTop: '4px solid #1976d2',
                        backgroundColor: '#ffffff',
                      }}
                    >
                      <div style={{ height: '220px', backgroundColor: '#e0e2ea', position: 'relative', overflow: 'hidden' }}>
                        <img
                          alt="Featured announcement banner"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc1IowEjWczq6bGHNtSZrJUKuthHf0rhCYUggLSkijPn8W7Y-1u0WdpAT5PqO82N4ttCetVwIz6ne9hCSQ3xAPOux0ZHDDR0PS66HgDuGE-p6FbSnaBEiDlHuZddowPn7j5OAgctk-z8ktAnCnWLK1zH2mpTSio5Ws6oMbpGucxJ7pn9XI6GNVIWIRAljXcl88mucEDdLPayrgdJTnWm7NiApag_l4qkdUMGk-QKCt2PKuVRZI8uXn3GpySaPRBlngO3JiAthyeTc"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                          }}
                        />
                        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '20px', width: '100%' }}>
                          <span
                            style={{
                              display: 'inline-block',
                              padding: '2px 10px',
                              backgroundColor: '#005dac',
                              color: 'white',
                              borderRadius: '9999px',
                              fontSize: '11px',
                              fontWeight: '600',
                              textTransform: 'uppercase',
                              marginBottom: '8px',
                            }}
                          >
                            {featured.category}
                          </span>
                          <h3 style={{ fontSize: '24px', fontWeight: '700', color: 'white', margin: 0 }}>
                            {featured.title}
                          </h3>
                        </div>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              backgroundColor: '#e6e8f0',
                              color: '#414752',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 'bold',
                              fontSize: '14px',
                            }}
                          >
                            {featured.author.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p style={{ fontSize: '14px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                              {featured.author}
                            </p>
                            <p style={{ fontSize: '12px', color: '#717783', margin: 0 }}>
                              {featured.role} • {new Date(featured.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p style={{ fontSize: '15px', color: '#414752', lineHeight: '1.6', margin: '0 0 16px 0' }}>
                          {featured.content}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Feed List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '8px', margin: 0 }}>
                      Recent Updates
                    </h4>
                    
                    {recentUpdates.length === 0 ? (
                      <p style={{ color: '#717783', textAlign: 'center', padding: '24px 0' }}>No announcements to display.</p>
                    ) : (
                      recentUpdates.map((ann) => {
                        let tagBg = '#d4e3ff';
                        let tagColor = '#004786';

                        if (ann.category === 'System Maintenance') {
                          tagBg = '#ffdbc7';
                          tagColor = '#733600';
                        } else if (ann.category === 'Product Update') {
                          tagBg = '#ffd6fe';
                          tagColor = '#35003f';
                        } else if (ann.category === 'HR & Policy') {
                          tagBg = '#ecedf6';
                          tagColor = '#181c21';
                        }

                        return (
                          <div
                            key={ann.id}
                            className="glass-panel card-hover-effect"
                            style={{
                              borderRadius: '12px',
                              padding: '16px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '12px',
                              backgroundColor: '#ffffff',
                              border: '1px solid rgba(0,0,0,0.05)',
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                              <span
                                style={{
                                  display: 'inline-block',
                                  padding: '2px 8px',
                                  backgroundColor: tagBg,
                                  color: tagColor,
                                  borderRadius: '4px',
                                  fontSize: '11px',
                                  fontWeight: '600',
                                  textTransform: 'uppercase',
                                }}
                              >
                                {ann.category}
                              </span>
                              <span style={{ fontSize: '12px', color: '#717783' }}>
                                {new Date(ann.date).toLocaleDateString()}
                              </span>
                            </div>
                            <div>
                              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: '0 0 8px 0' }}>
                                {ann.title}
                              </h4>
                              <p style={{ fontSize: '14px', color: '#414752', lineHeight: '1.5', margin: 0 }}>
                                {ann.content}
                              </p>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#717783', marginTop: '4px' }}>
                              <span style={{ fontWeight: '500' }}>{ann.author}</span>
                              <span>•</span>
                              <span>{ann.role}</span>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>

                </div>

                {/* Sidebar Widget Column */}
                <div className="col-span-4 space-y-md" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Quick Links */}
                  <div className="glass-panel" style={{ borderRadius: '12px', padding: '16px', backgroundColor: '#ffffff' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#181c21', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>link</span>
                      Quick Links
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['Employee Handbook', 'IT Support Portal', 'Expense Reporting', 'Brand Assets'].map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px',
                              borderRadius: '8px',
                              color: '#414752',
                              textDecoration: 'none',
                              fontSize: '14px',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f2f3fc';
                              e.currentTarget.style.color = '#005dac';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#414752';
                            }}
                          >
                            <span>{link}</span>
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Documents */}
                  <div className="glass-panel" style={{ borderRadius: '12px', padding: '16px', backgroundColor: '#ffffff' }}>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#181c21', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>folder_open</span>
                      Recent Documents
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { name: 'Q3_Townhall_Deck.pdf', time: 'Added 2 days ago', type: 'pdf', bg: '#ffdad6', color: '#ba1a1a', icon: 'picture_as_pdf' },
                        { name: '2024_Holiday_Schedule.docx', time: 'Added last week', type: 'doc', bg: '#d4e3ff', color: '#005dac', icon: 'description' },
                        { name: 'Benefits_Comparison_Matrix.xlsx', time: 'Added Oct 12', type: 'xls', bg: '#ffdbc7', color: '#ba5b00', icon: 'table_view' }
                      ].map((doc) => (
                        <li key={doc.name} style={{ display: 'flex', alignItems: 'start', gap: '12px', cursor: 'pointer' }}>
                          <div
                            style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '4px',
                              backgroundColor: doc.bg,
                              color: doc.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{doc.icon}</span>
                          </div>
                          <div>
                            <p style={{ fontSize: '13px', fontWeight: '500', color: '#181c21', margin: 0 }}>
                              {doc.name}
                            </p>
                            <p style={{ fontSize: '11px', color: '#717783', margin: 0 }}>
                              {doc.time}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            )}

          </div>
        </main>
      </div>

      {/* Modal for Creating New Announcement */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '500px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '16px 20px',
                borderBottom: '1px solid #e0e2ea',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                New Announcement
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#717783' }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleCreateAnnouncement} style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter announcement title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Company Targets">Company Targets</option>
                  <option value="Operational">Operational</option>
                  <option value="HR & Policy">HR & Policy</option>
                  <option value="System Maintenance">System Maintenance</option>
                  <option value="Product Update">Product Update</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Content</label>
                <textarea
                  className="form-textarea"
                  placeholder="Type the announcement message details..."
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '12px',
                  marginTop: '8px',
                  borderTop: '1px solid #e0e2ea',
                  paddingTop: '16px',
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? 'Creating...' : 'Publish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CSS Spin Keyframe */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
