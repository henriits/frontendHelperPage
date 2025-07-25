import { useState } from "react";
import { motion } from "framer-motion";

const demos = {
  FadeIn: (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, repeat: Infinity }}
      className="bg-green-600 rounded p-4 text-white inline-block"
    >
      🌿 I smoothly fade in
    </motion.div>
  ),
  SlideUp: (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, repeat: Infinity }}
      className="bg-purple-600 rounded p-4 text-white inline-block"
    >
      🪜 I slide upward
    </motion.div>
  ),
  HoverScale: (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      🖱️ Hover me!
    </motion.button>
  ),
  BounceLoop: (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 0.6, repeat: Infinity }}
      className="bg-yellow-500 text-black rounded p-4 inline-block"
    >
      🔁 I'm bouncing!
    </motion.div>
  ),
};

const AnimationsDemos = () => {
  const [activeDemo, setActiveDemo] = useState("FadeIn");

  return (
    <div className="bg-gray-900 border border-gray-700 p-6 rounded text-white mt-6">
      <h3 className="text-lg font-semibold mb-4">🎬 Animation Preview</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(demos).map((key) => (
          <button
            key={key}
            onClick={() => setActiveDemo(key)}
            className={`px-3 py-1 rounded ${
              activeDemo === key
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="text-center pt-4">{demos[activeDemo]}</div>
    </div>
  );
};

export default AnimationsDemos;
