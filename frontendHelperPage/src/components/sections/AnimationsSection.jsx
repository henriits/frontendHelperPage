import Section from "../Section";
import CodeBlock from "../CodeBlock";
import AnimationsDemos from "./AnimationsDemos";

const examples = {
  installMotion: `// Install framer-motion
npm install framer-motion`,

  tailwindSetup: `// Extend animations in tailwind.config.js
extend: {
  animation: {
    'fade-in': 'fadeIn 0.5s ease-out forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
}`,

  tailwindFade: `// Tailwind fade-in utility
<div className="opacity-0 animate-fade-in">Hello, world!</div>`,

  framerMotion: `// Basic fade-in with framer-motion
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  I fade in!
</motion.div>`,

  framerHover: `// Hover scaling button
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  className="bg-blue-600 text-white px-4 py-2 rounded"
>
  Hover me
</motion.button>`,

  framerVariants: `// Motion variants
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 0.5 }}
>
  From below with style
</motion.div>`,
};

const AnimationsSection = () => (
  <Section id="animations" title="Animations in React">
    <p className="mb-4">
      Create delightful UI interactions using Tailwind transitions and{" "}
      <code>framer-motion</code> for more advanced animation control:
    </p>

    {Object.entries(examples).map(([key, code]) => (
      <div key={key} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🎞️ {key}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}

    <p className="mt-10 mb-2 font-semibold text-white">
      <strong>🧪 Live Preview</strong>
    </p>
    <AnimationsDemos />
  </Section>
);

export default AnimationsSection;
