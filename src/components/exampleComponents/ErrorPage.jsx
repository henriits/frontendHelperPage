import Section from "../Section";
import CodeBlock from "../CodeBlock";

const errorCode = `const ErrorPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-gray-900 p-6 text-white">
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl max-w-md w-full p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Unexpected Error</h1>
      <p className="mb-4">Something broke the spacetime continuum 💥</p>
      <a
        href="/"
        className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 px-6 py-2 rounded text-white font-medium hover:opacity-80 transition"
      >
        🚀 Try Again
      </a>
    </div>
  </div>
);

export default ErrorPage;`;

const ErrorPage = () => (
  <Section id="error" title="General Error Page">
    <p className="mb-4">
      Display for internal errors or crashed routes. Uses vibrant warning colors
      and a cosmic theme.
    </p>
    <CodeBlock code={errorCode} />
    <br />
    <div className="min-h-[400px] bg-gradient-to-br from-red-900 via-red-800 to-gray-900 flex items-center justify-center text-white">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl max-w-md w-full p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-yellow-400">
          Unexpected Error
        </h1>
        <p className="mb-4">Something broke the spacetime continuum 💥</p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-yellow-500 to-red-500 px-6 py-2 rounded text-white font-medium hover:opacity-80 transition"
        >
          🚀 Try Again
        </a>
      </div>
    </div>
  </Section>
);

export default ErrorPage;
