import { motion } from 'framer-motion';
import { BRAND } from '../data/site.js';
import { fadeUp, stagger } from '../lib/motion.jsx';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative pt-24 pb-32 px-6 overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-64 h-64 bg-secondary-container rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-0 right-20 w-72 h-72 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={fadeUp} className="space-y-stack-lg">
          <h1 className="font-headline-xl text-headline-xl text-on-surface">
            {BRAND.tagline.split('through')[0]}through <span className="text-primary">tech.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            {BRAND.description}
          </p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-container text-on-primary-container font-button-text text-button-text px-8 py-4 rounded-full hover:bg-primary-container/90 transition-colors border-2 border-primary flex items-center gap-2"
            >
              Join the Program
              <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface text-primary font-button-text text-button-text px-8 py-4 rounded-full border-2 border-primary hover:bg-surface-container transition-colors"
            >
              Explore the Science
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
          <div className="absolute -inset-4 bg-secondary-container rounded-xl transform rotate-3" />
          <img
            alt="Person practicing yoga in a bright, modern studio with plants"
            className="relative rounded-lg w-full h-[600px] object-cover border-4 border-primary shadow-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvGkFaYaBEDY-qgjeWwoiHozGYDpAiZVjQWL0kATphr_XcCS1lr2feKA0RboQeYYLNY1gpcmEbsTR2TZf1bowlxsAo5AL8W8LAQb1RfeToMvC5FzUi4qVmREUROfqXY4Rrwad4tRIouIduEhjcGC4evwUODAS5dH9MwYcoHv6jLqePDCIQ4sFfRLOW0Nnh9h4LyJVHRbSKzLGenzJy513cuUelbkaRAkvTI9WB1072Ylj8rQhjKv26u7Vb-Ev1LPtPK1sL_j7F8w"
          />
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-10 -left-10 bg-surface rounded-full px-6 py-4 shadow-lg border-2 border-primary flex items-center gap-3"
          >
            <div className="bg-tertiary-container text-on-tertiary-container p-2 rounded-full">
              <span className="material-symbols-outlined icon-fill">eco</span>
            </div>
            <div>
              <p className="font-label-bold text-label-bold text-on-surface">Natural Approach</p>
              <p className="font-body-md text-sm text-on-surface-variant">100% holistic</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}