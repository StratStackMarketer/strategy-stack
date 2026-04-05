/**
 * Google Analytics 4 Event Tracking Utility
 * Provides standard functions for tracking user interactions
 */

type GAEventProps = {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Tracks a custom event in GA4
 */
export const trackEvent = ({ action, category, label, value, ...rest }: GAEventProps) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...rest,
    });
  }
};

/**
 * Shorthand for tracking CTA button clicks
 */
export const trackCTA = (label: string, location: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: label,
    location: location,
  });
};

/**
 * Shorthand for tracking form/scheduler interactions
 */
export const trackForm = (formName: string, status: 'start' | 'submit' | 'complete') => {
  trackEvent({
    action: `form_${status}`,
    category: 'conversion',
    label: formName,
  });
};
