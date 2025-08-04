import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  useToggle: `// ✅ useToggle — quick boolean switch (e.g., modal open/close)
import { useState } from "react";

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = () => setState((s) => !s);
  return [state, toggle];
};`,

  useLocalStorage: `// 💾 useLocalStorage — sync state to browser storage
import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};`,

  usePrevious: `// 🔙 usePrevious — compare current & last state (good for form validation, animation triggers)
import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};`,

  useWindowSize: `// 📐 useWindowSize — responsive logic (great for conditional rendering based on screen size)
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};`,

  useCopyToClipboard: `// 📋 useCopyToClipboard — copy text & show feedback
import { useState } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return [copied, copy];
};`,
};

const CustomHooksSection = () => (
  <Section id="custom-hooks" title="Handy Custom Hooks">
    <p className="mb-4">
      Abstract common logic into reusable hooks to boost maintainability and
      readability. These are clutch for modals, persistence, responsiveness, and
      even feedback UX:
    </p>
    {Object.entries(examples).map(([name, code]) => (
      <div key={name} className="mt-6 mb-4">
        <p className="font-semibold mb-2 capitalize">
          <strong>🪄 {name.replace(/([A-Z])/g, " $1").trim()}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default CustomHooksSection;
