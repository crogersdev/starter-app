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
