import { motion } from 'framer-motion';

function Ultrawide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-pink-800 to-black text-white font-sans">
      <header className="text-center p-10">
        <h1 className="text-5xl font-bold">RhythmHub</h1>
        <p className="text-xl mt-4">Connect. Create. Harmonize.</p>
      </header>

      <section className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Instrument-Specific Profiles</h2>
          <p>
            Create and customize your profile by instrument, skill level, and share performances.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Virtual Jam Sessions</h2>
          <p>Connect with musicians online for real-time jam experiences and events.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Learning Hub</h2>
          <p>Access lessons, workshops, and instrument reviews to grow your skills.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Showcase & Spotlight</h2>
          <p>Feature your music, share releases, and get noticed in the community.</p>
        </motion.div>
      </section>

      <footer className="text-center p-6 text-sm text-white/70">
        &copy; {new Date().getFullYear()} Revyll OGANDAGA • RhythmHub Project
      </footer>
    </main>
  );
}

export default Ultrawide;
