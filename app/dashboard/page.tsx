import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DashboardPage() {
    return (
        <>
            <Header />
            <main style={{ minHeight: '80vh', padding: '60px 0' }}>
                <div className="container">
                    <div className="flex justify-between items-center mb-8 border-b border-light pb-4">
                        <h1 className="text-3xl font-bold text-main">Dashboard</h1>
                    </div>

                    <div className="card-grid mb-12">
                        <div className="box-card">
                            <h4 className="text-sm font-medium text-muted mb-2 uppercase tracking-wide">Drafts Generated</h4>
                            <div className="text-4xl font-bold text-main">0</div>
                        </div>

                        <div className="box-card">
                            <h4 className="text-sm font-medium text-muted mb-2 uppercase tracking-wide">Current Status</h4>
                            <div className="text-4xl font-bold text-main">Free Trial</div>
                            <p className="text-sm text-muted mt-1">3 days remaining</p>
                        </div>

                        <div className="box-card">
                            <h4 className="text-sm font-medium text-muted mb-2 uppercase tracking-wide">Next Billing</h4>
                            <div className="text-4xl font-bold text-main">--</div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        <Link href="/dashboard/rules" className="box-card hover:border-strong transition-all group block">
                            <div className="flex items-center mb-3" style={{ gap: '16px' }}>
                                <div className="p-2 bg-subtle rounded-md flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-main"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                </div>
                                <h3 className="text-xl font-bold">Configure Rules</h3>
                            </div>
                            <p className="text-muted">Set up logic for filtering and generation.</p>
                        </Link>

                        <Link href="/dashboard/billing" className="box-card hover:border-strong transition-all group block">
                            <div className="flex items-center mb-3" style={{ gap: '16px' }}>
                                <div className="p-2 bg-subtle rounded-md flex items-center justify-center" style={{ width: '40px', height: '40px' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-main"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                </div>
                                <h3 className="text-xl font-bold">Manage Billing</h3>
                            </div>
                            <p className="text-muted">View subscription and payment methods.</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
