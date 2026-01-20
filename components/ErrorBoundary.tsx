'use client'

import { Component, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error('Error caught by boundary:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="container" style={{ paddingTop: '4rem' }}>
                    <div className="message message-error">
                        <h2>Something went wrong</h2>
                        <p>We apologize for the inconvenience. Please refresh the page and try again.</p>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
