// src/App.jsx
import React from "react";
import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  switch (auth.activeNavigator) {
    case "signinSilent":
      return <div>Signing you in...</div>;
    case "signoutRedirect":
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    console.log(auth.error);
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        Hello {auth.user?.profile.sub}{" "}
        <button onClick={() => void auth.removeUser()}>Log out</button>
      </div>
    );
  }

  return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth-context';

const Home = () => {
  const anotherLogin = () => {
    return <Navigate to="/login" />
  }
  return (
      <div>Home page<p /><button onClick={anotherLogin}>foo</button></div>
  );
};

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return <div>Dashboard view: Welcome, {user.profile.name}</div>;
};

const Login = () => {
  const { signIn } = useAuth();
  const handleLogin = () => { signIn(); };

  return (
    <div><h2>login, please</h2><p /><button onClick={handleLogin}>Login</button></div>
  );
};

const Logout = () => {
  const { signOut } = useAuth();
  const handleLogout = () => { signOut(); };

  return (
    <div><h2>logout</h2><p /><button onClick={handleLogout}>Logout</button></div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
};

export default App;
*/

/*
import { useEffect, useState } from 'react'
import './App.css'
import { useAuth } from "react-oidc-context";

function App() {
  const [count, setCount] = useState(0)
  const [publicApiData, setPublicApiData] = useState("i got nothing");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/foo')
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`)
        }
        const json = await response.json();
        setPublicApiData(JSON.stringify(json));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const importantData = () => {
    if (loading) {
      return <p>Loading...</p>
    }
    if (error) {
      return <p>an error occurred</p>
    }
    return <p>{publicApiData}</p>
  }

  const auth = useAuth();

  const showLoginButton = () => {
    switch (auth.activeNavigator) {
      case "signinSilent":
        return <div>Signing you in...</div>;
      case "signoutRedirect":
        return <div>Signing you out...</div>;
    }

    if (auth.isLoading) {
      return <div>Loading...</div>;
    }

    if (auth.error) {
      return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
      return (
        <div>
            Hello {auth.user?.profile.sub}{" "}
            <button onClick={() => void auth.removeUser()}>Log out</button>
        </div>
      );
    }
    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
  };

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          {showLoginButton()}
        </div>
        <div>
          {importantData()}
        </div>
      </div>
    </div>
  )
}

export default App
*/
