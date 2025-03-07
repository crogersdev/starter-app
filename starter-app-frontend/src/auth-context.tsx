import React, { createContext, useState, useEffect, useContext } from 'react';
import { User } from 'oidc-client-ts';
import { getCurrentUser, handleRedirectCallback } from './auth-service';

interface AuthContextProps {
    user: User | null;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("i'm tyring to login")
        const loadUser = async() => {
            try  {
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.has('code')) {
                    const user = await handleRedirectCallback();
                    setUser(user);
                } else {
                    const existingUser = await getCurrentUser();
                    setUser(existingUser);
                }
            }
            catch (error) {
                console.error("auth error: ", error);
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    const signIn = async () => {
        window.location.replace("http://localhost:5173/login");
    };

    const signOut = async () => {
        window.location.replace("http://localhost:5173/logout");
    };

    const value: AuthContextProps = {
        user, signIn, signOut
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used with an AuthProvider");
    }
    return context;
};

