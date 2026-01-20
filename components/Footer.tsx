import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center py-8">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <Link href="/privacy" className="text-sm text-muted hover:text-main">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-muted hover:text-main">Terms of Service</Link>
                    </div>
                    <div className="text-sm text-muted">
                        © {new Date().getFullYear()} ProfDesk
                    </div>
                </div>
            </div>
        </footer>
    )
}
