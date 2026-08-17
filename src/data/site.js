// Centralized site config — single source of truth for brand, nav, links, content.
export const BRAND = {
  name: 'svralabs',
  tagline: 'Cultivating wellness through tech',
  description:
    'Join a community dedicated to natural growth, mindful practices, and data-driven health insights. Your journey to balanced living starts here.',
};

export const NAV_LINKS = [
  { label: 'Programs', href: '/programs' },
  { label: 'Science', href: '/science' },
  { label: 'Community', href: '/community' },
  { label: 'Journal', href: '/journal' },
];

export const FOOTER_LINKS = [
  { label: 'About Us', href: '/#community' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact', href: '/#faq' },
];

export const HERO_CTAS = [
  { label: 'Join the Program', icon: 'arrow_forward', variant: 'primary' },
  { label: 'Explore the Science', variant: 'outline' },
];