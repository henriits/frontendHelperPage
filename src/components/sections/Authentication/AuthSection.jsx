import Section from "../../Section";
import CodeBlock from "../../CodeBlock";

const examples = {
  authContext: `// AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};`,

  protectedRoute: `// ProtectedRoute.jsx
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};`,

  loginForm: `// LoginForm.jsx
import { useState } from "react";
import { useAuth } from "./AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login("Henri");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 text-white">
      <input value={email} onChange={(e) => 
        setEmail(e.target.value)} placeholder="Email" />
      <input value={pass} onChange={(e) => 
        setPass(e.target.value)} type="password" placeholder="Password" />
      <button className="bg-blue-600 px-4 py-2 rounded">Log In</button>
    </form>
  );
};`,

  registerForm: `// RegisterForm.jsx
import { useState } from "react";

const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 text-white">
      <input value={name} onChange={(e) => 
        setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => 
        setEmail(e.target.value)} placeholder="Email" />
      <input value={pass} onChange={(e) => 
        setPass(e.target.value)} type="password" placeholder="Password" />
      <button className="bg-green-600 px-4 py-2 rounded">Create Account</button>
    </form>
  );
};`,
};

const AuthSection = () => (
  <Section id="auth" title="Authentication Setup">
    <p className="mb-4">
      Here's how to build basic authentication in React using context and
      protected routes. Ideal for fake logins or integrating with future auth
      services:
    </p>

    {Object.entries(examples).map(([label, code]) => (
      <div key={label} className="mt-6 mb-4">
        <p className="font-semibold mb-2">
          <strong>🔒 {label}</strong>
        </p>
        <CodeBlock code={code} />
      </div>
    ))}
  </Section>
);

export default AuthSection;
