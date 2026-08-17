import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/motion.jsx';

// Reusable page header pattern — title + subtitle + decorative blob.
export default function PageHero({ icon, title, subtitle, badge }) {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
      <div className="absolute top-0 right-20 w-72 h-72 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {icon && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="inline-flex bg-primary-container text-on-primary-container w-16 h-16 rounded-2xl items-center justify-center border-2 border-primary mb-6"
          >
            <span className="material-symbols-outlined text-3xl">{icon}</span>
          </motion.div>
        )}
        {badge && (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-primary"
          >
            {badge}
          </motion.div>
        )}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-headline-xl text-headline-xl text-on-surface max-w-3xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.15 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}