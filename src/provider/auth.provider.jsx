import { createContext, useContext, useState, useEffect } from "react";

// Context makes authentication data available without passing it through props.
const AuthContext = createContext();

export const useAuth = () => {
    // Components call useAuth() to read the value supplied by AuthProvider.
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};



export const AuthProvider = ({ children }) => {
    // loginData is null when logged out and contains the logged-in user's data otherwise.
    const [loginData, setLoginDataState] = useState(null);
    const [loading, setLoading] = useState(true);

    // Keep React state and sessionStorage in sync when the user logs in or out.
    const setLoginData = (data) => {
        setLoginDataState(data);
        if (data) {
            // Store token in sessionStorage when logging in
            sessionStorage.setItem('access_token', JSON.stringify(data));
        } else {
            // Remove from sessionStorage when logging out
            sessionStorage.removeItem('access_token');
        }
    };

    // Restore the session after a page refresh. sessionStorage lasts until the tab closes.
    useEffect(() => {
        const storedToken = sessionStorage.getItem('access_token');
        if (storedToken) {
            try {
                const parsedToken = JSON.parse(storedToken);
                setLoginDataState(parsedToken); // Use internal state setter to avoid re-storing
            } catch (error) {
                console.error('Error parsing stored token:', error);
                sessionStorage.removeItem('access_token');
            }
        }
        setLoading(false);
    }, []);

    // Logging out with null clears both the in-memory state and saved session.
    const logout = () => {
        setLoginData(null); // This will handle both state and storage
    };

    // These are the values and functions that become available through useAuth().
    const value = {
        loginData,
        setLoginData,
        logout,
        loading,
        isLoggedIn: !!loginData
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};