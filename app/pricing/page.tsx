import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PricingPage() {
    return (
        <>
            <Header />
            <main style={{ padding: '80px 0' }}>
                <section className="container">
                    <div className="text-center mb-16">
                        <div className="mb-4 inline-block px-3 py-1 border border-black rounded-full mb-8 bg-white">
                            <span className="text-sm font-semibold tracking-tight">PRICING MODEL 01</span>
                        </div>
                        <h1 className="text-huge mb-6">Simple, Academic Fees.</h1>
                        <p className="text-sub max-w-2xl mx-auto">
                            Transparent pricing designed for individual faculty budgets. No hidden enterprise tiers.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="box-card border-2 border-black relative">
                            <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1">
                                MOST POPULAR
                            </div>

                            <h2 className="text-2xl font-bold mb-2">Faculty License</h2>
                            <div className="flex items-end mb-6">
                                <span className="text-4xl font-bold mr-2">$7</span>
                                <span className="text-muted mb-1">/ month</span>
                            </div>

                            <div className="mb-8 p-4 bg-subtle border border-light">
                                <p className="text-sm font-medium mb-1">Global Equivalent:</p>
                                <p className="text-xl font-bold">₹399 / month</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "3-day unrestricted trial",
                                    "Unlimited draft generation",
                                    "Custom rule engine access",
                                    "Priority support",
                                    "Cancel any time"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm">
                                        <div className="w-4 h-4 bg-black mr-3 flex-shrink-0"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/login" className="btn btn-primary w-full block text-center" style={{ width: '100%' }}>
                                Start 3-Day Trial
                            </Link>
                            <p className="text-center text-xs text-muted mt-4">
                                Authentication via Magic Link. No password required.
                            </p>
                        </div>
                    </div>

                    {/* FAQ Grid */}
                    <div className="mt-24">
                        <div className="mb-8 border-b border-black pb-4">
                            <h2 className="text-2xl font-bold">Common Queries</h2>
                        </div>

                        <div className="card-grid">
                            <div className="box-card">
                                <h4 className="font-bold text-lg mb-3">Trial Expiration Logic</h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    After 72 hours, the system pauses. You will be prompted to enter payment credentials only if you wish to continue.
                                </p>
                            </div>
                            <div className="box-card">
                                <h4 className="font-bold text-lg mb-3">Cancellation Policy</h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    Zero friction. Cancel via the Dashboard with a single click. Access remains until the billing cycle terminates.
                                </p>
                            </div>
                            <div className="box-card">
                                <h4 className="font-bold text-lg mb-3">Data Privacy</h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    We do not store email bodies permanently. Data is processed in-memory for draft generation and immediately discarded.
                                </p>
                            </div>
                            <div className="box-card">
                                <h4 className="font-bold text-lg mb-3">Auto-Send Risks</h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    Non-existent. The system architecture does not have 'Send' permissions. It only has 'Write Draft' permissions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
