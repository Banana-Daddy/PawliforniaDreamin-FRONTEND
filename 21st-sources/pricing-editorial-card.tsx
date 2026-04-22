// Source: 21st.dev
// Query: "pricing editorial serif minimal"
// Component: Pricing Card (Ultimate Plan) - shadcn-style split card
// Saved: 2026-04-22
//
// What we borrowed for Pawlifornia Dreamin':
// - Split two-column card treatment: price column + features column with divider
// - Clean "$price" next to struck-through originalPrice pattern
// - Grouped feature columns (e.g., "Features" / "Perks") with thin separators between groups
// - Staggered entrance on list items with motion variants
// - Adapted for our 6-package editorial pricing strip where each package is treated like a named product with hour/price

"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function PricingCard({ title, description, price, originalPrice, features, buttonText = "Get Started", onButtonClick }: PricingCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => { if (isInView && !hasAnimated) setHasAnimated(true); }, [isInView, hasAnimated]);

  return (
    <motion.section ref={containerRef} className="container py-12 md:py-24">
      <Card className="relative mx-auto w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10">
            <div>
              <CardTitle className="text-3xl font-bold">{title}</CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
              <div className="mt-6 space-y-4">
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold">${price}</span>
                  {originalPrice && (
                    <span className="ml-2 text-xl text-muted-foreground line-through">${originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
            <Button className="w-full mt-8" size="lg" onClick={onButtonClick}>{buttonText}</Button>
          </div>
          <div className="bg-muted/50 p-6 lg:w-3/5 lg:p-10">
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i}>
                  <h3 className="mb-4 text-lg font-semibold">{feature.title}:</h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center"><Check className="mr-2 h-4 w-4 text-primary" /><span className="text-sm">{item}</span></li>
                    ))}
                  </ul>
                  {i < features.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
}
