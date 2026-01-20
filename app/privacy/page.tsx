import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
    return (
        <>
            <Header />
            <main style={{ padding: '80px 0' }}>
                <section className="container-narrow">
                    <div className="mb-8 border-b border-black pb-4 text-center">
                        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
                        <p className="text-sm text-mono text-muted">LAST_UPDATED: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="box-card">
                        <article className="prose">
                            <h2 className="text-lg font-bold mb-3 mt-6">1. Information Collection</h2>
                            <p className="text-sm text-muted mb-4">
                                We utilize minimal data necessary for core functionality.
                                Emails are processed in-memory and are not permanently stored on our servers.
                                Authentication data is securely managed via Supabase.
                            </p>

                            <h2 className="text-lg font-bold mb-3 mt-6">2. Data Usage</h2>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-muted mb-4">
                                <li>To generate draft responses (processed via LLM)</li>
                                <li>To authenticate user sessions</li>
                                <li>To process subscription payments (via Stripe)</li>
                            </ul>

                            <h2 className="text-lg font-bold mb-3 mt-6">3. Third-Party Processors</h2>
                            <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div className="p-3 border border-light bg-subtle">
                                    <h4 className="font-bold text-xs uppercase mb-1">Infrastructure</h4>
                                    <p className="text-sm">Supabase</p>
                                </div>
                                <div className="p-3 border border-light bg-subtle">
                                    <h4 className="font-bold text-xs uppercase mb-1">Payments</h4>
                                    <p className="text-sm">Stripe</p>
                                </div>
                                <div className="p-3 border border-light bg-subtle">
                                    <h4 className="font-bold text-xs uppercase mb-1">Logic</h4>
                                    <p className="text-sm">n8n Workflow</p>
                                </div>
                            </div>

                            <h2 className="text-lg font-bold mb-3 mt-6">4. User Rights</h2>
                            <p className="text-sm text-muted mb-4">
                                You retain full ownership of your data. Account deletion is available via the dashboard,
                                which permanently removes all associated records.
                            </p>

                            <div className="border-t border-light mt-8 pt-4">
                                <p className="text-xs text-muted">
                                    DPO Contact: privacy@profdesk.app
                                </p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
