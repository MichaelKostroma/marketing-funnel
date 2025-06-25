# A/B Testing Concept: Changing the Color of a CTA Button

## Overview

A/B testing compares different variants of a UI element to see which performs better

## Approach 1: Custom Feature Flags + Middleware Analytics

### 1. Define & Serve Variants

#### Feature flag

- Store a flag (e.g. `cta_color_test`) that assigns users to Variant A (blue) or Variant B (green) in browser store (e.g. localStorage or cookie so repeat visits get the same variant)

### 2. Inject Variant in Frontend

```typescript
const variant = getCookie('cta_color_test') || assignAndSetCookie();
const buttonColor = variant === 'A' ? '#3b82f6' : '#10b981';
return <button style={{ backgroundColor: buttonColor }}>Get Started</button>;
```

### 3. Track & Collect Data

#### Middleware analytics

In middleware.ts, intercept CTA clicks or page views and forward to analytics pipeline:

```typescript
import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/track-cta') {
    const variant = req.cookies.get('cta_color_test');
    // send { variant, timestamp, userId } to analytics DB
  }
  return NextResponse.next();
}
```

### 4. Analytic

- Collect data into DB (e.g. Postgres)
- Query analytics
- Run tests to check significance

## Approach 2: Using GrowthBook (Open-Source, Free Plan)

### 1. Configure GrowthBook

- Define an experiment `cta_color_test` with two variations:
  - Blue (#3b82f6)
  - Green (#10b981)

### 2. Assign & Render Variant

```jsx
import { GrowthBookProvider, useGrowthBook } from "@growthbook/growthbook-react";

function App() {
  return (
    <GrowthBookProvider growthbook={gb}>
      <CTAButton />
    </GrowthBookProvider>
  );
}

function CTAButton() {
  const gb = useGrowthBook();
  const color = gb.run({
    key: "cta_color_test",
    defaultValue: "#3b82f6",
    variations: ["#3b82f6", "#10b981"],
  });
  return <button style={{ backgroundColor: color }}>Get Started</button>;
}
```

### 3. Features

- GrowthBook auto-tracks exposures and events
- Integrates with Google Analytics, etc
- Provides a dashboard showing variant performance and statistical significance

### 4. Targeting

- Increase rollout of the winning variant directly in GrowthBook
- Target experiments to specific cohorts (e.g. new vs. returning users)



---

## Summary

### Metrics to Collect

- Click-through rate (CTR) on the CTA button
- Conversion rate (e.g. form completions)
- Compare performance by variant

### Analysis Goals

- Determine which variant performs better
- Validate statistical significance of results
- Make data-driven decisions for UI improvements
