import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Recovered = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/login", { replace: true });
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="my-20 flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Check Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Password Reset Successful 🎉
        </h2>

        <p className="text-gray-600 mb-6">
          Your password has been updated successfully.
        </p>

        <p className="text-sm text-gray-500">
          Redirecting to login in{" "}
          <span className="font-semibold text-black">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default Recovered;
