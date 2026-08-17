import { motion } from 'framer-motion';
import PageHero from '../components/PageHero.jsx';
import { JOURNAL_POSTS } from '../data/content.js';
import { fadeUp, stagger, scaleIn } from '../lib/motion.jsx';

export default function Journal() {
  return (
    <>
      <PageHero
        icon="edit_note"
        badge="Journal"
        title="Field notes from the lab"
        subtitle="Long-form writing on what we are building, what we learned, and what surprised us."
      />

      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="py-16 px-6"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {JOURNAL_POSTS.map((post) => (
            <motion.article
              key={post.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="bg-surface rounded-xl p-8 border-2 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary-container text-on-primary-container text-xs font-medium px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="font-body-md text-sm text-on-surface-variant">
                  {post.readTime} · {post.date}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3">
                {post.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
                {post.excerpt}
              </p>
              <motion.div
                variants={fadeUp}
                className="mt-6 text-primary font-medium"
              >
                Read more →
              </motion.div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}