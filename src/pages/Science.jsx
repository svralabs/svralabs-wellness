import { motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import { SCIENCE_PILLARS } from '../data/content.js';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

export default function Science() {
  return (
    <>
      <PageHero
        icon="science"
        badge="Science"
        title="The evidence behind every feature"
        subtitle="How we decide what makes it into the app — and what we leave out."
      />

      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="py-16 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCIENCE_PILLARS.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-8 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="bg-tertiary-container text-on-tertiary-container w-14 h-14 rounded-xl flex items-center justify-center border-2 border-primary mb-4">
                <span className="material-symbols-outlined text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {pillar.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-section-margin px-6 bg-surface-container-low"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.h2 variants={fadeUp} className="font-headline-lg text-headline-lg text-on-surface text-center">
            What we will never do
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'block', label: 'No fake metrics' },
              { icon: 'campaign', label: 'No fear-based marketing' },
              { icon: 'monetization_on', label: 'No data sales' },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-surface rounded-xl p-6 border-2 border-primary text-center"
              >
                <span className="material-symbols-outlined text-4xl text-on-surface-variant block mb-2">
                  {item.icon}
                </span>
                <p className="font-label-bold text-label-bold text-on-surface">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}