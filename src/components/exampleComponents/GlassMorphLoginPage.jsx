import Section from "../Section";
import CodeBlock from "../CodeBlock";

const loginCode = `import { useState } from "react";

const GlassLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">🔐 Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-300">👾 Forgot your password?</p>
      </div>
    </div>
  );
};

export default GlassLogin;`;

import { useState } from "react";

const GlassLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">
          🔐 Welcome Back
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-300">
          👾 Forgot your password?
        </p>
      </div>
    </div>
  );
};

const GlassLoginPage = () => (
  <Section id="glass-login" title="Futuristic Login Form">
    <p className="mb-4">
      A modern login page featuring glassmorphism styling, glowing gradients,
      and responsive layout. Ideal for sleek dashboards or sci-fi themed
      applications.
    </p>
    <div className="mt-6 mb-4">
      <p className="font-semibold mb-2">
        <strong>🧊 GlassLogin</strong>
      </p>
      <CodeBlock code={loginCode} />
      <br />
      <GlassLogin />
    </div>
  </Section>
);

export default GlassLoginPage;
