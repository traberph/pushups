import { useEffect, useState } from "react";
import { authService } from "../services/authService";

const HomePage = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userName, setUserName] = useState<string | null>("Guest");

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await authService.isAuthenticated();
      setIsAuthenticated(authenticated);
      console.log("Authenticated:", authenticated);

      const user = await authService.getUser();
      if (user) {
        setUserName(user.profile.name || "Guest");
        console.log("User:", user.profile.name);
      }

      if (!authenticated) {
        console.log("Redirecting to login...");
        // authService.login();
      } else {
        console.log("User is authenticated");
      }
    };
    checkAuth();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold">
          {`Welcome ${userName}`}
        </h1>
        <p className="mt-4 text-gray-600">
          This is the home page of your application.
        </p>
        <p className="mt-4 text-gray-600">
          You can add your content here.
        </p>
      </div>
    </div>
  )}

export default HomePage