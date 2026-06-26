import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import { useAuth } from '../../components/AuthContext';
import '../../components/Sidebar.css';

export const ScheduleFollowUp: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    activity_type: 'Call',
    subject: '',
    activity_date: '',
    activity_time: '',
    notes: '',
    assigned_to_id: ''
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users', {
          headers: api.getAuthHeaders()
        });
        if (response.ok) {
          const resJson = await response.json();
          if (resJson.success && resJson.data && resJson.data.users) {
            setUsersList(resJson.data.users);
          }
        }
      } catch (err) {
        console.error('Failed to load users', err);
      }
    };
    loadUsers();
  }, []);

  useEffect(() => {
    if (currentUser && !formData.assigned_to_id) {
      setFormData(prev => ({ ...prev, assigned_to_id: currentUser.id }));
    }
  }, [currentUser]);

  const displayUsers = usersList.length > 0
    ? usersList
    : (currentUser ? [{ id: currentUser.id, full_name: `${currentUser.full_name} (Me)` }] : []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    setError(null);

    try {
      const payload = {
        activity_type: formData.activity_type,
        subject: formData.subject,
        notes: formData.notes || undefined,
        activity_date: formData.activity_date || undefined,
        activity_time: formData.activity_time || undefined,
        assigned_to_id: formData.assigned_to_id || undefined
      };

      await api.addLeadActivity(id, payload);
      navigate(`/leads/${id}`);
    } catch (err: any) {
      setError(err.message || 'Failed to schedule activity');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => navigate(`/leads/${id}`)}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Schedule Follow-up</h1>
          </div>
        </header>

        <div className="page-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">New Activity</h3>
            </div>
            <div className="content-card-body" style={{ padding: '24px' }}>
              {error && (
                <div style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '14px' }}>
                  {error}
                </div>
              )}

              <form className="form-grid" onSubmit={handleSubmit}>
                <div className="form-group full-width">
                  <label className="form-label">Activity Type</label>
                  <select
                    className="form-select"
                    value={formData.activity_type}
                    onChange={(e) => setFormData({ ...formData, activity_type: e.target.value })}
                  >
                    <option value="Call">Call</option>
                    <option value="Email">Email</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Task">Task</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Discovery Call"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.activity_date}
                    onChange={(e) => setFormData({ ...formData, activity_date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Time</label>
                  <input
                    type="time"
                    className="form-input"
                    value={formData.activity_time}
                    onChange={(e) => setFormData({ ...formData, activity_time: e.target.value })}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Notes</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Details for this follow-up..."
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Assign To</label>
                  <select
                    className="form-select"
                    value={formData.assigned_to_id}
                    onChange={(e) => setFormData({ ...formData, assigned_to_id: e.target.value })}
                  >
                    <option value="">-- Select Assignee --</option>
                    {displayUsers.map((u: any) => (
                      <option key={u.id} value={u.id}>
                        {u.full_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                  <button type="button" className="btn btn-secondary" disabled={loading} onClick={() => navigate(`/leads/${id}`)}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Scheduling...' : 'Schedule'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
