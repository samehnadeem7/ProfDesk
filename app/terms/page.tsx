import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
    return (
        <>
            <Header />
            <main style={{ padding: '80px 0' }}>
                <section className="container-narrow">
                    <div className="mb-8 border-b border-black pb-4 text-center">
                        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
                        <p className="text-sm text-mono text-muted">LAST_UPDATED: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="box-card">
                        <article className="prose">
                            <h2 className="text-lg font-bold mb-3 mt-6">1. Service Description</h2>
                            <p className="text-sm text-muted mb-4">
                                ProfDesk provides email draft generation services for academic professionals.
                                The service creates draft replies based on rules you define. All drafts require your review
                                and approval before sending.
                            </p>
                            <div className="bg-subtle p-3 border border-light text-sm font-medium mb-4">
                                Important: This service creates drafts only. Emails are never sent automatically.
                            </div>

                            <h2 className="text-lg font-bold mb-3 mt-6">2. Your Responsibilities</h2>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-muted mb-4">
                                <li>You are responsible for reviewing all draft emails before sending</li>
                                <li>You must provide accurate preferences and requirements</li>
                                <li>You agree to use the service in accordance with academic professional standards</li>
                                <li>You maintain ownership and responsibility for all outgoing correspondence</li>
                            </ul>

                            <h2 className="text-lg font-bold mb-3 mt-6">3. Subscription and Billing</h2>
                            <p className="text-sm text-muted mb-4">
                                <strong>Trial Period:</strong> New users receive a 3-day free trial.<br />
                                <strong>Subscription Fee:</strong> $7/month (or ₹399/month) charged monthly.<br />
                                <strong>Cancellation:</strong> You may cancel your subscription at any time.
                            </p>

                            <h2 className="text-lg font-bold mb-3 mt-6">4. Limitation of Liability</h2>
                            <p className="text-sm text-muted mb-4">
                                This service is provided as-is. We are not liable for the content of emails you send,
                                even if based on generated drafts.
                            </p>

                            <div className="border-t border-light mt-8 pt-4">
                                <p className="text-xs text-muted">
                                    Contact: terms@profdesk.app
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
