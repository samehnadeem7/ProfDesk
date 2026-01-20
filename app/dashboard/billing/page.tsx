import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BillingPage() {
    return (
        <>
            <Header />
            <main style={{ padding: '60px 0', minHeight: '80vh' }}>
                <section className="container-narrow">
                    <div className="mb-8 border-b border-black pb-4 flex justify-between items-end">
                        <h1 className="text-3xl font-bold">Billing</h1>
                        <span className="font-mono text-sm">FINANCIAL DATA</span>
                    </div>

                    <div className="box-card mb-8">
                        <h2 className="text-xl font-bold mb-4">Subscription Status</h2>
                        <div className="flex items-center justify-between p-4 bg-subtle border border-light mb-6">
                            <div>
                                <p className="text-sm text-muted font-bold uppercase tracking-tight">Active Plan</p>
                                <p className="text-xl font-bold">Free Trial</p>
                            </div>
                            <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold">ACTIVE</span>
                        </div>

                        <p className="text-sm text-muted mb-6">
                            You are currently evaluating the platform. Your trial provides full access to the rule engine and draft generator.
                        </p>

                        <button className="btn btn-primary w-full" disabled>
                            Manage Subscription (Demo)
                        </button>
                    </div>

                    <div className="box-card">
                        <h3 className="font-bold text-lg mb-4">Need Assistance?</h3>
                        <p className="text-sm text-muted mb-4">
                            For invoice inquiries or enterprise licensing, please direct correspondence to our finance department.
                        </p>
                        <a href="mailto:support@profdesk.app" className="text-sm font-bold border-b border-black">Contact Support</a>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/dashboard" className="text-sm text-muted hover:text-main">
                            ← Back to Dashboard
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
