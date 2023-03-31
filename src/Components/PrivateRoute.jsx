import { Navigate } from "react-router-dom";
import { useAuth } from "../Context";

const PrivateRoute = ({ children }) => {
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
