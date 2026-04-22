// Source: 21st.dev
// Query: "section divider numbered editorial"
// Component: Content Block / Tailark row divider pattern
// Saved: 2026-04-22
//
// What we borrowed for Pawlifornia Dreamin':
// - Row-based asymmetric content blocks with thin rules separating rows
// - Grid of 5 columns where illustration takes 2 and content takes 3 (with border-left)
// - Used as the skeleton for our "Included in Every Package" row layout
// - Also informed the "№ 0X — [Section Name]" section opener treatment: label + thin rule + content
// - Our version uses serif display titles and periwinkle numbering instead of color icon

'use client'
import { cn } from '@/lib/utils'

export default function ContentSection() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <span className="text-primary">Smart Editor</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Ask Tailark to Edit anything</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">Efficient content creation is our mission.</p>
                    </div>

                    <div className="border-foreground/5 space-y-6 sm:space-y-0 sm:divide-y">
                        <div className="grid sm:grid-cols-5">
                            <div className="sm:col-span-2">Illustration</div>
                            <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                                <h3 className="text-foreground text-xl font-semibold">Marketing Campaigns</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Description content here.</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-5">
                            <div className="flex items-center justify-center pt-12 sm:col-span-2">Second illustration</div>
                            <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                                <h3 className="text-foreground text-xl font-semibold">AI Meeting Scheduler</h3>
                                <p className="text-muted-foreground mt-4 text-lg">Second description.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
