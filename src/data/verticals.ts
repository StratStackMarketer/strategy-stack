import { 
  Clock, 
  DollarSign, 
  BarChart3, 
  Frown,
  Building2,
  TrendingDown,
  UserX,
  Car,
  Star,
  Smartphone,
  ShoppingCart,
  Store,
  Wallet,
  Flame,
  UserPlus,
  Calendar
} from 'lucide-react';
import type { VerticalConfig } from '../pages/VerticalPage';
import { 
  homeServicesFAQs, 
  propertyManagementFAQs, 
  automotiveFAQs, 
  retailFAQs, 
  saasStartupsFAQs 
} from './faqs';

export const homeServicesConfig: VerticalConfig = {
  badge: 'Home Services Marketing',
  headline: 'Premium Marketing.',
  headlineAccent: 'Unreal Prices.',
  subheadline: 'Finally—an agency that cuts through the BS. Built for contractors who want leads, not meetings.',
  
  problemTitle: 'Sick of the Same Misaligned, Outdated and Overpriced Options?',
  problemSubtitle: "You're not alone. Home service businesses across the industry are fed up with the same old providers and service contracts.",
  painPoints: [
    { icon: Clock, text: 'Endless meetings that pull you away from job sites' },
    { icon: DollarSign, text: 'Long-term contracts, hidden fees, and unclear pricing' },
    { icon: BarChart3, text: 'No clear ROI visibility—just invoices and vague reports' },
    { icon: Frown, text: "Overwhelming service packages that don't fit your business" },
  ],
  
  solutionPoints: [],
  faqs: homeServicesFAQs,
  industry: 'Home Services',
  color: 'bg-cyan-400',
};

export const propertyManagementConfig: VerticalConfig = {
  badge: 'Property Management Marketing',
  headline: 'Fill Units. Retain Residents.',
  headlineAccent: 'Increase NOI.',
  subheadline: 'Marketing built for property managers who need occupancy, not another vendor meeting.',
  
  problemTitle: 'Vacancy Eating Your NOI?',
  problemSubtitle: "You're not alone. Property managers everywhere are tired of marketing that doesn't understand multifamily economics.",
  painPoints: [
    { icon: Building2, text: 'High vacancy rates eating into NOI' },
    { icon: UserX, text: "Marketing vendors who don't understand multifamily metrics" },
    { icon: TrendingDown, text: 'Inconsistent lead quality from rental listing sites' },
    { icon: Clock, text: "No time to manage marketing when you're managing properties" },
  ],
  
  solutionPoints: [],
  faqs: propertyManagementFAQs,
  industry: 'Property Management',
  color: 'bg-primary',
};

export const automotiveConfig: VerticalConfig = {
  badge: 'Automotive Marketing',
  headline: 'Drive More Traffic, Leads, and Sales.',
  headlineAccent: 'Dominate Your Local Market.',
  headlineAccentClass: 'text-4xl md:text-5xl lg:text-6xl whitespace-nowrap',
  subheadline: 'Marketing for automotive businesses who want customers in the door, not consultants on the phone.',
  
  problemTitle: 'Marketing Agencies That Get the Car Business?',
  problemSubtitle: "Good luck finding one. Most agencies don't understand your margins, your inventory, or your customers.",
  painPoints: [
    { icon: Car, text: "Marketing agencies that don't understand the car business" },
    { icon: DollarSign, text: 'Wasted ad spend on low-intent leads' },
    { icon: Star, text: 'Online reputation can make or break you' },
    { icon: Smartphone, text: 'Keeping up with digital while running the lot/shop' },
  ],
  
  solutionPoints: [],
  faqs: automotiveFAQs,
  industry: 'Automotive',
  color: 'bg-red-400',
};

export const retailConfig: VerticalConfig = {
  badge: 'Retail Marketing',
  headline: 'Ultra Fast & High Quality Services',
  headlineAccent: 'That Save You Time and Money.',
  subheadline: 'Marketing for local retailers competing against big box and Amazon.',
  
  problemTitle: 'Competing Against Giants on a Shoestring?',
  problemSubtitle: "You're not alone. Local retailers everywhere are fighting for customers against unlimited corporate budgets.",
  painPoints: [
    { icon: ShoppingCart, text: 'Big box and e-commerce giants eating market share' },
    { icon: Wallet, text: 'Limited marketing budget stretched thin' },
    { icon: Clock, text: 'No time to manage social, email, and ads' },
    { icon: Store, text: "Agencies that don't understand small retail margins" },
  ],
  
  solutionPoints: [],
  faqs: retailFAQs,
  industry: 'Retail',
  color: 'bg-secondary',
};

export const saasStartupsConfig: VerticalConfig = {
  badge: 'SaaS Startup Marketing',
  headline: 'Scale Smarter.',
  headlineAccent: 'Grow Faster.',
  headlineThirdLine: 'Stay Lean.',
  subheadline: "Growth marketing for early-stage SaaS that can't afford to waste runway.",
  
  problemTitle: 'Burning Cash on Agencies That Don\'t Get SaaS?',
  problemSubtitle: "You're not alone. Founders everywhere are frustrated with agencies that don't understand startup economics.",
  painPoints: [
    { icon: Flame, text: "Burning cash on agencies that don't understand SaaS metrics" },
    { icon: UserPlus, text: "Need demand gen but can't hire a full marketing team" },
    { icon: Calendar, text: 'Content, SEO, paid — too much to manage as a founder' },
    { icon: DollarSign, text: 'Agencies that want $10k/month retainers' },
  ],
  
  solutionPoints: [],
  faqs: saasStartupsFAQs,
  industry: 'SaaS Startups',
  color: 'bg-green-400',
};

export const verticalConfigs = {
  'home-services': homeServicesConfig,
  'property-management': propertyManagementConfig,
  'automotive': automotiveConfig,
  'retail': retailConfig,
  'saas-startups': saasStartupsConfig,
};

export default verticalConfigs;
