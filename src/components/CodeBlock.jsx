import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// tomorrow ,  vscDarkPlus

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="relative rounded-md overflow-x-auto w-full">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 z-10 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 transition"
      >
        {copied ? "✔ Copied" : "Copy"}
      </button>

      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          fontSize: "0.85rem",
          borderRadius: "0.375rem",
        }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
