import Section from "../Section";
import CodeBlock from "../CodeBlock";

const notFoundCode = `const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-white">
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl max-w-md w-full p-8 text-center">
      <h1 className="text-5xl font-bold mb-4 text-pink-500">404</h1>
      <p className="mb-4 text-lg">Oops, this page vanished into the void.</p>
      <a
        href="/"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded text-white font-medium hover:opacity-80 transition"
      >
        🏠 Return Home
      </a>
    </div>
  </div>
);

export default NotFoundPage;`;

const NotFoundPage = () => (
  <Section id="not-found" title="404 Page Not Found">
    <p className="mb-4">
      A glowing error panel for missing pages. Helps users get back to safety
      with futuristic style.
    </p>
    <CodeBlock code={notFoundCode} />
    <br />
    <div className="min-h-[400px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-white">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl max-w-md w-full p-8 text-center">
        <h1 className="text-5xl font-bold mb-4 text-pink-500">404</h1>
        <p className="mb-4 text-lg">Oops, this page vanished into the void.</p>
        <a
          href="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded text-white font-medium hover:opacity-80 transition"
        >
          🏠 Return Home
        </a>
      </div>
    </div>
  </Section>
);
export default NotFoundPage;
