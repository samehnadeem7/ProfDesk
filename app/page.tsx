import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section - Transparent to show Graph Grid */}
                <section className="section-transparent" style={{ padding: '160px 0 120px' }}>
                    <div className="container text-center">
                        <h1 className="text-huge mb-6 leading-tight">
                            Inbox <span className="text-gradient">Zero</span>.<br />
                            Academic <span style={{ textDecoration: 'underline', textDecorationThickness: '4px', textDecorationColor: 'var(--border-strong)' }}>Control</span>.
                        </h1>

                        <p className="text-sub mb-8" style={{ maxWidth: '480px', margin: '0 auto 2rem' }}>
                            Draft intelligent replies based on your specific rules.
                            Review everything. Send manually.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4">
                            <Link href="/pricing" className="btn btn-primary" style={{ height: '48px', padding: '0 32px', fontSize: '16px' }}>
                                Start 3-Day Trial
                            </Link>
                            <p className="text-sm text-muted">No credit card required</p>
                        </div>
                    </div>
                </section>

                {/* Feature Grid - White container to break the grid */}
                <section className="section">
                    <div className="container">
                        <div className="mb-8 border-b border-black pb-4 flex justify-between items-end">
                            <h2 className="text-3xl font-bold">Architecture</h2>
                            <span className="font-mono text-sm">SYSTEM OVERVIEW</span>
                        </div>

                        <div className="card-grid">
                            <div className="box-card">
                                <div className="font-mono text-sm mb-2 text-muted">01. INPUT</div>
                                <h3 className="text-xl font-bold mb-3">Define Logic</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Set rigorous criteria for incoming mail. Only emails matching your specific parameters trigger a draft event.
                                </p>
                            </div>

                            <div className="box-card">
                                <div className="font-mono text-sm mb-2 text-muted">02. PROCESS</div>
                                <h3 className="text-xl font-bold mb-3">Draft Generation</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    The system generates a suggested response based on your tone and content rules. It sits in your Drafts folder.
                                </p>
                            </div>

                            <div className="box-card">
                                <div className="font-mono text-sm mb-2 text-muted">03. OUTPUT</div>
                                <h3 className="text-xl font-bold mb-3">Manual Release</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Nothing sends without your approval. You review the draft, edit if necessary, and click send. Complete control.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Big Value Prop - Split Layout */}
                <section className="section-transparent">
                    <div className="container">
                        <div className="value-card-grid">
                            <div className="value-card-content">
                                <h2 className="text-3xl font-bold mb-6">Built for the<br />Academic Workflow.</h2>
                                <ul style={{ listStyle: 'none' }} className="space-y-4">
                                    {[
                                        "Zero automated sending. You are the gatekeeper.",
                                        "Customizable rule engine for filtering.",
                                        "Privacy-first architecture.",
                                        "Designed for research & department heads."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="mr-3" style={{ color: 'black', fontWeight: 'bold' }}>—</span>
                                            <span className="text-muted">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="value-card-stat">
                                <div className="text-center">
                                    <div style={{ fontSize: '80px', fontWeight: 'bold', color: '#e5e5e5', lineHeight: 1 }}>30%</div>
                                    <p className="font-bold mt-4">Time Recovered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                {/* CTA */}
                <section className="section" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <div className="container text-center" style={{ maxWidth: '600px' }}>
                        <h2 className="text-huge mb-6">Reclaim your inbox.</h2>
                        <p className="text-sub mb-8">Join academic leaders who have switched to a smarter workflow.</p>
                        <Link href="/pricing" className="btn btn-primary" style={{ padding: '0 40px', height: '56px', fontSize: '18px' }}>
                            Get Started Now
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
