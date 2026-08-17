import { motion } from 'framer-motion';
import { SCIENCE_PILLARS } from '../data/content.js';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

export default function ScienceSection() {
  return (
    <motion.section
      id="science"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-section-margin px-6 relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div variants={fadeUp} className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
            Science
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Backed by research, built for real life
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            No wellness theatre. Every feature on svralabs maps to a measurable signal in your body.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCIENCE_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-6 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="bg-tertiary-container text-on-tertiary-container w-12 h-12 rounded-xl flex items-center justify-center border-2 border-primary mb-4">
                <span className="material-symbols-outlined">{pillar.icon}</span>
              </div>
              <h3 className="font-label-bold text-label-bold text-on-surface text-lg mb-2">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-sm text-on-surface-variant">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}