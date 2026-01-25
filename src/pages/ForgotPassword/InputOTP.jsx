import { useRef, useState, useContext, useEffect } from "react";
import { RecoveryContext } from "./ForgotPassword";
import { useUserStore } from "@/stores/userStore";

const InputOTP = () => {
  const { setPage, email, setOTP } = useContext(RecoveryContext);
  const { userVerifyOTP,clearState } = useUserStore();
  const isSuccess = useUserStore((s) => s.isSuccess)
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [timerCount, setTimer] = useState(60);
  const [disable, setDisable] = useState(true);

  const inputsRef = useRef([]);

  const firstEmptyIndex = otp.findIndex((v) => v === "");

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;

    const newOtp = [...otp];
    for (let i = 0; i < OTP_LENGTH; i++) {
      newOtp[i] = pasted[i] || "";
    }

    setOtp(newOtp);

    const nextIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputsRef.current[nextIndex]?.focus();
  };

  const handleMouseDown = (e, index) => {
    if (index > firstEmptyIndex && firstEmptyIndex !== -1) {
      e.preventDefault();
      inputsRef.current[firstEmptyIndex]?.focus();
    }
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [disable]);

  const handleVerifyOTP = async () =>{
    let OTP = otp.join('')
    setOTP(OTP)
    await userVerifyOTP(OTP,email)
    clearState();
  }
  useEffect(()=>{
    if(isSuccess === true){
      setPage('resetPassword')
    }
  },[isSuccess])
  return (
    <div className="w-lg mx-auto my-8 bg-white shadow rounded-xl">
      <div className="flex flex-col items-center gap-4 p-8">
        <h1 className="font-bold text-xl">Confirm OTP</h1>
        <span className="text-gray-400">We have sent a otp to {email}</span>
        <span className="text-gray-400">please check your email</span>
        <div className="flex gap-2 py-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              onMouseDown={(e) => handleMouseDown(e, index)}
              className="w-12 h-12 text-center text-xl font-semibold
              border border-gray-400 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          ))}
        </div>

        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
          <p>Didn't recieve code?</p>{" "}
          <a
            className="flex flex-row items-center"
            style={{
              color: disable ? "gray" : "blue",
              cursor: disable ? "none" : "pointer",
              textDecorationLine: disable ? "none" : "underline",
            }}
          >
            {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
          </a>
        </div>
        <button
        onClick={handleVerifyOTP}
        className="w-full py-4 bg-amber-500 text-medium text-white hover:opacity-80 hover:text-gray-600 transition-all duration-300">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default InputOTP;
