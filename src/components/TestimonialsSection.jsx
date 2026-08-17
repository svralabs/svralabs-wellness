import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/content.js';
import { fadeUp, stagger } from '../lib/motion.jsx';

export default function TestimonialsSection() {
  return (
    <motion.section
      id="testimonials"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-section-margin px-6 bg-surface-container-low relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div variants={fadeUp} className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">What members say</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Real people, real numbers. No paid placements.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-6 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
            >
              <blockquote className="font-body-md text-body-md text-on-surface flex-grow">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 pt-4 border-t border-outline-variant">
                <p className="font-label-bold text-label-bold text-on-surface">{t.name}</p>
                <p className="font-body-md text-sm text-on-surface-variant">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </motion.section>
  );
}