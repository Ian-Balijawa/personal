import { useLocation, Navigate } from "react-router-dom";

export const WithAuth = <P extends object>(
  ProtectedComponent: React.FunctionComponent<P>
) => {
  const ComponentWithAuth: React.FunctionComponent<P> = ( props ) => {

    const isAuthenticated = true
    const location = useLocation();

    return isAuthenticated ? (
      <ProtectedComponent {...props} />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    );
  };
  return ComponentWithAuth;
};
