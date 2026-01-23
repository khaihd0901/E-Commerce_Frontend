import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuthStore } from "@/stores/authStore";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const { authVerifyEmail} = useAuthStore();
  useEffect(() => {
  authVerifyEmail(token);
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
              ✓
            </div>
            <p className="text-green-600 font-medium">Email verified successfully! Redirecting...</p>
      </div>
    </div>
  );
};

export default VerifyEmail;
