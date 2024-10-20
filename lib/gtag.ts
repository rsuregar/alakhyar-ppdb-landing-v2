// lib/gtag.ts
export const GA_MEASUREMENT_ID = process.env
  .NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID as string

// Initialize pageview tracking
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// Event tracking function
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value: string
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
