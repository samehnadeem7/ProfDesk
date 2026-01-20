'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export default function RulesPage() {
    const router = useRouter()
    const [rules, setRules] = useState({
        requiredItems: {
            cvAttached: false,
            projectMention: false,
            specificCourse: false,
        },
        preferredBackground: {
            undergraduate: false,
            postgraduate: false,
            phd: false,
        },
        replyTone: 'neutral' as 'formal' | 'neutral' | 'brief',
        signature: '',
    })

    function handleSave(e: React.FormEvent) {
        e.preventDefault()
        alert('Configuration saved.')
    }

    return (
        <>
            <Header />
            <main style={{ padding: '60px 0', minHeight: '80vh' }}>
                <section className="container-narrow">
                    <div className="mb-8 border-b border-black pb-4 flex justify-between items-end">
                        <h1 className="text-3xl font-bold">Configuration</h1>
                        <span className="font-mono text-sm">RULE_SET_01</span>
                    </div>

                    <form onSubmit={handleSave}>
                        <div className="box-card mb-8">
                            <h2 className="text-xl font-bold mb-6">Input Filtering</h2>

                            {/* Required Items */}
                            <div className="form-group">
                                <label className="form-label">Mandatory Attachments / Content</label>
                                <div className="checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={rules.requiredItems.cvAttached}
                                            onChange={(e) => setRules({
                                                ...rules,
                                                requiredItems: { ...rules.requiredItems, cvAttached: e.target.checked }
                                            })}
                                        />
                                        CV or Resume Attached
                                    </label>
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={rules.requiredItems.projectMention}
                                            onChange={(e) => setRules({
                                                ...rules,
                                                requiredItems: { ...rules.requiredItems, projectMention: e.target.checked }
                                            })}
                                        />
                                        Specific Project Reference
                                    </label>
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox"
                                            checked={rules.requiredItems.specificCourse}
                                            onChange={(e) => setRules({
                                                ...rules,
                                                requiredItems: { ...rules.requiredItems, specificCourse: e.target.checked }
                                            })}
                                        />
                                        Course Code Mention
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="box-card mb-8">
                            <h2 className="text-xl font-bold mb-6">Candidate Profiling</h2>

                            <div className="form-group">
                                <label className="form-label">Target Academic Level</label>
                                <div className="grid-2">
                                    <div className="checkbox-group">
                                        <label className="checkbox-label">
                                            <input type="checkbox" className="form-checkbox" checked={rules.preferredBackground.undergraduate}
                                                onChange={(e) => setRules({ ...rules, preferredBackground: { ...rules.preferredBackground, undergraduate: e.target.checked } })} />
                                            Undergraduate
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" className="form-checkbox" checked={rules.preferredBackground.postgraduate}
                                                onChange={(e) => setRules({ ...rules, preferredBackground: { ...rules.preferredBackground, postgraduate: e.target.checked } })} />
                                            Postgraduate (Masters)
                                        </label>
                                        <label className="checkbox-label">
                                            <input type="checkbox" className="form-checkbox" checked={rules.preferredBackground.phd}
                                                onChange={(e) => setRules({ ...rules, preferredBackground: { ...rules.preferredBackground, phd: e.target.checked } })} />
                                            PhD Candidate
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-card mb-8">
                            <h2 className="text-xl font-bold mb-6">Output Parameters</h2>

                            {/* Reply Tone */}
                            <div className="form-group">
                                <label htmlFor="replyTone" className="form-label">Response Tone</label>
                                <select
                                    id="replyTone"
                                    className="form-select"
                                    value={rules.replyTone}
                                    onChange={(e) => setRules({ ...rules, replyTone: e.target.value as 'formal' | 'neutral' | 'brief' })}
                                >
                                    <option value="formal">Formal (Academic Standard)</option>
                                    <option value="neutral">Neutral (Direct)</option>
                                    <option value="brief">Brief (Minimalist)</option>
                                </select>
                            </div>

                            {/* Signature */}
                            <div className="form-group">
                                <label htmlFor="signature" className="form-label">Email Signature Block</label>
                                <textarea
                                    id="signature"
                                    className="form-textarea"
                                    value={rules.signature}
                                    onChange={(e) => setRules({ ...rules, signature: e.target.value })}
                                    placeholder="Best regards,&#10;Dr. Jane Smith&#10;Professor of Computer Science"
                                    maxLength={500}
                                />
                                <div className="text-right mt-2">
                                    <small className="text-xs font-mono text-muted">{rules.signature.length} / 500 CHARS</small>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
                                Save Configuration
                            </button>
                            <button type="button" onClick={() => router.push('/dashboard')} className="btn btn-outline">
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}
