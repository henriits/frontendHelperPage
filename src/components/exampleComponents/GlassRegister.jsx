import Section from "../Section";
import CodeBlock from "../CodeBlock";
import { useState } from "react";

const registerCode = `import { useState } from "react";

const GlassRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    // Continue with register flow
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">✨ Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Create Password"
            autoComplete="new-password"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            placeholder="Confirm Password"
            autoComplete="new-password"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-teal-500 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-300">🔄 Already have an account?</p>
      </div>
    </div>
  );
};

export default GlassRegister;`;

const GlassRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    // Optional: handle form submission logic
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl p-8 w-full max-w-sm text-white">
        <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">
          ✨ Create Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password"
            autoComplete="new-password"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm Password"
            autoComplete="new-password"
            className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-teal-500 py-2 rounded font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-300">
          🔄 Already have an account?
        </p>
      </div>
    </div>
  );
};

const GlassRegisterPage = () => (
  <Section id="glass-register" title="Futuristic Register Form">
    <p className="mb-4">
      Updated registration form with a double password check for improved UX and
      validation support. Styled with glowing inputs and blurred backgrounds for
      a sleek experience.
    </p>
    <div className="mt-6 mb-4">
      <p className="font-semibold mb-2">
        <strong>🌐 GlassRegister (with Confirm)</strong>
      </p>
      <CodeBlock code={registerCode} />
      <br />
      <GlassRegister />
    </div>
  </Section>
);

export default GlassRegisterPage;
