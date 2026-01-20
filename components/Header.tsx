import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link href="/" className="logo">
                        ProfDesk
                    </Link>
                    <nav className="nav">
                        <Link href="/">Home</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/dashboard">Dashboard</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
