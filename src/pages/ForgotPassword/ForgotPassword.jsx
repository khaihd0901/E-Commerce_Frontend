import { createContext, useState } from "react";
import SendEmail from "./SendEmail";
import InputOTP from "./InputOTP";
import ResetPassword from "./ResetPassword";
import Recovered from "./Recovered";

export const RecoveryContext = createContext();

const ForgotPassword = () => {
  const [page, setPage] = useState("sendEmail");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
console.log(page)
  const NavigateComponents = () => {
    switch (page) {
      case "sendEmail":
        return <SendEmail />;
      case "inputOtp":
        return <InputOTP />;
      case "resetPassword":
        return <ResetPassword />;
      case "recovered":
        return <Recovered />;
      default:
        return <SendEmail />;
    }
  };

  return (
    <RecoveryContext.Provider
      value={{ page, setPage, email, setEmail, OTP, setOTP }}
    >
      <NavigateComponents />
    </RecoveryContext.Provider>
  );
};

export default ForgotPassword;
