import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/content.js';
import { fadeUp, stagger } from '../lib/motion.jsx';

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <motion.div variants={fadeUp} className="bg-surface rounded-xl border-2 border-primary overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-surface-container transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-label-bold text-label-bold text-on-surface text-base">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="material-symbols-outlined text-primary flex-shrink-0"
        >
          add
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="font-body-md text-body-md text-on-surface-variant px-6 pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <motion.section
      id="faq"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-section-margin px-6 relative"
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div variants={fadeUp} className="text-center space-y-4">
          <span className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
            FAQ
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Questions, answered</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            The five we get most often. Anything else — hi@svralabs.dev.
          </p>
        </motion.div>
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}