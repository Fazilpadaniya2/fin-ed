    import { Navigate } from "react-router-dom";

    /**
     * Simple guard:
     * - If there's a token in localStorage, render the children.
     * - Otherwise, kick to /login.
     *
     * Later, we can upgrade this to call /api/auth/me to *verify* the token.
     */
    function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/login" replace />;
    return children;
    }
    export default ProtectedRoute;