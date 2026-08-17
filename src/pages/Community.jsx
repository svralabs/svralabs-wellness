import { motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import { COMMUNITY_CIRCLES } from '../data/content.js';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

export default function Community() {
  return (
    <>
      <PageHero
        icon="groups"
        badge="Community"
        title="Find your people"
        subtitle="Four core circles, dozens of focused rooms. Drop in, drop out, no awkward exits."
      />

      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="py-16 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMMUNITY_CIRCLES.map((circle) => (
            <motion.div
              key={circle.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-8 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
            >
              <div className="bg-secondary-container text-on-secondary-container w-14 h-14 rounded-full flex items-center justify-center border-2 border-primary mb-4">
                <span className="material-symbols-outlined text-2xl">{circle.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                {circle.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-grow">
                {circle.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-label-bold text-label-bold text-on-surface">
                  {circle.members} active members
                </span>
                <button className="bg-primary-container text-on-primary-container font-button-text text-button-text px-6 py-3 rounded-full hover:bg-primary-container/90 transition-transform hover:scale-[1.02] active:scale-95 border-2 border-primary">
                  Join circle
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="py-section-margin px-6"
      >
        <motion.div
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h2 className="font-headline-lg text-headline-lg text-on-surface">House rules</h2>
          <ul className="font-body-md text-body-md text-on-surface-variant space-y-2 text-left max-w-xl mx-auto">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              Show up. We're small and we notice.
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              No diagnosis. No treatment plans. We're a community, not a clinic.
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              No "shoulds". Share what you do, not what others ought to.
            </li>
          </ul>
        </motion.div>
      </motion.section>
    </>
  );
}