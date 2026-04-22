// Source: 21st.dev
// Query: "contact form editorial serif"
// Component: Contact Form (shadcn Card variant) + Select for event type
// Saved: 2026-04-22
//
// What we borrowed for Pawlifornia Dreamin':
// - Card-wrapped form centered on page with clear intro copy above the form
// - Label + Input stack pattern with generous vertical rhythm
// - Select dropdown for structured choices (we used it for event type)
// - Clean submit button at the bottom of the form
// - Our inquiry form adapts this with serif labels, periwinkle focus states, and editorial framing ("№ 08 — Say Hello")

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Contact Sales</h1>
                <p className="mt-4 text-center">We'll help you find the right plan and pricing for your business.</p>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    <div>
                        <h2 className="text-xl font-semibold">Let's get you to the right place</h2>
                        <p className="mt-4 text-sm">Reach out to our sales team!</p>
                    </div>

                    <form className="mt-12 space-y-6">
                        <div>
                            <Label htmlFor="name">Full name</Label>
                            <Input type="text" id="name" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Work Email</Label>
                            <Input type="email" id="email" required />
                        </div>
                        <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger><SelectValue placeholder="Select Country/Region" /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">United States</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="msg">Message</Label>
                            <Textarea id="msg" rows={3} />
                        </div>
                        <Button>Submit</Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}
