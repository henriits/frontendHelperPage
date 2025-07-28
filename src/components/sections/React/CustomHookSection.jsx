import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  useToggle: `// useToggle — boolean switch
import { useState } from "react";

const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = () => setState((s) => !s);
  return [state, toggle];
};`,

  useLocalStorage: `// useLocalStorage — persistent state
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

  usePrevious: `// usePrevious — track previous value
import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};`,

  useWindowSize: `// useWindowSize — get viewport dimensions
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState(
    { width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize(
        { width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};`,

  useCopyToClipboard: `// useCopyToClipboard — copy logic
import { useState } from "react";

const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setCopied(false);
    }
  };

  return [copied, copy];
};`,
};

const CustomHooksSection = () => (
  <Section id="custom-hooks" title="Custom Hooks">
    <p className="mb-4">
      Reusable hooks for cleaner React logic. Use them to abstract common
      patterns like toggling, persistence, and viewport detection:
    </p>
    {Object.entries(examples).map(([name, code]) => (
      <div key={name} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🪄 {name}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default CustomHooksSection;
