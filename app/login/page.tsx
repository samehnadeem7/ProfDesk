import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function LoginPage() {
    return (
        <>
            <Header />
            <main style={{ padding: '80px 0', minHeight: '80vh' }}>
                <section className="container">
                    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                        <div className="box-card">
                            <div className="text-center mb-6">
                                <h1 className="text-2xl font-bold mb-2">Access Portal</h1>
                                <p className="text-sm text-muted">Enter verified credentials to proceed.</p>
                            </div>

                            <form>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-input"
                                        placeholder="academic@university.edu"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-full">
                                    Generate Login Link
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-black text-center">
                                <p className="text-xs text-muted">
                                    System will auto-provision new accounts upon first successful authentication.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
