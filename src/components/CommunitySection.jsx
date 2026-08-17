import { motion } from 'framer-motion';
import { COMMUNITY_CIRCLES } from '../data/content.js';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

export default function CommunitySection() {
  return (
    <motion.section
      id="community"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="py-section-margin px-6 bg-surface-container-low relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div variants={fadeUp} className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full text-sm font-medium border border-primary">
            Community
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            You don't need another app. You need a circle.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Small, themed groups with real accountability. No influencers, no engagement bait.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_CIRCLES.map((circle) => (
            <motion.div
              key={circle.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-6 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
            >
              <div className="bg-secondary-container text-on-secondary-container w-12 h-12 rounded-full flex items-center justify-center border-2 border-primary mb-4">
                <span className="material-symbols-outlined">{circle.icon}</span>
              </div>
              <h3 className="font-label-bold text-label-bold text-on-surface text-lg mb-2">
                {circle.title}
              </h3>
              <p className="font-body-md text-body-md text-sm text-on-surface-variant mb-4 flex-grow">
                {circle.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-label-bold text-label-bold text-on-surface">
                  {circle.members} members
                </span>
                <button className="text-primary hover:text-primary/80 font-medium">
                  Join →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}