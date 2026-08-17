import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import { PROGRAMS } from '../data/content.js';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

export default function Programs() {
  return (
    <>
      <PageHero
        icon="spa"
        badge="Programs"
        title="Programs that fit your life, not the other way around"
        subtitle="Short, focused tracks designed by clinicians and coaches. Pick one, finish it, see the change."
      />

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROGRAMS.map((program) => (
            <motion.article
              key={program.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-8 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-container text-on-primary-container w-14 h-14 rounded-2xl flex items-center justify-center border-2 border-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">{program.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {program.title}
                  </h3>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-secondary-container text-on-secondary-container text-xs font-medium px-2 py-1 rounded-full">
                      {program.duration}
                    </span>
                    <span className="bg-tertiary-container text-on-tertiary-container text-xs font-medium px-2 py-1 rounded-full">
                      {program.level}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                {program.description}
              </p>
              <button className="mt-6 bg-primary-container text-on-primary-container font-button-text text-button-text px-6 py-3 rounded-full hover:bg-primary-container/90 transition-transform hover:scale-[1.02] active:scale-95 border-2 border-primary self-start">
                Start program
              </button>
            </motion.article>
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
        <motion.div
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-primary text-on-primary rounded-xl p-10 border-2 border-primary shadow-lg text-center space-y-6"
        >
          <h3 className="font-headline-lg text-headline-lg">Not sure where to start?</h3>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim">
            Take the 2-minute quiz. We'll match you to a program based on your goals, schedule, and wearable data.
          </p>
          <Link
            to="/"
            className="inline-block bg-surface text-primary font-button-text text-button-text px-8 py-4 rounded-full hover:bg-surface-container transition-colors"
          >
            Take the quiz
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
}