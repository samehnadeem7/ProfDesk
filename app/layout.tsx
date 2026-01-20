import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ProfDesk | Academic Control',
    description: 'Reduce inbox overload without losing control',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
