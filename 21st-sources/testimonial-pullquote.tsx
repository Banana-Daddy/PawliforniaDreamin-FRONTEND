// Source: 21st.dev
// Query: "testimonial pull quote italic serif"
// Component: Testimonials Two (Tailus) + Simple before:bg-primary vertical-rule variant
// Saved: 2026-04-22
//
// What we borrowed for Pawlifornia Dreamin':
// - Massive serif pull quote with tight leading and italic emphasis (our "They weren't guests — they were family." moment)
// - The vertical-rule-on-the-left pattern (::before with absolute positioning) — used on our case-study pull quote
// - Minimal attribution row: cite + rounded separator dot + role in muted color
// - Placed beside or below hero imagery in a feature spread

export default function TestimonialSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <blockquote className="before:bg-primary relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full">
                        <p className="text-foreground text-lg">Using Tailark has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>
                        <footer className="mt-4 flex items-center gap-2">
                            <cite>John Doe</cite>
                            <span aria-hidden className="bg-foreground/15 size-1 rounded-full"></span>
                            <span className="text-muted-foreground">Product Designer</span>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}

// Alternate (large block-quote pattern):
export function TestimonialsHero() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl">
                    <blockquote>
                        <p className="text-lg font-semibold sm:text-xl md:text-3xl">Massive pull-quote magazine treatment goes here.</p>
                        <div className="mt-12 flex items-center gap-6">
                            <div className="space-y-1 border-l pl-6">
                                <cite className="font-medium">Author Name</cite>
                                <span className="text-muted-foreground block text-sm">Role, Company</span>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
