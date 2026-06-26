import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const LogisticsTracking: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [shipments, setShipments] = useState<any[]>([]);
  const [selectedShipment, setSelectedShipment] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const loadShipmentData = async () => {
    setLoading(true);
    try {
      const res = await api.getShipments();
      setShipments(res.data || []);
      if (res.data && res.data.length > 0) {
        setSelectedShipment(res.data[0]);
      }
    } catch (err) {
      console.error('Failed to load shipment logs', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadShipmentData();
  }, []);

  const handleSimulateStatus = async (status: string, activity: string) => {
    if (!selectedShipment) return;
    setUpdating(true);
    try {
      const res = await api.updateShipmentStatus(selectedShipment.id, { status, activity });
      if (res.success) {
        setSelectedShipment(res.data);
        // Reload list
        const listRes = await api.getShipments();
        setShipments(listRes.data || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const steps = ['Ordered', 'Picked', 'In Transit', 'Out for Delivery', 'Delivered'];
  const currentStepIndex = selectedShipment ? steps.indexOf(selectedShipment.status) : 0;

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Logistics & Shipment Tracking</h1>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Delivery Hub</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Monitor shipments, routes, and transit carrier performance.</p>
            </div>
          </div>

          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading logistics trackers...</div>
          ) : shipments.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No active shipments found.</div>
          ) : (
            <div className="bento-grid">
              {/* Left: Shipments List */}
              <div className="content-card col-span-4" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="content-card-header">
                  <h3 className="content-card-title">Shipments List ({shipments.length})</h3>
                </div>
                <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {shipments.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedShipment(s)}
                      style={{
                        padding: '16px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: selectedShipment?.id === s.id ? '#3b82f6' : '#e2e8f0',
                        background: selectedShipment?.id === s.id ? '#f0f9ff' : 'white',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ fontWeight: 700, fontSize: '14px', color: '#0f172a', fontFamily: 'monospace' }}>{s.id}</span>
                        <span className="badge" style={{
                          background: s.status === 'Delivered' ? '#d1fae5' : '#dbeafe',
                          color: s.status === 'Delivered' ? '#065f46' : '#1d4ed8',
                          fontSize: '11px',
                          padding: '2px 8px',
                        }}>
                          {s.status}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Order: {s.orderId}</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#334155', marginTop: '4px' }}>{s.customerName}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Detailed Tracker */}
              {selectedShipment && (
                <div className="col-span-8 flex flex-col gap-4">
                  {/* Status Tracker */}
                  <div className="step-tracker">
                    {steps.map((step, idx) => {
                      let stateClass = '';
                      if (idx < currentStepIndex) stateClass = 'completed';
                      else if (idx === currentStepIndex) stateClass = 'active';

                      return (
                        <React.Fragment key={step}>
                          <div className={`step-item ${stateClass}`}>
                            <div className="step-node">
                              {idx < currentStepIndex ? (
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check</span>
                              ) : (
                                idx + 1
                              )}
                            </div>
                            <span className="step-label">{step}</span>
                          </div>
                          {idx < steps.length - 1 && (
                            <div className={`step-divider ${idx < currentStepIndex ? 'completed' : ''}`} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Shipment details card */}
                  <div className="content-card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>Shipment Details</h3>
                      <div style={{ display: 'flex', gap: '8px' }} onClick={(e) => e.stopPropagation()}>
                        {selectedShipment.status === 'In Transit' && (
                          <button
                            onClick={() => handleSimulateStatus('Out for Delivery', 'Out for Delivery - Arrived at local delivery facility')}
                            className="btn btn-secondary btn-sm"
                            disabled={updating}
                          >
                            Simulate Out for Delivery
                          </button>
                        )}
                        {selectedShipment.status === 'Out for Delivery' && (
                          <button
                            onClick={() => handleSimulateStatus('Delivered', 'Delivered - Shipment handed over to recipient')}
                            className="btn btn-primary btn-sm"
                            disabled={updating}
                          >
                            Simulate Delivery
                          </button>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '13px', borderBottom: '1px solid #f1f5f9', paddingBottom: '20px', marginBottom: '20px' }}>
                      <div>
                        <span style={{ color: '#94a3b8' }}>Carrier</span>
                        <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{selectedShipment.carrier}</div>
                      </div>
                      <div>
                        <span style={{ color: '#94a3b8' }}>Tracking Number</span>
                        <div style={{ fontWeight: 600, color: '#3b82f6', marginTop: '4px', fontFamily: 'monospace' }}>{selectedShipment.trackingCode}</div>
                      </div>
                      <div>
                        <span style={{ color: '#94a3b8' }}>Origin Facility</span>
                        <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{selectedShipment.source}</div>
                      </div>
                      <div>
                        <span style={{ color: '#94a3b8' }}>Destination HQ</span>
                        <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{selectedShipment.destination}</div>
                      </div>
                      <div style={{ gridColumn: 'span 2' }}>
                        <span style={{ color: '#94a3b8' }}>Estimated Delivery</span>
                        <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px', fontSize: '14px' }}>{new Date(selectedShipment.estDelivery).toLocaleString()}</div>
                      </div>
                    </div>

                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: '0 0 16px' }}>Transit History logs</h4>
                    
                    <div className="timeline-feed">
                      {selectedShipment.history.map((h: any, idx: number) => (
                        <div key={idx} className="timeline-event completed">
                          <div className="timeline-marker" />
                          <div className="timeline-event-content">
                            <div className="timeline-time">{new Date(h.timestamp).toLocaleString()}</div>
                            <div className="timeline-title">{h.activity}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
