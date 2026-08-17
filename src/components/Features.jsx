import { motion } from 'framer-motion';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

const FEATURES = [
  {
    icon: 'psychology',
    iconBg: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
    iconShape: 'rounded-2xl',
    title: 'Mindful Tracking',
    description:
      'Log your daily practices, mood, and energy levels with intuitive tools designed not to overwhelm.',
    span: 'md:col-span-2',
    style: 'default',
    decoration: 'blob',
  },
  {
    icon: 'trending_up',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    iconShape: 'rounded-full',
    title: 'Growth Analytics',
    description: 'Visualize your progress with beautiful, easy-to-understand charts.',
    span: '',
    style: 'default',
  },
  {
    icon: 'groups',
    iconBg: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-fixed-variant',
    iconShape: 'rounded-xl',
    title: 'Community Support',
    description: 'Connect with like-minded individuals on similar wellness journeys.',
    span: '',
    style: 'default',
    rotation: 'rotate-6',
  },
  {
    icon: 'spa',
    title: 'Expert Guided Programs',
    description:
      'Access scientifically-backed routines developed by wellness professionals to help you reach your specific goals.',
    cta: 'View Programs',
    span: 'md:col-span-2',
    style: 'dark',
  },
];

function FeatureCard({ feature }) {
  if (feature.style === 'dark') {
    return (
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -4 }}
        className="md:col-span-2 bg-primary text-on-primary rounded-xl p-8 border-2 border-primary shadow-lg overflow-hidden relative"
      >
        <div className="absolute -right-10 -bottom-10 opacity-20">
          <span className="material-symbols-outlined text-[200px]">spa</span>
        </div>
        <div className="relative z-10 max-w-lg space-y-6">
          <h3 className="font-headline-md text-headline-md text-on-primary">{feature.title}</h3>
          <p className="font-body-md text-body-md text-primary-fixed-dim">{feature.description}</p>
          <button className="bg-surface text-primary font-button-text text-button-text px-6 py-3 rounded-full hover:bg-surface-container transition-colors">
            {feature.cta}
          </button>
        </div>
      </motion.div>
    );
  }

  const isLarge = feature.span === 'md:col-span-2';
  const shapeClass =
    feature.iconShape === 'rounded-full'
      ? 'rounded-full'
      : feature.iconShape === 'rounded-xl'
        ? `rounded-xl ${feature.rotation || ''}`
        : 'rounded-2xl';

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4 }}
      className={`${feature.span} bg-surface rounded-xl p-8 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group ${
        isLarge ? 'flex flex-col justify-between' : ''
      }`}
    >
      {feature.decoration === 'blob' && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed rounded-bl-full opacity-50 transition-transform group-hover:scale-110" />
      )}
      <div className={`relative z-10 ${isLarge ? 'space-y-4' : ''}`}>
        <div
          className={`${feature.iconBg} ${feature.iconColor} ${
            isLarge ? 'w-14 h-14' : 'w-12 h-12'
          } ${shapeClass} flex items-center justify-center border-2 border-primary mb-4`}
        >
          <span className={`material-symbols-outlined ${isLarge ? 'text-3xl' : ''}`}>
            {feature.icon}
          </span>
        </div>
        <h3
          className={`font-${
            isLarge ? 'headline-md text-headline-md' : 'label-bold text-label-bold text-lg'
          } text-on-surface ${isLarge ? '' : 'mb-2'}`}
        >
          {feature.title}
        </h3>
        <p
          className={`font-body-md text-body-md text-on-surface-variant ${
            isLarge ? 'max-w-md' : 'text-sm'
          }`}
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <motion.section
      id="programs"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-section-margin px-6 bg-surface-container-low relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div variants={fadeUp} className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Designed for your growth
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Our platform adapts to your unique rhythm, providing the tools you need to flourish naturally.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}